import React, { useState } from 'react'
import { useBookList } from './store/bookStore'
import { preinit } from 'react-dom';

export default function Zustand04() {
    const {books, addBook, removeBook, updateBook} = useBookList();
    const [form, setFrom] = useState({
        title: "",
        author: "",
        price: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFrom ((prev)=> {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    // 추가 버튼 클릭 시 실행될 함수
    const handleAdd = () => {
        if (!form.title || !form.author || !form.price) return;
        addBook(form);
        setFrom({ title: "", author: "", price: "" });
    }

  return (
    <div>
      <h2>책 정보 입력</h2>
      <input 
        type="text"
        name='title'
        placeholder='책제목'
        onChange={handleChange}
        value={form.title}
      />
      <input 
        type="text"
        name='author'
        placeholder='저자'
        onChange={handleChange}
        value={form.author}
      />
      <input 
        type="number"
        name='price'
        placeholder='가격'
        onChange={handleChange}
        value={form.price}
      />
      <button onClick={handleAdd}>추가</button>
      <ul>
        {books.map((book) => (
            <Book 
                key={book.id} 
                book={book} 
                onRemove={removeBook} 
                onUpdate={updateBook} 
            />
        ))}
      </ul>
    </div>
  )
}

// onRemove, onUpdate는 useBookList로 받은 함수
function Book({book, onRemove, onUpdate}) {
    const {id, title, author, price} = book;
    const [isEditing, setIsEditing] = useState(false);
    const [newPrice, setNewPrice] = useState(price);

    const handleUpdate = () => {
        onUpdate(id, newPrice);
        setIsEditing(false);
    }

    return (
        <li>
            <strong>{title}</strong> - {author}
            {/* 수정하기 버튼누르면
            1. price를 다시 입력할수 있게 input나오게
            2. 완료버튼
            3. 취소버튼
            */}
            
            {isEditing ? (
                <>
                    <input 
                        type="number" 
                        value={newPrice} 
                        onChange={(e) => setNewPrice(e.target.value)} 
                    />
                    <button onClick={handleUpdate}>완료</button>
                    <button onClick={() => setIsEditing(false)}>취소</button>
                </>
            ) : (
                <>
                    <span>{price}원</span>
                    <button onClick={() => setIsEditing(true)}>수정</button>
                    <button onClick={() => onRemove(id)}>삭제</button>
                </>
            )}
        </li>
    )
}