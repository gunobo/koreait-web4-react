import React, { useState } from 'react'

export default function UseState09() {
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState(null);

    const comments = [
        {author: "홍길동", title:"배송 빨라요"},
        {author: "김길동", title:"배송 느려요"},
        {author: "이길동", title:"아자스"},
        {author: "박길동", title:"포장 꼼꼼해요"},
        {author: "최길동", title:"생각보다 크기가 작아요"},
    ]
    const handleSearch = () => {
        const result = comments.find(
            (item) => item.author === author
        );
        setComment(result || null);
    };
  return (
    <div>
        <h1>리뷰 검색(작성자)</h1>
        <input
            type="text"
            value={author}
            placeholder='작성자 이름을 입력하세요'
            onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
        {/* 검색결과가 있으면, title을 보여주세요 */}
        {/* 없으면, <h2>"해당 작성자의 글을 찾을수 없습니다"</h2> */}
        {comment ? (
                <h2>{comment.title}</h2>
                ) : (
                author !== "" && <h2>해당 작성자의 글을 찾을 수 없습니다</h2>
            )
        } 
    </div>
  )
}
