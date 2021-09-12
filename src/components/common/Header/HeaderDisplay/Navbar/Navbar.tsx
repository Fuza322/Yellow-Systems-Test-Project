import React from "react"
import {NavLink, useLocation} from "react-router-dom"
import style from "./Navbar.module.scss"

type NavbarPropsType = {
    onNavItemClick: (filterButtonStatus: boolean) => void
}

export const Navbar = React.memo((props: NavbarPropsType) => {

    const {pathname} = useLocation()

    return (
        <>
            <div className={style.headerNavItemContainer}>
                <NavLink
                    to={"/"}
                    className={pathname === "/"
                        ? `${style.activeHeaderNavLink}`
                        : `${style.headerNavLink}`}>
                    Jogs
                </NavLink>
            </div>
            <div className={style.headerNavItemContainer}>
                <NavLink
                    to={"/info"}
                    onClick={() => props.onNavItemClick(false)}
                    className={pathname === "/info"
                        ? `${style.activeHeaderNavLink}`
                        : `${style.headerNavLink}`}>
                    Info
                </NavLink>
            </div>
            <div className={style.headerNavItemContainer}>
                <NavLink
                    to={"/contacts"}
                    onClick={() => props.onNavItemClick(false)}
                    className={pathname === "/contacts"
                        ? `${style.activeHeaderNavLink}`
                        : `${style.headerNavLink}`}>
                    Contact us
                </NavLink>
            </div>
        </>
    )
})