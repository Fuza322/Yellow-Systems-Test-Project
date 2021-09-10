import React, {useState} from "react"
import style from "./ButtonFilter.module.scss"
import activeFilterButton from "../../../../assets/images/buttons/filterButton/activeFilterButton/filter-active.png"
import defaultFilterButton from "../../../../assets/images/buttons/filterButton/defaultFilterButton/filter.png"

type ButtonFilterPropsType = {}

export const ButtonFilter = React.memo((props: ButtonFilterPropsType) => {

    const [test, setTest] = useState<boolean>(false)

    return (
        <div onClick={() => setTest(test => !test)} className={style.buttonFilter}>
            {test
                ? <img src={activeFilterButton} alt={"activeFilterButton"} className={style.filterImg}/>
                : <img src={defaultFilterButton} alt={"defaultFilterButton"} className={`${style.filterImg} ${style.defaultFilterImg}` }/>
            }
        </div>
    )
})