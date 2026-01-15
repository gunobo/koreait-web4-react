import React, { useState } from 'react'

export default function UseState05() {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState("");

    // 정의해놓은 상태들로
    // input에 TO-do를 입력하면,
    // ul안에 li들로 Todo들이 보이게 만들어주세요
    const addTodo = () => {
        if (inputVal.trim() === "")
            return  // 빈 값 방지

        setTodos([...todos, inputVal])
        setInputVal("") // 입력창 초기화
    }

  return (
    <div>
        <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder='To-DO 입력'
        />
        <button onClick={addTodo}>TO-DO 추가</button>
        <ul>
            {todos.map((todo, index) => (
                // index를 넣으면 안됨
                // 리액트가 리스트로 랜더링 할때 실제 데이터 기준으로 변경을 감지하는게 아니라
                // key를 기준으로 변경을 감지함
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}
