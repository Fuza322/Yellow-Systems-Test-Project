import React from "react"
import style from "./DateFilter.module.scss"

type DateFilterPropsType = {}

export const DateFilter = React.memo((props: DateFilterPropsType) => {
    return (
        <div className={style.dateFilterContaner}>
            <div className={style.dateFilterItem}>
                <span className={style.dateFilterHelpText}>Date from</span>
                <input type={"number"} className={style.dateFilterInput}/>
            </div>
            <div className={style.dateFilterItem}>
                <span className={style.dateFilterHelpText}>Date to</span>
                <input type={"number"} className={style.dateFilterInput}/>
            </div>
        </div>
    )
})