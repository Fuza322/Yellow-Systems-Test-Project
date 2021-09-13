import axios from "axios"

export const instance = axios.create({
    baseURL: "https://jogtracker.herokuapp.com/api/v1/",
    withCredentials: true,
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
})

// api
export const authAPI = {
    login() {
        return instance.post<LoginGetTokenResponseType>(`auth/uuidLogin`, {uuid: "hello"})
            .then((res) => {
                return res.data.response.access_token
            })
    },
    me() {
        return instance.get<AuthMeResponseType>(`auth/user`)
            .then((res) => {
                console.log(res)
                return res.data.response
            })
    }
}

export const jogsAPI = {
    getJogs() {
        return instance.get<GetJogsResponseType>(`data/sync`)
            .then((res) => {
                return res.data.response.jogs
            })
    },
    addJog(date: string, time: number, distance: number) {
        return instance.post<AddAndUpdateJogResponseType>(`data/jog`, {date: date, time: time, distance: distance})
    },
    updateJog(date: string, time: number, distance: number, id: number, user_id: string) {
        return instance.put<AddAndUpdateJogResponseType>(`data/jog`, {date: date, time: time, distance: distance})
    }
}

//types
export type LoginGetTokenResponseType = {
    response: {
        access_token: string
    }
}

export type UserType = {
    id: ""
    email: string
    first_name: string
    last_name: string
    phone: string
    role: "user"
}

export type AuthMeResponseType = {
    response: UserType
}

export type JogType = {
    id: number
    user_id: string
    date: number
    distance: number
    time: number
}

export type GetJogsResponseType = {
    response: {
        jogs: Array<JogType>
        users: Array<UserType>
    }
    timestamp: number
}

export type AddAndUpdateJogResponseType = {
    response: {
        id: number,
        user_id: number,
        distance: number,
        time: number,
        date: string,
        created_at: string,
        updated_at: string
    }
    timestamp: number
}