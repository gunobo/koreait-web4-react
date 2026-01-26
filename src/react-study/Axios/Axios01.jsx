// axios 라이브러리
/*
    - fetch() 함수와 다른점
    1. 400번 or 500번 에러를 에러로 생각하지 않음
    기존에는 에러를 throw해줬어야 했음
    -> axios 200대가 아니면 알아서 던져준다
    2.인터셉트 기능
    -> 모든 요청 및 응답에 필터레이어 추가 가능

    - 동일한 점
    Promise 기반

    npm install axios
*/

import axios from "axios";
import { useEffect, useState } from "react"

/*
[
    {
        id:1,
        name:"키보드"
        price:50000
    },
    {
        id:2,
        name:"마우스"
        price:30000
    }
]  

*/
export default function Axios01() {
    // 1.api로 받아온 데이터를 저장할 상태
    const [product,setProduct] = useState([]);
    
    // 2. 데이터를 다시 불러올지 결정하는 상태
    const [refetch, setRefetch] = useState(false);


    // 데이터를 요청하는 시점?
    // 컴포넌트가 처음 렌더링될때 -> 처음마운트될때
    useEffect(()=>{
        // api 호출시 첫 렌더링 1회
        // get요청 axiox.get(컨트롤러 주소)
        // get에 promise 반환
        axios
        .get("http://localhost:8080/product/all")
        .then((response) => {
            // resposne.data에 컨트롤라가 body에 담아준 데이터가 존재
            console.log(response.data)
            setProduct()
        })
    },[refetch])
    // refetch의 상태가 변할때마다 실행

  return (
    <div>
        <button onClick={(prev) => setRefetch(!prev)}>재요청</button>
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>상품명</th>
                <th>가격</th>
            </tr>
            </thead>
            <tbody>
                {
                    product.map((p) => {
                        const {id,name,price} = p;
                        return (
                            <tr id={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
