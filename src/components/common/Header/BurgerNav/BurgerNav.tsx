import React from "react"
import {NavLink} from "react-router-dom"
import {ButtonFilter} from "../../Buttons/ButtonFilter/ButtonFilter"
import style from "./BurgerNav.module.scss"

type BurgerNavPropsType = {
    isActiveFilterButton: boolean
    onClickFilterButton: () => void
}

export const BurgerNav = React.memo((props: BurgerNavPropsType) => {
    return (
        <div className={style.headerNavContainer}>
            <NavLink to={"/"} className={style.headerNavItem}>Jogs</NavLink>
            <NavLink to={"/info"} className={style.headerNavItem}>Info</NavLink>
            <NavLink to={"/"} className={style.headerNavItem}>Contacs us</NavLink>
            <ButtonFilter
                isActiveButton={props.isActiveFilterButton}
                onClick={props.onClickFilterButton}
            />
        </div>
    )
})