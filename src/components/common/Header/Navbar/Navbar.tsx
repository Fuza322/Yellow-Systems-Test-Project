import React from "react"
import {NavLink} from "react-router-dom"
import {ButtonFilter} from "../../Buttons/ButtonFilter/ButtonFilter"
import style from "./Navbar.module.scss"

type NavbarPropsType = {}

export const Navbar = React.memo((props: NavbarPropsType) => {
    return (
        <div className={style.headerNavContainer}>
            <NavLink to={"/"} className={style.headerNavItem}>Jogs</NavLink>
            <NavLink to={"/info"} className={style.headerNavItem}>Info</NavLink>
            <NavLink to={"/contacts"} className={style.headerNavItem}>Contacs us</NavLink>
            <ButtonFilter/>
        </div>
    )
})