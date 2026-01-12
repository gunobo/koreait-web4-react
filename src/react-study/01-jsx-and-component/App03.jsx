import React from 'react'

// 컴포넌트는 첫글자가 대문자여야함(class 처럼)
// 파일이름.jsx 과 동일한 이름이어야한다.
export default function App03() {
    const age = 20;
    const forAdults = ["맥주", "와인", "위스키"]
    const forChildren = ["우유", "당근주스", "사이다"]

    const isAdult = age > 19;

    return (
        <div>
            <h1>메뉴</h1>
            <h2>
                {isAdult ? "성인용 메뉴" : "어린이 메뉴"}
            </h2>
            <ul>
                {(isAdult ? forAdults : forChildren).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
