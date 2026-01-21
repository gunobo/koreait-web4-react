// useParam

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

// url 경로에서 값을 추출하는 hook
export default function Router02() {

  return (
    <BrowserRouter>
      <Routes>
        {/* :id -> 나중에 useParams의 key값이 id가 됨 */}
        <Route path="/user/:id" element={<UserDetail />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

// url에 정보를 담는경우
// localhost:5173/user/3
// -> id가 3번인 사용자 조회
function UserDetail() {

    const { id } = useParams();
    return (
        <div>
            <h1>사용자 정보</h1>
            <p>사용자 ID:</p>
            <Link>목록으로</Link>
        </div>
    )
}