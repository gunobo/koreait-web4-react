import { BrowserRouter, Route, Routes, Link, useSearchParams, useNavigate } from 'react-router-dom'


export default function Router05() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<OrderList />} />
            <Route path="/order" element={<OrderDetail />} />
        </Routes>
    </BrowserRouter>
  )
}

function OrderList() {
    const orders = [
        {product: "노트북", quantity: 1, status:"배송중"},
        {product: "키보드", quantity: 2, status:"배송완료"},
        {product: "마우스", quantity: 3, status:"주문접수"},
    ]
    return (
        <div>
            <h1>주문목록</h1>
            <div>
                {/* orders를 map을 사용하여 카드형식으로 뿌려주세요
                상품이름만 보이면됩니다! */}
                {orders.map((order, index) => (
                    <div key={index}>
                        <Link to={`/order?product=${order.product}&quantity=${order.quantity}&status=${order.status}`}>
                            {order.product}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

// url: /order
function OrderDetail() {
    // props가 아니라 url로 데이터를 전달받아 
    // 각정보를 렌더링해주세요.
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const product = searchParams.get('product');
    const quantity = searchParams.get('quantity');
    const status = searchParams.get('status');

    return (
        <div>
            <h1>주문 상세 페이지</h1>
            <div>
                <p>상품명: {product}</p>
                <p>주문 수량: {quantity}</p>
                <p>배송 상태: {status}</p>
            </div>
            <button onClick={() => navigate("/")}>목록으로</button>
        </div>
    )
}