import {ThunkAction} from "redux-thunk"
import {authAPI} from "../../api/api"
import {AppActionsType, AppRootStateType} from "../store"
//import {setIsLoggedInAC} from "./login-reducer"

enum APP_ACTIONS_TYPES {
    SET_USER_ID = "SET_USER_ID",
    SET_IS_INITIALIZED = "SET_IS_INITIALIZED",
    SET_FILTER_BUTTON_STATUS = "SET_FILTER_BUTTON_STATUS",
}

const initialState = {
    user_id: "",
    isInitialized: false,
    isActiveFilterButton: false,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case APP_ACTIONS_TYPES.SET_USER_ID:
            return {...state, user_id: action.userId}
        case APP_ACTIONS_TYPES.SET_IS_INITIALIZED:
            return {...state, isInitialized: action.isInitialized}
        case APP_ACTIONS_TYPES.SET_FILTER_BUTTON_STATUS:
            return {...state, isActiveFilterButton: action.isActiveFilterButton}
        default:
            return state
    }
}

// actions
export const setUserId = (userId: string) => (
    {type: APP_ACTIONS_TYPES.SET_USER_ID, userId} as const)

export const setAppIsInitializedAC = (isInitialized: boolean) => (
    {type: APP_ACTIONS_TYPES.SET_IS_INITIALIZED, isInitialized} as const)

export const setFilterButtonStatus = (isActiveFilterButton: boolean) => (
    {type: APP_ACTIONS_TYPES.SET_FILTER_BUTTON_STATUS, isActiveFilterButton} as const)

// thunks
export const initializeAppTC = (): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            //dispatch(setAppIsInitializedAC(false))
            const res = await authAPI.me()
            if (res.id) {
                //dispatch(setIsLoggedInAC(true))
                dispatch(setUserId(res.id))
            }
        } catch (e) {
            //dispatch(setIsLoggedInAC(false))
        } finally {
            dispatch(setAppIsInitializedAC(true))
        }
    }

// types
export type AppReducerActionsType = ReturnType<typeof setUserId>
    | ReturnType<typeof setAppIsInitializedAC>
    | ReturnType<typeof setFilterButtonStatus>
