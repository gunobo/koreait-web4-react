import { useState } from "react";

const overlayStyle = { // 배경
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const modalStyle = {
    backgroundColor: "white",
    width: "420px",
    height: "360px",
    padding: "20px",
    borderRadius: "8px"
};

export default function Modal({open, title, content, onClose}) {
    if (!open) return null
  return (
    <div style={overlayStyle}>
        <div style={modalStyle}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={onClose}>닫기</button>
        </div>
    </div>
  )
}
