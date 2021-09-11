import React from "react"
import activeFilterButton from "../../../../assets/images/buttons/filterButton/activeFilterButton/filter-active.png"
import defaultFilterButton from "../../../../assets/images/buttons/filterButton/defaultFilterButton/filter.png"
import style from "./ButtonFilter.module.scss"

type ButtonFilterPropsType = {
    isActiveButton: boolean
    onClick: () => void
}

export const ButtonFilter = React.memo((props: ButtonFilterPropsType) => {

    return (
        <div onClick={props.onClick} className={style.buttonFilter}>
            {props.isActiveButton
                ? <img src={activeFilterButton} alt={"activeFilterButton"} className={style.filterImg}/>
                : <img src={defaultFilterButton} alt={"defaultFilterButton"} className={`${style.filterImg} ${style.defaultFilterImg}` }/>
            }
        </div>
    )
})