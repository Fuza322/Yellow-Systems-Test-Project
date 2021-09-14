import React, {ChangeEvent, useCallback, useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {setFilterButtonStatus} from "../../redux/reducers/app-reducer"
import {fetchJogsTC, filterJogsAC} from "../../redux/reducers/jogs-reducer"
import {AppRootStateType} from "../../redux/store"
import transformDateFromStrToDate from "../../assets/dateTransformers/dateReformerFromStrToDate"
import {DateFilter} from "../common/DateFilter/DateFilter"
import {JogItem} from "../common/JogItem/JogItem"
import {ButtonAddItem} from "../common/Buttons/ButtonAddItem/ButtonAddItem"
import {EmptyPage} from "../EmptyPage/EmptyPage"
import style from "./Main.module.scss"

type MainPropsType = {}

export const Main = React.memo((props: MainPropsType) => {

    const dispatch = useDispatch()
    const {jogs} = useSelector((state: AppRootStateType) => state.jogsReducer)
    const {isActiveFilterButton} = useSelector((state: AppRootStateType) => state.appReducer)
    const history = useHistory()

    const [dateFromValue, setDateFromValue] = useState<string>("")
    const [dateToValue, setDateToValue] = useState<string>("")
    const [isError, setIsError] = useState<boolean>(false)

    useEffect(() => {
        dispatch(fetchJogsTC())
    }, [dispatch])

    const onChangeDateFromInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setDateFromValue(e.currentTarget.value)
    }, [])

    const onChangeDateToInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setDateToValue(e.currentTarget.value)
    }, [])

    const onEnterKeyPressApplyFiltersValues = useCallback((e: KeyboardEvent) => {
        if(transformDateFromStrToDate(dateFromValue).getTime() >= transformDateFromStrToDate(dateToValue).getTime()) {
            setIsError(true)
        } else {
            setIsError(false)
            if (e.key === "Enter" ) {
                if (dateFromValue && dateToValue) {
                    dispatch(filterJogsAC(jogs, dateFromValue, dateToValue))
                } else {
                    dispatch(fetchJogsTC())
                }
            }
        }
    }, [dispatch, jogs, dateFromValue, dateToValue])

    const onAddJobButtonClickHandler = useCallback(() => {
        dispatch(setFilterButtonStatus(false))
        history.push("/addjog")
    }, [dispatch, history])

    return (
        <>
            {isActiveFilterButton
            && <DateFilter
                dateFromValue={dateFromValue}
                dateToValue={dateToValue}
                changeDateFromValue={onChangeDateFromInputValue}
                changeDateToValue={onChangeDateToInputValue}
                keyPressApplyFiltersValues={onEnterKeyPressApplyFiltersValues}
                error={isError}
            />}
            {(jogs && jogs.length)
                ? <section className={style.mainBlock}>
                    <div className={style.mainContainer}>
                        {jogs.map(item => {
                            return (
                                <div key={item.id} className={style.jogItemContainer}>
                                    <JogItem
                                        id={item.id}
                                        user_id={item.user_id}
                                        distance={item.distance}
                                        time={item.time}
                                        date={item.date}
                                    />
                                </div>)
                        })}
                    </div>
                    <ButtonAddItem
                        onClick={onAddJobButtonClickHandler}
                    />
                </section>
                : <EmptyPage/>
            }
        </>
    )
})