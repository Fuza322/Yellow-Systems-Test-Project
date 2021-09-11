import React from "react"
import cancelImg from "../../../../assets/images/buttons/cancelButton/cancel.png"
import style from "./ButtonCancel.module.scss"

type ButtonCancelPropsType = {
    className?: string
}

export const ButtonCancel = React.memo((props: ButtonCancelPropsType) => {
    return (
        <div className={`${style.buttonCancel} ${props.className}`}>
            <img src={cancelImg} alt={"cancelImg"} className={style.buttonCancelImg}/>
        </div>
    )
})