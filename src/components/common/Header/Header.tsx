import React from "react"
import {Navbar} from "./Navbar/Navbar"
import {BurgerNav} from "./BurgerNav/BurgerNav"
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
                <Navbar/>
                {/*<BurgerNav/>*/}
            </header>
            <DateFilter/>
        </>
    )
})