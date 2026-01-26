// Axios 사용해서 import할 api 요청 함수 작성
// https://jsonplaceholder.typicode.com
// root/users로 get요청
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const getUsers = async () => {
    const response = await api.get("/users");
    return response.data;
}