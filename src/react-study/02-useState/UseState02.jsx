import React, { useState } from 'react'

export default function UseState02() {
    // setter를 호출하면 컴포넌트를 재호출된다.
  // 상태(state) 생성 //
  const [count, setCount] = useState(0)
  const handlePlusClick = () => {
    setCount(count + 1)
  }
  const handleMinusClick = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>카운터</h1>
      <h3>{count}</h3>
      <button onClick={handlePlusClick}>+1</button>
      <button onClick={handleMinusClick}>-1</button>
    </div>
  )
}
