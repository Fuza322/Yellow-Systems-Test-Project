import React, {useCallback} from "react"
import {useLocation} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setFilterButtonStatus} from "../../../../redux/reducers/app-reducer"
import useWindowDimensions from "../../../../assets/hooks/hooks"
import {Navbar} from "./Navbar/Navbar"
import {BurgerNav} from "./BurgerNav/BurgerNav"
import {ButtonFilter} from "../../Buttons/ButtonFilter/ButtonFilter"
import style from "./HeaderDisplay.module.scss"

type HeaderDisplayPropsType = {
    isActiveFilterButton: boolean
    onClickFilterButton: () => void
}

export const HeaderDisplay = React.memo((props: HeaderDisplayPropsType) => {

    const dispatch = useDispatch()

    const {pathname} = useLocation()
    const {width} = useWindowDimensions()

    const onNavItemClickHandler = useCallback((filterButtonStatus: boolean) => {
        dispatch(setFilterButtonStatus(filterButtonStatus))
    }, [dispatch])

    return (
        <div className={(pathname.toLowerCase() === "/info" || pathname.toLowerCase() === "/contacts" || pathname.toLowerCase() === "/empty")
            ? `${style.headerNavContainer} ${style.headerNavContainerFlexEnd}`
            : `${style.headerNavContainer}`}>
            {width >= 650
                ? <>
                    <Navbar
                        onNavItemClick={onNavItemClickHandler}
                    />
                    {(pathname.toLowerCase().slice(0, 8) === "/editjog" || pathname.toLowerCase() === "/addjog" || pathname === "/")
                    && <ButtonFilter
                        isActiveButton={props.isActiveFilterButton}
                        disabled={(pathname.toLowerCase().slice(0, 8) === "/editjog" || pathname.toLowerCase() === "/addjog")}
                        onClick={props.onClickFilterButton}
                    />}
                </>
                : <>
                    {(pathname.toLowerCase().slice(0, 8) === "/editjog" || pathname.toLowerCase() === "/addjog" || pathname === "/")
                    && <ButtonFilter
                        isActiveButton={props.isActiveFilterButton}
                        disabled={(pathname.toLowerCase().slice(0, 8) === "/editjog" || pathname.toLowerCase() === "/addjog")}
                        onClick={props.onClickFilterButton}
                    />}
                    <BurgerNav
                        onNavItemClick={onNavItemClickHandler}
                    />
                </>
            }
        </div>
    )
})