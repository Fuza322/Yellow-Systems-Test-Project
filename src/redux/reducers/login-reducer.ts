import {ThunkAction} from "redux-thunk"
import {AppActionsType, AppRootStateType} from "../store"
import {authAPI} from "../../api/api"

enum LOGIN_ACTIONS_TYPES {
    // SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN",
}

const initialState = {
    // isLoggedIn: false,
}

type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        /*case LOGIN_ACTIONS_TYPES.SET_IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }*/
        default:
            return state
    }
}

// actions
/*export const setIsLoggedInAC = (isLoggedIn: boolean) => {
    return {type: LOGIN_ACTIONS_TYPES.SET_IS_LOGGED_IN, isLoggedIn} as const
}*/

// thunks
export const loginTC = (): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            //const res = await authAPI.login()
            const res = await authAPI.login()
            localStorage.setItem("token", res)
            //dispatch(setIsLoggedInAC(true))
        } catch (e) {
            //dispatch(setIsLoggedInAC(false))
        } finally {
            // some code...
        }
    }

// types
//export type LoginReducerActionsType = ReturnType<typeof setIsLoggedInAC>
