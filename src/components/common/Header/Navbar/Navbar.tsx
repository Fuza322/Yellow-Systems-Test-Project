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

    return (
        <div className={style.headerNavContainer}>
            <div className={style.headerNavItemContaner}>
                <NavLink
                    onClick={() => onNavLinkClickHandler("jogs")}
                    to={"/"}
                    className={props.headerNavStatus === "jogs"
                        ? `${style.activeHeaderNavLink}`
                        : `${style.headerNavLink}`}>
                    Jogs
                </NavLink>
            </div>
            <div className={style.headerNavItemContaner}>
                <NavLink
                    onClick={() => onNavLinkClickHandler("info")}
                    to={"/info"}
                    className={props.headerNavStatus === "info"
                        ? `${style.activeHeaderNavLink}`
                        : `${style.headerNavLink}`}>
                    Info
                </NavLink>
            </div>
            <div className={style.headerNavItemContaner}>
                <NavLink
                    onClick={() => onNavLinkClickHandler("contactUs")}
                    to={"/contacts"}
                    className={props.headerNavStatus === "contactUs"
                        ? `${style.activeHeaderNavLink}`
                        : `${style.headerNavLink}`}>
                    Contact us
                </NavLink>
            </div>
            <ButtonFilter
                isActiveButton={props.isActiveFilterButton}
                onClick={props.onClickFilterButton}
            />
        </div>
    )
})