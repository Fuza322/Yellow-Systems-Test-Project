import React, {useCallback} from "react"
import {useLocation} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {AppRootStateType} from "../../../redux/store"
import {setFilterButtonStatus} from "../../../redux/reducers/app-reducer"
import {Navbar} from "./Navbar/Navbar"
//import {BurgerNav} from "./BurgerNav/BurgerNav"
import {DateFilter} from "../DateFilter/DateFilter"
import headerLogo from "../../../assets/images/logo/headerLogo/logo.png"
import style from "./Header.module.scss"

type HeaderPropsType = {}

export const Header = React.memo((props: HeaderPropsType) => {

    const dispatch = useDispatch()

    const {isActiveFilterButton} = useSelector((state: AppRootStateType) => state.appReducer)
    const {pathname} = useLocation()

    const onFilterButtonClickHandler = useCallback(() => {
        dispatch(setFilterButtonStatus(!isActiveFilterButton))
    }, [dispatch, isActiveFilterButton])

    return (
        <>
            <header className={style.headerContainer}>
                <div className={style.headerLogoContainer}>
                    <img src={headerLogo} alt={"headerLogo"} className={style.headerLogoImg}/>
                </div>
                {pathname !== "/login"
                && <Navbar
                    isActiveFilterButton={isActiveFilterButton}
                    onClickFilterButton={onFilterButtonClickHandler}
                />}
                {/*<BurgerNav // ПОПРАВИТЬ BURGERNAV, как в Navbar !!!
                    isActiveFilterButton={isActiveFilterButton}
                    onClickFilterButton={onFilterButtonClickHandler}
                />*/}
            </header>
            {isActiveFilterButton && <DateFilter/>}
        </>
    )
})