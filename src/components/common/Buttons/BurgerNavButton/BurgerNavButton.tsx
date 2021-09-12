import React from "react"
import burgerNavButton from "../../../../assets/images/buttons/headerNavButton/menu.png"
import style from "./BurgerNavButton.module.scss"

type BurgerNavButtonPropsType = {
    onClick: () => void
    className?: string
}

export const BurgerNavButton = React.memo((props: BurgerNavButtonPropsType) => {
    return (
        <div onClick={props.onClick} className={`${style.buttonCancel} ${props.className}`}>
            <img src={burgerNavButton} alt={"cancelImg"} className={style.buttonCancelImg}/>
        </div>
    )
})