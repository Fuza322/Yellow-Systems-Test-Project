import {ThunkAction} from "redux-thunk"
import {AppActionsType} from "../store"

enum APP_ACTIONS_TYPES {
    SET_APP_STATUS = "SET_APP_STATUS",
    SET_ERROR = "SET_ERROR",
    SET_FILTER_BUTTON_STATUS = "SET_FILTER_BUTTON_STATUS",
    SET_HEADER_NAV_STATUS = "SET_HEADER_NAV_STATUS"
}

const initialState = {
    isActiveFilterButton: false,
    headerNavStatus: "default" as HeaderNavStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case APP_ACTIONS_TYPES.SET_FILTER_BUTTON_STATUS:
            return {...state, isActiveFilterButton: action.isActiveFilterButton}
        case APP_ACTIONS_TYPES.SET_HEADER_NAV_STATUS:
            return {...state, headerNavStatus: action.headerNavStatus}
       /*case APP_ACTIONS_TYPES.SET_APP_STATUS:
            return {...state, status: action.status}
        case APP_ACTIONS_TYPES.SET_ERROR:
            return {...state, error: action.error}*/
        default:
            return state
    }
}

// actions
export const setAppStatusAC = (status: RequestStatusType) => (
    {type: APP_ACTIONS_TYPES.SET_APP_STATUS, status} as const)

export const setAppErrorAC = (error: string | null) => (
    {type: APP_ACTIONS_TYPES.SET_ERROR, error} as const)

export const setFilterButtonStatus = (isActiveFilterButton: boolean) => (
    {type: APP_ACTIONS_TYPES.SET_FILTER_BUTTON_STATUS, isActiveFilterButton} as const)

export const setHeaderNavStatus = (headerNavStatus: HeaderNavStatusType) => (
    {type: APP_ACTIONS_TYPES.SET_HEADER_NAV_STATUS, headerNavStatus} as const)

// thunks
/*export const initializeAppTC = (): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            const res = await authAPI.me()
            if (res.data._id) {
                dispatch(setIsLoggedInAC(true))
                dispatch(setUserDataAC(res.data))
                console.log("AuthMe success!!!")
            }
            dispatch(setAppStatusAC("succeeded"))
        } catch (e) {
            const error = e.response ? e.response.data.error : (`AuthMe failed: ${e.message}.`)
            console.log(error)
            dispatch(setAppStatusAC("failed"))
        } finally {
            // ...some code
        }
    }*/

// types
export type HeaderNavStatusType = "default" | "jogs" | "info" | "contactUs"
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"
export type AppReducerActionsType = ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setFilterButtonStatus>
    | ReturnType<typeof setHeaderNavStatus>