import React, {useCallback} from "react"
import {useHistory, useLocation} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {AppRootStateType} from "../../../redux/store"
import {setFilterButtonStatus} from "../../../redux/reducers/app-reducer"
import {HeaderDisplay} from "./HeaderDisplay/HeaderDisplay"
import {DateFilter} from "../DateFilter/DateFilter"
import headerLogo from "../../../assets/images/logo/headerLogo/whiteHeaderLogo/logo.png"
import style from "./Header.module.scss"

type HeaderPropsType = {}

export const Header = React.memo((props: HeaderPropsType) => {

    const dispatch = useDispatch()

    const {isActiveFilterButton} = useSelector((state: AppRootStateType) => state.appReducer)
    const history = useHistory()
    const {pathname} = useLocation()

    const onFilterButtonClickHandler = useCallback(() => {
        dispatch(setFilterButtonStatus(!isActiveFilterButton))
    }, [dispatch, isActiveFilterButton])

    const testLogout = useCallback(() => {
        localStorage.removeItem("token")
        //dispatch(setIsLoggedInAC(false))
        history.push("/login")
    }, [history])

    return (
        <>
            <header className={style.headerContainer}>
                <div
                    onClick={testLogout}
                    className={style.headerLogoContainer}>
                    <img src={headerLogo} alt={"headerLogo"} className={style.headerLogoImg}/>
                </div>
                {pathname !== "/login"
                && <HeaderDisplay
                    isActiveFilterButton={isActiveFilterButton}
                    onClickFilterButton={onFilterButtonClickHandler}
                />}
            </header>
            {/*{isActiveFilterButton && <DateFilter/>}*/}
        </>
    )
})