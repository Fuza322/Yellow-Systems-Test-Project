import React from "react"
import cancelHeaderImg from "../../../../assets/images/buttons/cancelButton/greyCancelButton/greyCancel.png"
import style from "./ButtonHeaderCancel.module.scss"

type ButtonHeaderCancelPropsType = {
    onClick: () => void
    className?: string
}

export const ButtonHeaderCancel = React.memo((props: ButtonHeaderCancelPropsType) => {
    return (
        <div onClick={props.onClick} className={`${style.buttonCancel} ${props.className}`}>
            <img src={cancelHeaderImg} alt={"cancelHeaderImg"} className={style.buttonCancelImg}/>
        </div>
    )
})