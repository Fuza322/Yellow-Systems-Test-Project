import React from "react"
import addItemButton from "../../../../assets/images/buttons/addItemButton/add.png"
import style from "./ButtonAddItem.module.scss"

type ButtonAddItemPropsType = {
    onClick: () => void
    className?: string
}

export const ButtonAddItem = React.memo((props: ButtonAddItemPropsType) => {
    return (
        <div onClick={props.onClick} className={props.className}>
            <img src={addItemButton} alt={"cancelImg"} className={style.buttonCancelImg}/>
        </div>
    )
})