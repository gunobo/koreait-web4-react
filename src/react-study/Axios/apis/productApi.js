// axios는 객체하나를 만들어서 재사용가능
// -> 여러 설정을 미리 정의하고 재사용

import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/product"
});

export const getSearchProductApi = async (q) => {
    // http://localhost:8080/product/search
    const resposne = await instance.get("/search", {
        // params로 정의하면 쿼리스트링 알아서 조립해줌
        // http://localhost:8080/product/search?nameKeyword=키보드
        params: {
            nameKeyword: q
        }
    })
    return resposne;
}