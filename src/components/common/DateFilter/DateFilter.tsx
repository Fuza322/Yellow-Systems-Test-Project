import React, {ChangeEvent} from "react"
import style from "./DateFilter.module.scss"

type DateFilterPropsType = {
    dateFromValue: string
    dateToValue: string
    changeDateFromValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeDateToValue: (e: ChangeEvent<HTMLInputElement>) => void
    //keyPressApplyFiltersValues: (e: KeyboardEvent<HTMLInputElement>) => void
    keyPressApplyFiltersValues: (e: any) => void
    error: boolean
}

export const DateFilter = React.memo((props: DateFilterPropsType) => {
    return (
        <div className={style.dateFilterContainer}>
            <div className={style.dateFilterItem}>
                <span className={style.dateFilterHelpText}>Date from</span>
                <input
                    type={"text"}
                    value={props.dateFromValue}
                    onChange={props.changeDateFromValue}
                    onKeyPress={props.keyPressApplyFiltersValues}
                    className={props.error
                        ? `${style.dateFilterInput} ${style.errorDateFilterInput}`
                        : `${style.dateFilterInput}`}
                />
            </div>
            <div className={style.dateFilterItem}>
                <span className={style.dateFilterHelpText}>Date to</span>
                <input
                    type={"text"}
                    value={props.dateToValue}
                    onChange={props.changeDateToValue}
                    onKeyPress={props.keyPressApplyFiltersValues}
                    className={props.error
                        ? `${style.dateFilterInput} ${style.errorDateFilterInput}`
                        : `${style.dateFilterInput}`}
                />
            </div>
        </div>
    )
})