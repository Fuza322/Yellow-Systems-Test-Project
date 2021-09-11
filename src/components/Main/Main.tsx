import React from "react"
import {JogItem} from "../common/JogItem/JogItem"
import style from "./Main.module.scss"

type MainPropsType = {}

export const Main = React.memo((props: MainPropsType) => {

    const jogItems = [
        {
            date: "20.12.2017",
            speed: 15,
            distance: 10,
            time: 60
        },
        {
            date: "20.12.2017",
            speed: 15,
            distance: 10,
            time: 60
        },
        {
            date: "20.12.2017",
            speed: 15,
            distance: 10,
            time: 60
        },
        {
            date: "20.12.2017",
            speed: 15,
            distance: 10,
            time: 60
        },
        {
            date: "20.12.2017",
            speed: 15,
            distance: 10,
            time: 60
        },

    ]

    return (
        <section className={style.mainBlock}>
            <div className={style.mainContainer}>
                {jogItems.map(item => {
                    return (
                        <JogItem/>
                    )
                })}
            </div>
        </section>
    )
})