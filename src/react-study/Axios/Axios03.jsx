import { useEffect, useState } from "react"
import { getUsers } from "./apis/studyApi"

export default function Axios03() {
    // 작성한 api함수를 import해서 response들을 아래에 return에 렌더링 시켜주세요!
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error("데이터를 불러오는데 실패했습니다:", error);
            }
    };
    useEffect(() => { 
        fetchUsers();
    }, []);

  return (
    <div>
        <h2>사용자 목록</h2>
        {/* 아래의 div를 카드 컴포넌트라고 생각하시고
          서버에서 받아온 데이터를 map으로 렌더링시켜주세요
        */}
        {
            users.map((user) => (
            <div key={user.id}>
                <h3>유저이름: {user.username}</h3>
                <p>이름: {user.name}</p>
                <p>이메일: {user.email}</p>
            </div>
            ))
        }
    </div>
  )
}