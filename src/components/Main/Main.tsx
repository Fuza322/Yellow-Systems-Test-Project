import React, {useCallback} from "react"
import {Redirect, useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setFilterButtonStatus} from "../../redux/reducers/app-reducer"
import {JogItem} from "../common/JogItem/JogItem"
import {ButtonAddItem} from "../common/Buttons/ButtonAddItem/ButtonAddItem"
import style from "./Main.module.scss"

type MainPropsType = {}

export const Main = React.memo((props: MainPropsType) => {

    const dispatch = useDispatch()

    const jogItems: Array<any> = [
        {
            id: 4024,
            distance: 10,
            time: 60,
            date: "20.12.2017",
            speed: 15,
        },
        {
            id: 4025,
            date: "20.12.2017",
            speed: 15,
            distance: 10,
            time: 60
        },
        {
            id: 4026,
            date: "20.12.2017",
            speed: 15,
            distance: 10,
            time: 60
        },
        {
            id: 4027,
            date: "20.12.2017",
            speed: 15,
            distance: 10,
            time: 60
        },
        {
            id: 4028,
            date: "20.12.2017",
            speed: 15,
            distance: 10,
            time: 60
        }
    ]
    const history = useHistory()

    const onAddJobButtonClickHandler = useCallback(() => {
        dispatch(setFilterButtonStatus(false))
        history.push("/addjog")
    }, [dispatch, history])

    if (jogItems.length === 0) {
        return <Redirect to={"/empty"}/>
    }

    return (
        <section className={style.mainBlock}>
            <div className={style.mainContainer}>
                {jogItems.map(item => {
                    return (<JogItem/>)
                })}
            </div>
            <ButtonAddItem
                onClick={onAddJobButtonClickHandler}
            />
        </section>
    )
})