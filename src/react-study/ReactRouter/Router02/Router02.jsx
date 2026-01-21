// useParam

import { BrowserRouter, Route, Routes, useParams, Link } from "react-router-dom"; // 1. Link 추가 임포트

// url 경로에서 값을 추출하는 hook
export default function Router02() {

  return (
    <BrowserRouter>
      <Routes>
        {/* :id -> 나중에 useParams의 key값이 id가 됨 */}
        <Route path="/user/:id/:name" element={<UserDetail />} />
        <Route path="/" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  )
}

// url에 정보를 담는경우
// localhost:5173/user/3
// -> id가 3번인 사용자 조회
function UserDetail() {

    const { id, name } = useParams();
    return (
        <div>
            <h1>사용자 정보</h1>
            <p>사용자 ID: {id}</p>
            <p>사용자 명: {name}</p>
            <Link to="/">목록으로</Link>
        </div>
    )
}

function UserList() {
  const user = [
    { id: 1, name: '김철수' },
    { id: 2, name: '박철수' },
    { id: 3, name: '이철수' },
  ]
  return (
    <div>
      <h2>구독자목록</h2>
      {user.map((user) => {
        const {id,name} = user;
        return (
          <div key={id}>
            {/* id정보를 url로 전달 */}
            <Link to={`/user/${id}`}>{name}</Link>
          </div>
        )
      })}
    </div>
  )
}