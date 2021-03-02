import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
}

export const RichTextEditor: React.FC<RichTextEditorProps> = (props: RichTextEditorProps) => {
  const { value, onChange } = props

  return (
    <div>
      <ReactQuill value={value} onChange={onChange} theme="snow" modules={quillModules} />
    </div>
  )
}
