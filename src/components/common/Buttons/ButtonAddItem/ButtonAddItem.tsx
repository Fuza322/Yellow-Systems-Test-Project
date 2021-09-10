import React from "react"
import style from "./ButtonAddItem.module.scss"

type ButtonAddItemPropsType = {}

export const ButtonAddItem = React.memo((props: ButtonAddItemPropsType) => {
    return (
        <button>Button text</button>
    )
})