// Strict JSON schemas for structured outputs. Strict mode requires every property in `required`
// and `additionalProperties: false`; optional values are expressed as nullable types.

export const TASK_TYPES = ['reading_passage', 'grammar_explanation', 'exercise_set'] as const;
export type TaskType = typeof TASK_TYPES[number];

export const ITEM_TYPES = ['multiple_choice', 'fill_in_blank', 'sentence_ordering', 'true_false'] as const;
export type ItemType = typeof ITEM_TYPES[number];

const nullableString = { type: ['string', 'null'] };
const nullableInteger = { type: ['integer', 'null'] };

function obj(properties: Record<string, unknown>) {
    return {
        type: 'object',
        properties,
        required: Object.keys(properties),
        additionalProperties: false,
    };
}

const citation = obj({
    documentId: { type: 'string', description: 'The documentId shown in the source header, e.g. "doc-12" or "kb-5".' },
    page: { ...nullableInteger, description: 'Page number from a [page N] marker, or null.' },
    section: { ...nullableString, description: 'Lesson or section label if shown, or null.' },
});

const item = obj({
    type: { type: 'string', enum: [...ITEM_TYPES] },
    prompt: { type: 'string' },
    pinyin: { ...nullableString, description: 'Pinyin for the prompt when requested, else null.' },
    options: {
        type: 'array', items: { type: 'string' },
        description: 'multiple_choice/true_false: the choices. sentence_ordering: the shuffled segments. fill_in_blank: [] or word bank.',
    },
    correctOptionIndex: { ...nullableInteger, description: 'multiple_choice/true_false: 0-based index of the correct option, else null.' },
    correctAnswer: { ...nullableString, description: 'fill_in_blank: the expected answer, else null.' },
    correctOrder: {
        type: 'array', items: { type: 'integer' },
        description: 'sentence_ordering: 0-based indexes of options in correct order, else [].',
    },
    explanation: { type: 'string' },
    citations: { type: 'array', items: citation },
});

const common = {
    title: { type: 'string' },
    hskStandard: { type: 'string', enum: ['hsk2', 'hsk3'] },
    hskLevel: { type: 'integer' },
    script: { type: 'string', enum: ['simplified', 'traditional'] },
    insufficientEvidence: {
        type: 'boolean',
        description: 'true when the retrieved sources do not support the request; then leave items empty.',
    },
};

const schemas: Record<TaskType, Record<string, unknown>> = {
    reading_passage: obj({
        ...common,
        passage: { type: 'string' },
        passagePinyin: nullableString,
        translation: nullableString,
        vocabulary: {
            type: 'array',
            items: obj({ word: { type: 'string' }, pinyin: { type: 'string' }, meaning: { type: 'string' } }),
        },
        items: { type: 'array', items: item },
        citations: { type: 'array', items: citation },
    }),
    grammar_explanation: obj({
        ...common,
        grammarPoint: { type: 'string' },
        structure: { type: 'string' },
        explanation: { type: 'string' },
        examples: {
            type: 'array',
            items: obj({ sentence: { type: 'string' }, pinyin: nullableString, translation: { type: 'string' } }),
        },
        commonMistakes: { type: 'array', items: { type: 'string' } },
        items: { type: 'array', items: item },
        citations: { type: 'array', items: citation },
    }),
    exercise_set: obj({
        ...common,
        instructions: { type: 'string' },
        items: { type: 'array', items: item },
        citations: { type: 'array', items: citation },
    }),
};

export function generationSchema(task: TaskType) {
    return { name: task, schema: schemas[task] };
}

// Admin chat assistant: answers from documents when relevant, otherwise from general knowledge.
export const chatSchema = {
    name: 'assistant_reply',
    schema: obj({
        answer: { type: 'string', description: 'Plain text answer. No Markdown.' },
        answerSource: {
            type: 'string',
            enum: ['data', 'documents', 'general', 'mixed'],
            description: 'data: from Hoczi database tools; documents: from retrieved Hoczi sources; general: general knowledge only; mixed: documents + general knowledge.',
        },
        citations: { type: 'array', items: citation },
    }),
};

export const askSchema = {
    name: 'curriculum_answer',
    schema: obj({
        answer: { type: 'string' },
        insufficientEvidence: { type: 'boolean' },
        citations: { type: 'array', items: citation },
    }),
};
