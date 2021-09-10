import React from "react"
import {NavLink} from "react-router-dom"
import {ButtonFilter} from "../Buttons/ButtonFilter/ButtonFilter"
import {DateFilter} from "../DateFilter/DateFilter"
import headerLogo from "../../../assets/images/logo/headerLogo/logo.png"
import style from "./Header.module.scss"

type HeaderPropsType = {}

export const Header = React.memo((props: HeaderPropsType) => {
    return (
        <>
            <header className={style.headerContainer}>
                <div className={style.headerLogo}>
                    <img src={headerLogo} alt={"headerLogo"} className={style.headerLogoImg}/>
                </div>
                <div className={style.headerNavContainer}>
                    <NavLink to={"/"} className={style.headerNavItem}>Jogs</NavLink>
                    <NavLink to={"/info"} className={style.headerNavItem}>Info</NavLink>
                    <NavLink to={"/"} className={style.headerNavItem}>Contacs us</NavLink>
                    <ButtonFilter/>
                </div>
            </header>
            <DateFilter/>
        </>
    )
})