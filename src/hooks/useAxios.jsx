import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    // baseURL: 'https://todo-server-ashen-nine.vercel.app/api/v1',
    withCredentials: true
})

const useAxios = () => {
    return instance;
};

export default useAxios;