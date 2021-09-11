import React, {useCallback} from "react"
import {NavLink} from "react-router-dom"
import {useDispatch} from "react-redux"
import {HeaderNavStatusType, setHeaderNavStatus} from "../../../../redux/reducers/app-reducer"
import {ButtonFilter} from "../../Buttons/ButtonFilter/ButtonFilter"
import style from "./Navbar.module.scss"

type NavbarPropsType = {
    isActiveFilterButton: boolean
    headerNavStatus: HeaderNavStatusType
    onClickFilterButton: () => void
}

export const Navbar = React.memo((props: NavbarPropsType) => {

    const dispatch = useDispatch()

    const onNavLinkClickHandler = useCallback((headerNavStatus: HeaderNavStatusType) => {
        dispatch(setHeaderNavStatus(headerNavStatus))
    }, [dispatch])

    // const

    return (
        <div className={style.headerNavContainer}>
            <NavLink
                onClick={() => onNavLinkClickHandler("jogs")}
                to={"/"}
                className={style.headerNavItem}>
                Jogs
            </NavLink>
            <NavLink
                onClick={() => onNavLinkClickHandler("info")}
                to={"/info"}
                className={style.headerNavItem}>
                Info
            </NavLink>
            <NavLink
                onClick={() => onNavLinkClickHandler("contactUs")}
                to={"/contacts"}
                className={style.headerNavItem}>
                Contact us
            </NavLink>
            <ButtonFilter
                isActiveButton={props.isActiveFilterButton}
                onClick={props.onClickFilterButton}
            />
        </div>
    )
})