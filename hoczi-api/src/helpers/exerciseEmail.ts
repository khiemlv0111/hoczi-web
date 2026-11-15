import { HtmlEmail } from '../utils/send_email';

// Builds the daily exercise emails. All dynamic text (including AI output) is HTML-escaped.

const LOGO_URL = 'https://d1y3v0ou093g3m.cloudfront.net/18f9b2ba-1237-41ce-b880-cf0aa1d940ab-logo.png';

export type EmailExercise = { position: number; question: string; answer: string; explanation: string };

export type ExerciseEmailInput = {
    to: string;
    userName: string | null | undefined;
    subjectName: string;
    gradeName: string;
    // "YYYY-MM-DD"
    date: string;
    exercises: EmailExercise[];
    unsubscribeUrl: string;
    answerDelayMinutes: number;
};

export function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Escaped text with line breaks kept.
function html(value: string) {
    return escapeHtml(value).replace(/\r?\n/g, '<br>');
}

function formatDate(date: string) {
    const [y, m, d] = date.split('-');
    return `${d}/${m}/${y}`;
}

function layout(title: string, body: string, unsubscribeUrl: string) {
    return `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:24px 12px;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
<div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:8px;padding:24px;">
  <div style="text-align:center;"><img src="${LOGO_URL}" alt="Hoczi" width="56" height="56" style="width:56px;height:56px;"></div>
  <h1 style="font-size:20px;line-height:1.4;margin:16px 0 8px;text-align:center;">${escapeHtml(title)}</h1>
  ${body}
  <hr style="border:none;border-top:1px solid #e4e4e7;margin:24px 0 12px;">
  <p style="font-size:12px;color:#71717a;text-align:center;margin:0;">
    Bạn nhận email này vì đã đăng ký nhận bài tập hằng ngày trên Hoczi.<br>
    <a href="${escapeHtml(unsubscribeUrl)}" style="color:#71717a;">Hủy nhận bài tập</a>
  </p>
</div>
</body></html>`;
}

function greeting(name: string | null | undefined) {
    return name?.trim() ? `Chào ${name.trim()},` : 'Chào bạn,';
}

function questionBlock(e: EmailExercise) {
    return `<div style="margin:16px 0;padding:12px 16px;background:#f8fafc;border-left:4px solid #2563eb;border-radius:4px;">
    <p style="margin:0 0 6px;font-weight:bold;">Bài ${e.position}</p>
    <p style="margin:0;line-height:1.6;">${html(e.question)}</p>
  </div>`;
}

export function buildQuestionsEmail(input: ExerciseEmailInput): HtmlEmail {
    const date = formatDate(input.date);
    const title = `Bài tập ${input.subjectName} – ${input.gradeName} ngày ${date}`;
    const delay = input.answerDelayMinutes >= 60 && input.answerDelayMinutes % 60 === 0
        ? `${input.answerDelayMinutes / 60} giờ`
        : `${input.answerDelayMinutes} phút`;

    const body = `<p>${escapeHtml(greeting(input.userName))}</p>
  <p>Đây là ${input.exercises.length} bài tập của hôm nay. Hãy tự làm trước nhé — đáp án và lời giải sẽ được gửi sau khoảng ${delay}.</p>
  ${input.exercises.map(questionBlock).join('\n')}`;

    const text = [
        greeting(input.userName),
        `Đây là ${input.exercises.length} bài tập ${input.subjectName} – ${input.gradeName} ngày ${date}. Đáp án sẽ được gửi sau khoảng ${delay}.`,
        ...input.exercises.map((e) => `Bài ${e.position}:\n${e.question}`),
        `Hủy nhận bài tập: ${input.unsubscribeUrl}`,
    ].join('\n\n');

    return { to: input.to, subject: `Hoczi – ${title}`, html: layout(title, body, input.unsubscribeUrl), text };
}

export function buildAnswersEmail(input: ExerciseEmailInput): HtmlEmail {
    const date = formatDate(input.date);
    const title = `Đáp án bài tập ${input.subjectName} – ${input.gradeName} ngày ${date}`;

    const blocks = input.exercises.map((e) => `${questionBlock(e)}
  <p style="margin:8px 0 4px;"><strong style="color:#16a34a;">Đáp án:</strong> ${html(e.answer)}</p>
  <p style="margin:8px 0 4px;"><strong>Lời giải:</strong></p>
  <p style="margin:0 0 8px;line-height:1.6;">${html(e.explanation)}</p>`).join('\n');

    const body = `<p>${escapeHtml(greeting(input.userName))}</p>
  <p>Đây là đáp án và lời giải chi tiết cho bài tập hôm nay. So sánh với bài làm của bạn nhé!</p>
  ${blocks}`;

    const text = [
        greeting(input.userName),
        `Đáp án bài tập ${input.subjectName} – ${input.gradeName} ngày ${date}.`,
        ...input.exercises.map((e) => `Bài ${e.position}:\n${e.question}\n\nĐáp án: ${e.answer}\n\nLời giải:\n${e.explanation}`),
        `Hủy nhận bài tập: ${input.unsubscribeUrl}`,
    ].join('\n\n');

    return { to: input.to, subject: `Hoczi – ${title}`, html: layout(title, body, input.unsubscribeUrl), text };
}
