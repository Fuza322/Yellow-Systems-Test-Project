import React, {useCallback, useEffect} from "react"
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {setFilterButtonStatus} from "../../redux/reducers/app-reducer"
import {fetchJogsTC} from "../../redux/reducers/jogs-reducer"
import {AppRootStateType} from "../../redux/store"
import {JogItem} from "../common/JogItem/JogItem"
import {ButtonAddItem} from "../common/Buttons/ButtonAddItem/ButtonAddItem"
import {EmptyPage} from "../EmptyPage/EmptyPage"
import style from "./Main.module.scss"

type MainPropsType = {}

export const Main = React.memo((props: MainPropsType) => {

    const dispatch = useDispatch()
    const {jogs} = useSelector((state: AppRootStateType) => state.jogsReducer)
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchJogsTC())
    }, [dispatch])

    const onAddJobButtonClickHandler = useCallback(() => {
        dispatch(setFilterButtonStatus(false))
        history.push("/addjog")
    }, [dispatch, history])

    return (
        <>
            {(jogs && jogs.length)
                ? <section className={style.mainBlock}>
                    <div className={style.mainContainer}>
                        {jogs.map(item => {
                            return (
                                <div key={item.id} className={style.jogItemContainer}>
                                    <JogItem
                                        id={item.id}
                                        user_id={item.user_id}
                                        distance={item.distance}
                                        time={item.time}
                                        date={item.date}
                                    />
                                </div>)
                        })}
                    </div>
                    <ButtonAddItem
                        onClick={onAddJobButtonClickHandler}
                    />
                </section>
                : <EmptyPage/>
            }
        </>
    )
})