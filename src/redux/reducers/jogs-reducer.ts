import {ThunkAction} from "redux-thunk"
import {jogsAPI, JogType} from "../../api/api"
import {AppActionsType, AppRootStateType} from "../store"
import { setAppIsInitializedAC } from "./app-reducer"

enum JOGS_ACTIONS_TYPES {
    SET_JOGS = "SET_JOGS",
}

const initialState = {
    jogs: [] as Array<JogType>
}

type InitialStateType = typeof initialState

export const jogsReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case JOGS_ACTIONS_TYPES.SET_JOGS:
            return {
                ...state,
                jogs: [...action.jogs, ...state.jogs]
            }
        default:
            return state
    }
}

// actions
export const setJogsAC = (jogs: Array<JogType>) => {
    return {type: JOGS_ACTIONS_TYPES.SET_JOGS, jogs} as const
}

// thunks
export const fetchJogsTC = (): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            //dispatch(setAppIsInitializedAC(false))
            const res = await jogsAPI.getJogs()
            dispatch(setJogsAC(res))
        } catch (e) {
            console.log(e)
        } finally {
            //dispatch(setAppIsInitializedAC(true))
        }
    }

export const addJogTC = (date: string, time: number, distance: number): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            //dispatch(setAppIsInitializedAC(false))
            console.log(date)
            console.log(time)
            console.log(distance)
            await jogsAPI.addJog(date, time, distance)
            //dispatch(fetchJogsTC())
        } catch (e) {
            console.log(e)
        } finally {
            //dispatch(setAppIsInitializedAC(true))
        }
    }

export const updateJogTC = (date: string, time: number, distance: number, id: number, user_id: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            //dispatch(setAppIsInitializedAC(false))
            await jogsAPI.updateJog(date, time, distance, id, user_id)
            //dispatch(fetchJogsTC())
        } catch (e) {
            console.log(e)
        } finally {
            //dispatch(setAppIsInitializedAC(true))
        }
    }

// types
export type JogsReducerActionsType = ReturnType<typeof setJogsAC>
