import React, { useState } from 'react'
import Modal from './Modal'

export default function ModalContainer() {
    const [open, setOpen] = useState(false)
    const post = {
        title: "첫번째 게시물",
        content: "첫번째 게시물을 클릭하셨습니다."
    }
  return (
    <div>
        <button onClick={() => setOpen(true)}>모달열기</button>
        <Modal
            open={open}
            title={post.title}
            content={post.content}
            onClose={() => setOpen(false)}
        />
    </div>
  )
}
