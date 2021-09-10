import React from "react"
import style from "./Button.module.scss"

type ButtonPropsType = {}

export const Button = React.memo((props: ButtonPropsType) => {
    return (
        <button>Button text</button>
    )
})