import axios from "axios"

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    // baseURL: "http://localhost:7542/2.0/",
    withCredentials: true
})

// api
export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<any>(`auth/login`, {email, password, rememberMe})
    },
}