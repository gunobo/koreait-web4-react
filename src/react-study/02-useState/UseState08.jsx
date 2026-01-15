import React, { useState } from 'react'

export default function UseState08() {
    const[todos, setTodos] = useState([])
    const[inputVal, setInputVal] = useState("")

    const addTodo = () => {
        if (inputVal.trim() === "")
            return

        setTodos([...todos, inputVal])
        setInputVal("")
    }
    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }

  return (
    <div>
        <input
            type="text"
            value={inputVal}
            onChange={handleInputChange}
            placeholder='할 일 입력'
        />
        <button onClick={addTodo}>할 일 추가</button>
        {/* 추가 된게 없다면, <p>"할일이 없습니다."<p>*/}
        {/* 요소가 하나 이상이라면, <ul> <li></li> </ul> */}
        {todos.length === 0 ? (
            <p>할 일이 없습니다.</p>
        ) : (
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        )}
    </div>
  )
}
