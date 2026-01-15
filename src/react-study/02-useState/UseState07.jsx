import React, { useState } from 'react'

// 조건부 랜더링 - UI상태나 or 권한상태
export default function UseState07() {
    // 로그인상태
    const [isLogin, setIsLogin] = useState(false);
    const [accessToekn, setAccessToken] = useState(null);

    const toggleLogin = () => {
        setIsLogin((prev) => !prev);
    }

    const getTokenClick = () => {
        setAccessToken("토큰이에요!");
    }
    // JS의 모든 값은 boolean값이 될수 있다.
    // A가 truthy면 B가 평가
    // A && B
    // 값 && 함수(컴포넌트) -> 값이 truthy일때만 컴포넌트가 호출
  return (
    // 삼항 연산자
    // && 연산자
    <div>
        <button onClick={toggleLogin}>{isLogin ? "로그아웃" : "로그인"}</button>
        <h2>{isLogin ? "어서오세요" : "로그인이 필요합니다"}</h2>
        <button onClick={getTokenClick}>토큰 가져오기</button>
        {accessToekn && <p>토큰 갱신 성공!</p>}
    </div>
  )
}
