import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
// 1. src/assets 에 저장된 이미지 -> 빌드시 포함된다
import batmanImg from '../../assets/batman.webp';
// 2. public/assets 에 저장된 이미지 -> 정적이미지
// "/"로 접근할 수 있음

const cardStyle = (isActive) => css`
  position: relative;
  width: ${isActive ? "220px" : "120px"};
  height: ${isActive ? "330px" : "180px"};
  padding: 10px;
  box-sizing: border-box;
  background-color: ${isActive ? "#ddd" : "#eee"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
`;

const imageStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const contentStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  color: white;
  background: rgba(0, 0, 0, 0.6);
`;


// 화살표함수형으로 만드는 컴포넌트
const MovieCard = ({movie, isActive, onClick}) => {
  const {title, year, description, imgUrl} = movie;

  return (
    // 전달받은 props에 따라서 다르게 css가 적용됨
    <div onClick={onClick} css={cardStyle(isActive)}>
      <img src={imgUrl} alt={title} css={imageStyle}/>
      <div css={contentStyle}>
        <h4>{title}</h4>
        <small>{year}</small>
        {isActive && <p>{description}</p>}
      </div>
    </div>
  );
}

const MOVIES = [
  {
    id: 1,
    title: "인셉션",
    year: 2010,
    description: "꿈 속에서 꿈꾸는 범죄스릴러",
    imgUrl: "https://i.namu.wiki/i/ujkt6TPVoeYxq3q9h2yE_MckhgdJ6rOcdgnkCcs1ivWzB5hlnPBCEzatFDMApkNfWlxuCTQYH3d2SMj632Fzsg.webp"
  },
  {
    id: 2,
    title: "인터스텔라",
    year: 2014,
    description: "인류생존과 시공간 표현한 SF 영화",
    imgUrl: "https://i.namu.wiki/i/yd6wnRIWEVMFY3wNjB-WKc0_nXstbPdiq87sfkbe3wJ8y2ZAhoZAfpebxEgc9bU1xIQh2OmD7Oi12CkFDhWbag.webp"
  },
  {
    id: 3,
    title: "배트맨: 다크나이트",
    year: 2008,
    description: "히스레저의 조커가 멋지다",
    imgUrl: batmanImg
  },
]


const layout = css`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export default function Emotion02() {
  const [activeId, setActiveId] = useState(null);
  
  useEffect(() => {
    // setInterval(() => {}, ms) 함수
    // ms마다 첫번째 매개변수로 전달받은 함수를 실행
    const timer = setInterval(() => { // 1. senInterval -> setInterval 오타 수정
      setActiveId((prev) => {
        if (prev === null) {
          // 아무것도 선택되어있지 않으면 -> null
          // 0번째 movie(js객체)의 id값으로 설정
          return MOVIES[0].id;
        }

        // 어떤 movie가 선택됬는지 식별
        // movie의 id로 MOVIES의 몇번째 idx에 있는지?
        // find() -> 개게리던, findIndex() -> idx 리턴
        const currentIndx = MOVIES.findIndex((m) => prev === m.id); // 2. find -> findIndex 로 변경

        const nextIdx = currentIndx === MOVIES.length - 1 ? 0 : currentIndx + 1;
        return MOVIES[nextIdx].id;  
      })
    }, 2000);

    // setInterval, setTimeout 등
    // 브라우저 api를 useEffect에서 사용한 경우
    // 언마운트시 해제해줘야함.
    return () => clearInterval(timer); // 3. clearInterval 추가 (메모리 누수 방지)
  }, [])

  return (
    <div css={layout}>
      {/* map()으로 MovieCard들을 렌더링 시켜 주세요*/}
      {MOVIES.map((m) => {
        return <MovieCard 
        movie={m} 
        key={m.id}
        onClick={() => setActiveId(activeId === m.id ? null : m.id)} // 같은카드를 한번 더 누르면 null -> 해제
        isActive={activeId === m.id}
        />
      })}
    </div>
  )
}