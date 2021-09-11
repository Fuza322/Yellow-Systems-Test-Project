import axios from "axios"

const instance = axios.create({
    baseURL: "https://jogtracker.herokuapp.com/api/v1/",
    withCredentials: true
})

// api
export const authAPI = {
    login() {
        return instance.post<any>(`auth/uuidLogin`, {uuid: "hello"})
            .then((res) => {
                //localStorage.setItem("")
                console.log(res)
                return res
            })
    },
    me() {
        //localStorage.getItem("")
        return instance.get<any>(`auth/user`, {headers: {Authorization: "Bearer токен_из_hello"}})
    }
}

export const jogsAPI = {
    addJog(date: number, time: number, distance: number) {
        //localStorage.getItem("")
        return instance.post<any>(`data/jog`, {date, time, distance}, {headers: {Authorization: "Bearer токен_из_hello"}})
    }
}

