import React from "react"
import cancelImg from "../../../../assets/images/buttons/cancelButton/whiteCancelButton/cancel.png"
import style from "./ButtonCancel.module.scss"

type ButtonCancelPropsType = {
    onClick: () => void
    className?: string
}

export const ButtonCancel = React.memo((props: ButtonCancelPropsType) => {
    return (
        <div onClick={props.onClick} className={`${style.buttonCancel} ${props.className}`}>
            <img src={cancelImg} alt={"cancelImg"} className={style.buttonCancelImg}/>
        </div>
    )
})