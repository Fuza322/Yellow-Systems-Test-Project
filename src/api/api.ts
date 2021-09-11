import axios from "axios"

const instance = axios.create({
    baseURL: "https://jogtracker.herokuapp.com/api/",
    withCredentials: true
})

// api
export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<any>(`auth/login`, {email, password, rememberMe})
    },
}