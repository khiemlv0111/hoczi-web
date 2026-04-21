// components/post/RichTextEditor.tsx
'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { useRef, useState } from 'react'

import {
  Bold, Italic, List, ListOrdered, ImageIcon, Smile, Link2, Link2Off, Baseline
} from 'lucide-react'
import Link from '@tiptap/extension-link'
import { Color } from '@tiptap/extension-color'
import { TextStyle } from '@tiptap/extension-text-style'

const EMOJI_LIST = ['😀', '😂', '❤️', '👍', '🔥', '🎉', '🙏', '💯', '😎', '🤔', '✅', '❌', '⚠️', '⏳', '🟢', '🟡', '🔴', '📌', '📎', '⚡', '🐛', '💀', '👉', '🔐']

const COLOR_PRESETS = [
  '#000000', '#374151', '#6B7280', '#EF4444', '#F97316',
  '#EAB308', '#22C55E', '#3B82F6', '#8B5CF6', '#EC4899',
  '#06B6D4', '#14B8A6', '#F59E0B', '#84CC16', '#A855F7',
]

interface RichTextEditorProps {
  onChange?: (html: string) => void
  placeholder?: string
}

export function RichTextEditor({ onChange, placeholder }: RichTextEditorProps) {
  const fileRef = useRef<HTMLInputElement>(null)
  const emojiRef = useRef<HTMLDivElement>(null)
  const colorRef = useRef<HTMLDivElement>(null)
  const [currentColor, setCurrentColor] = useState('#000000')

  const editor = useEditor({
    immediatelyRender: false, // 👈 thêm dòng này
    extensions: [
      StarterKit,
      Image.configure({ inline: false, allowBase64: true }),
      TextStyle,
      Color,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 underline cursor-pointer',
        },
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'outline-none min-h-[120px] text-sm text-gray-800 leading-relaxed',
      },
    },
    onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
  })

  const insertImage = (file: File) => {
    const reader = new FileReader()
    reader.onload = e => {
      editor?.chain().focus().setImage({ src: e.target?.result as string }).run()
    }
    reader.readAsDataURL(file)
  }
  const setLink = () => {
    const url = window.prompt('Nhập URL:', editor?.getAttributes('link').href ?? 'https://')
    if (!url) return
    if (url === '') {
      editor?.chain().focus().unsetLink().run()
      return
    }
    editor?.chain().focus().setLink({ href: url, target: '_blank' }).run()
  }

  const toggleEmoji = () => {
    if (emojiRef.current) {
      emojiRef.current.classList.toggle('hidden')
    }
  }

  const toggleColorPicker = () => {
    colorRef.current?.classList.toggle('hidden')
  }

  const applyColor = (color: string) => {
    setCurrentColor(color)
    editor?.chain().focus().setColor(color).run()
    colorRef.current?.classList.add('hidden')
  }

  if (!editor) return null

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-100 transition-all">

      {/* Toolbar */}
      <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-100">
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </ToolbarBtn>

        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </ToolbarBtn>

        <div className="w-px h-4 bg-gray-200 mx-1" />

        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
          title="Bullet list"
        >
          <List className="w-4 h-4" />
        </ToolbarBtn>

        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
          title="Ordered list"
        >
          <ListOrdered className="w-4 h-4" />
        </ToolbarBtn>

        <div className="w-px h-4 bg-gray-200 mx-1" />

        {/* Image upload */}
        <ToolbarBtn onClick={() => fileRef.current?.click()} title="Insert image">
          <ImageIcon className="w-4 h-4" />
        </ToolbarBtn>

        <ToolbarBtn
          onClick={() => editor.chain().focus().unsetLink().run()}
          title="Remove link"
        >
          <Link2Off className="w-4 h-4" />
        </ToolbarBtn>


        <ToolbarBtn
          onClick={setLink}
          active={editor.isActive('link')}
          title="Insert link"
        >
          <Link2 className="w-4 h-4" />
        </ToolbarBtn>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={e => e.target.files?.[0] && insertImage(e.target.files[0])}
        />

        <div className="w-px h-4 bg-gray-200 mx-1" />

        {/* Text color picker */}
        <div className="relative">
          <ToolbarBtn onClick={toggleColorPicker} title="Text color">
            <span className="flex flex-col items-center gap-0.5">
              <Baseline className="w-4 h-4" />
              <span className="w-4 h-0.5 rounded-full" style={{ backgroundColor: currentColor }} />
            </span>
          </ToolbarBtn>
          <div
            ref={colorRef}
            className="hidden absolute top-9 left-0 z-10 bg-white border border-gray-200 rounded-lg shadow-md p-2 w-44"
          >
            <div className="grid grid-cols-5 gap-1 mb-2">
              {COLOR_PRESETS.map(color => (
                <button
                  key={color}
                  onClick={() => applyColor(color)}
                  title={color}
                  className="w-7 h-7 rounded-full border border-gray-200 hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5 border-t border-gray-100 pt-2">
              <label className="text-xs text-gray-500 shrink-0">Custom:</label>
              <input
                type="color"
                value={currentColor}
                onChange={e => applyColor(e.target.value)}
                className="w-full h-7 rounded cursor-pointer border border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Emoji picker */}
        <div className="relative">
          <ToolbarBtn onClick={toggleEmoji} title="Emoji">
            <Smile className="w-4 h-4" />
          </ToolbarBtn>
          <div
            ref={emojiRef}
            className="hidden absolute top-8 left-0 z-10 bg-white border border-gray-200 rounded-lg shadow-md p-2 grid grid-cols-5 gap-1 w-44"
          >
            {EMOJI_LIST.map(emoji => (
              <button
                key={emoji}
                onClick={() => {
                  editor.chain().focus().insertContent(emoji).run()
                  emojiRef.current?.classList.add('hidden')
                }}
                className="text-lg hover:bg-gray-100 rounded p-1 transition-colors"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Editor area */}
      <div className="px-3 py-2.5 relative min-h-[250px]">
        {editor.isEmpty && (
          <p className="absolute top-2.5 left-3 text-sm text-gray-400 pointer-events-none select-none">
            {placeholder ?? 'Enter content...'}
          </p>
        )}
        <EditorContent editor={editor} />
      </div>

      {/* Tiptap default list styles */}
      <style>{`
        .ProseMirror ul { list-style-type: disc; padding-left: 1.25rem; }
        .ProseMirror ol { list-style-type: decimal; padding-left: 1.25rem; }
        .ProseMirror li { margin: 2px 0; }
        .ProseMirror img { max-width: 100%; border-radius: 8px; margin: 8px 0; }
        .ProseMirror strong { font-weight: 600; }
        .ProseMirror em { font-style: italic; }
      `}</style>
    </div>
  )
}

function ToolbarBtn({
  children, onClick, active, title
}: {
  children: React.ReactNode
  onClick: () => void
  active?: boolean
  title?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-1.5 rounded transition-colors ${active
        ? 'bg-blue-50 text-blue-600'
        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
        }`}
    >
      {children}
    </button>
  )
}