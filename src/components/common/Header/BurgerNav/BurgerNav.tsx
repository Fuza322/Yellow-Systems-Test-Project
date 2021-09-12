import React from "react"
import {NavLink, useLocation} from "react-router-dom"
import {ButtonFilter} from "../../Buttons/ButtonFilter/ButtonFilter"
import style from "./Navbar.module.scss"
import {useDispatch} from "react-redux"
import {setFilterButtonStatus} from "../../../../redux/reducers/app-reducer"

type BurgerNavPropsType = {
    isActiveFilterButton: boolean
    onClickFilterButton: () => void
}

export const BurgerNav = React.memo((props: BurgerNavPropsType) => {

    const dispatch = useDispatch()

    const {pathname} = useLocation()

    return (
        <div className={style.headerNavContainer}>
            <div className={style.headerNavItemContaner}>
                <NavLink
                    to={"/"}
                    className={pathname === "/"
                        ? `${style.activeHeaderNavLink}`
                        : `${style.headerNavLink}`}>
                    Jogs
                </NavLink>
            </div>
            <div className={style.headerNavItemContaner}>
                <NavLink
                    to={"/info"}
                    onClick={() => dispatch(dispatch(setFilterButtonStatus(false)))}
                    className={pathname === "/info"
                        ? `${style.activeHeaderNavLink}`
                        : `${style.headerNavLink}`}>
                    Info
                </NavLink>
            </div>
            <div className={style.headerNavItemContaner}>
                <NavLink
                    to={"/contacts"}
                    onClick={() => dispatch(dispatch(setFilterButtonStatus(false)))}
                    className={pathname === "/contacts"
                        ? `${style.activeHeaderNavLink}`
                        : `${style.headerNavLink}`}>
                    Contact us
                </NavLink>
            </div>
            <ButtonFilter
                isActiveButton={props.isActiveFilterButton}
                disabled={pathname !== "/"}
                onClick={props.onClickFilterButton}
            />
        </div>
    )
})