'use client'

import { EditorContent, useEditor, useEditorState } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
    Bold, Heading2, Heading3, Italic, Link2, Link2Off, List, ListOrdered, Quote, Strikethrough, Underline,
} from 'lucide-react'
import type { RichDoc } from '@/data/services/adminEmail.service'
import { useTr } from './shared'

const LINK_PATTERN = /^(https?:\/\/|mailto:)\S+$/i

// Restricted editor for emails: only what the server accepts (helpers/richText.ts) — no images, colors or code.
export function EmailEditor({ onChange }: { onChange: (doc: RichDoc, isEmpty: boolean) => void }) {
    const tr = useTr()

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: { levels: [2, 3] },
                code: false,
                codeBlock: false,
                link: {
                    openOnClick: false,
                    autolink: true,
                    defaultProtocol: 'https',
                    protocols: ['mailto'],
                    isAllowedUri: (url) => LINK_PATTERN.test(url),
                    HTMLAttributes: { class: 'text-blue-600 underline' },
                },
            }),
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'outline-none min-h-[220px] text-[14px] text-gray-800 leading-relaxed prose-email',
            },
        },
        onUpdate: ({ editor }) => onChange(editor.getJSON() as RichDoc, editor.isEmpty),
    })

    const state = useEditorState({
        editor,
        selector: ({ editor }) => editor ? {
            bold: editor.isActive('bold'),
            italic: editor.isActive('italic'),
            underline: editor.isActive('underline'),
            strike: editor.isActive('strike'),
            h2: editor.isActive('heading', { level: 2 }),
            h3: editor.isActive('heading', { level: 3 }),
            bullet: editor.isActive('bulletList'),
            ordered: editor.isActive('orderedList'),
            quote: editor.isActive('blockquote'),
            link: editor.isActive('link'),
        } : null,
    })

    if (!editor) return <div className="border border-gray-300 rounded-md min-h-[260px] bg-gray-50" />

    const setLink = () => {
        const current = (editor.getAttributes('link').href as string | undefined) ?? 'https://'
        const url = window.prompt(tr('link_prompt'), current)?.trim()
        if (url === undefined) return
        if (!url) {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()
            return
        }
        if (!LINK_PATTERN.test(url)) {
            alert(tr('link_invalid'))
            return
        }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }

    const tools = [
        { key: 'tb_bold', icon: Bold, active: state?.bold, run: () => editor.chain().focus().toggleBold().run() },
        { key: 'tb_italic', icon: Italic, active: state?.italic, run: () => editor.chain().focus().toggleItalic().run() },
        { key: 'tb_underline', icon: Underline, active: state?.underline, run: () => editor.chain().focus().toggleUnderline().run() },
        { key: 'tb_strike', icon: Strikethrough, active: state?.strike, run: () => editor.chain().focus().toggleStrike().run() },
        { key: 'tb_h2', icon: Heading2, active: state?.h2, run: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
        { key: 'tb_h3', icon: Heading3, active: state?.h3, run: () => editor.chain().focus().toggleHeading({ level: 3 }).run() },
        { key: 'tb_bullet', icon: List, active: state?.bullet, run: () => editor.chain().focus().toggleBulletList().run() },
        { key: 'tb_ordered', icon: ListOrdered, active: state?.ordered, run: () => editor.chain().focus().toggleOrderedList().run() },
        { key: 'tb_quote', icon: Quote, active: state?.quote, run: () => editor.chain().focus().toggleBlockquote().run() },
        { key: 'tb_link', icon: Link2, active: state?.link, run: setLink },
        { key: 'tb_unlink', icon: Link2Off, active: false, run: () => editor.chain().focus().extendMarkRange('link').unsetLink().run() },
    ]

    return (
        <div className="border border-gray-300 rounded-md bg-white focus-within:ring-1 focus-within:ring-blue-500">
            <div className="flex flex-wrap gap-0.5 border-b border-gray-200 px-2 py-1.5">
                {tools.map(({ key, icon: Icon, active, run }) => (
                    <button key={key} type="button" title={tr(key)} aria-label={tr(key)} onClick={run}
                        className={`p-1.5 rounded hover:bg-gray-100 ${active ? 'bg-blue-50 text-blue-700' : 'text-gray-600'}`}>
                        <Icon size={15} />
                    </button>
                ))}
            </div>
            <div className="px-3 py-2 [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-3 [&_blockquote]:text-gray-600 [&_p]:my-1">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}
