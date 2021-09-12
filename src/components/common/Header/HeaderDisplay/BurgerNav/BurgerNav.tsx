import React, {useCallback, useState} from "react"
import {NavLink, useLocation} from "react-router-dom"
import {BurgerNavButton} from "../../../Buttons/BurgerNavButton/BurgerNavButton"
import {ButtonHeaderCancel} from "../../../Buttons/ButtonHeaderCancel/ButtonHeaderCancel"
import greenHeaderLogo from "../../../../../assets/images/logo/headerLogo/greenHeaderLogo/logo.png"
import style from "./BurgerNav.module.scss"

type BurgerNavPropsType = {
    onNavItemClick: (filterButtonStatus: boolean) => void
}

export const BurgerNav = React.memo((props: BurgerNavPropsType) => {

    const {pathname} = useLocation()
    const [burgerStatus, setNavBurgerStatus] = useState<boolean>(false)

    const onBurgerNavButtonClickHandler = useCallback(() => {
        setNavBurgerStatus(true)
    }, [])

    const onBurgerNavCloseHandler = useCallback(() => {
        setNavBurgerStatus(false)
    }, [])

    const onNavItemClickHandler = useCallback((filterButtonStatus: boolean) => {
        props.onNavItemClick(filterButtonStatus)
        setNavBurgerStatus(false)
    }, [props])

    return (
        <>
            <BurgerNavButton
                onClick={onBurgerNavButtonClickHandler}
            />
            {burgerStatus
            && <div className={style.burgerNavItemBlock}>
                <div className={style.burgerHeaderBlock}>
                    <div className={style.burgerHeaderLogoContainer}>
                        <img src={greenHeaderLogo} alt={"greenHeaderLogo"} className={style.burgerHeaderLogoImg}/>
                    </div>
                    <div className={style.burgerButtonContainer}>
                        <ButtonHeaderCancel
                            onClick={onBurgerNavCloseHandler}
                        />
                    </div>
                </div>
                <div className={style.burgerNavItemContainer}>
                    <div className={style.divBurgerNavItem}>
                        <NavLink
                            to={"/"}
                            className={pathname === "/"
                                ? `${style.activeHeaderNavLink}`
                                : `${style.headerNavLink}`}>
                            Jogs
                        </NavLink>
                    </div>
                    <div className={style.divBurgerNavItem}>
                        <NavLink
                            to={"/info"}
                            onClick={() => onNavItemClickHandler(false)}
                            className={pathname === "/info"
                                ? `${style.activeHeaderNavLink}`
                                : `${style.headerNavLink}`}>
                            Info
                        </NavLink>
                    </div>
                    <div className={style.divBurgerNavItem}>
                        <NavLink
                            to={"/contacts"}
                            onClick={() => onNavItemClickHandler(false)}
                            className={pathname === "/contacts"
                                ? `${style.activeHeaderNavLink}`
                                : `${style.headerNavLink}`}>
                            Contact us
                        </NavLink>
                    </div>
                </div>
            </div>}
        </>
    )
})