import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import * as s from './style'

const reservations = [
    { id: 1, name: '홍길동', room: '101호' , date: "2026-01-25"},
    { id: 2, name: '김길동', room: '201호' , date: "2026-01-26"},
    { id: 3, name: '이길동', room: '301호' , date: "2026-01-27"},
    { id: 4, name: '최길동', room: '401호' , date: "2026-01-28"},
]


export default function Router03() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ReservationList />} />
            <Route path='/detail/:id' element={<ReservationDetail />} />
        </Routes>
    </BrowserRouter>
  )
}
// 도전! ReservationList 컴포넌트에서
// ReservationCard를 map으로 뿌려주세요.
// 해당 카드를 클릭하면 Deatil로 이동하게 만들어주세요
// url에 reservation의 id가 포함되어야합니다.


function ReservationDetail() {
    const { id } = useParams();
    const reservation = reservations.find(r => r.id === parseInt(id));

    return (
        <div>
            <h1>예약 상세정보</h1>
            {reservation ? (
                <div>
                    <p><strong>이름:</strong> {reservation.name}</p>
                    <p><strong>객실:</strong> {reservation.room}</p>
                    <p><strong>날짜:</strong> {reservation.date}</p>
                </div>
            ) : (
                <p>예약 정보를 찾을 수 없습니다.</p>
            )}
        </div>
    )
}

function ReservationCard({reservation, onClick}) {
    const {id, name, room, date} = reservation;
    return (
        <div css={s.card} onClick={onClick}>
            <h3>{name}님의 예약</h3>
            <p>예약번호: {id}</p>
            <p>객실: {room}</p>
            <p>날짜: {date}</p>
        </div>
    )
}

function ReservationList() {
    const navigate = useNavigate();

    return (
        <div css={s.container}>
            <h1>예약목록</h1>
            <div css={s.cardList}>
                {reservations.map((r) => {
                    return <ReservationCard 
                                key={r.id} 
                                reservation={r} 
                                onClick={() => navigate(`/detail/${r.id}`)} 
                           />
                })}
            </div>
        </div>
    )
}