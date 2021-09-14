import React, {useCallback} from "react"
import {useHistory, useParams} from "react-router-dom"
import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../redux/store"
import {addJogTC, updateJogTC} from "../../redux/reducers/jogs-reducer"
import transformDateFromNumberToStr from "../../assets/dateTransformers/dateReformerFromNumberToStr"
import {Button} from "../common/Buttons/Button/Button"
import {ButtonCancel} from "../common/Buttons/ButtonCancel/ButtonCancel"
import style from "./EditAndAddJog.module.scss"

type FormikErrorType = {
    distance?: string
    time?: string
    date?: string | number
}

type EditAndAddJogPropsType = {}

export const EditAndAddJog = React.memo((props: EditAndAddJogPropsType) => {

    const dispatch = useDispatch()
    const {user_id} = useSelector((state: AppRootStateType) => state.appReducer)
    const history = useHistory()

    const {id, distance, time, date} = useParams<{ id: string, distance: string, time: string, date: string }>()

    const onCancelButtonClickHandler = useCallback(() => {
        history.push("/")
    }, [history])

    const formik = useFormik({
        initialValues: {
            distance: distance ? distance : "",
            time: time ? time : "",
            date: date ? transformDateFromNumberToStr(Number(date)) : ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.distance) {
                errors.distance = "Required."
            } else if (!/^-?\d*\.?\d*$/.test(values.distance)) {
                errors.distance = "Distance must be a number."
            }
            if (!values.time) {
                errors.time = "Required."
            } else if (!/^-?\d*\.?\d*$/.test(values.time)) {
                errors.time = "Time must be a number."
            }
            if (!values.date) {
                errors.date = "Required."
            }
            if (!/^(?:(?:31([\/\-.])(?:0?[13578]|1[02]))\1|(?:(?:29|30)([\/\-.])(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29([\/\-.])0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])([\/\-.])(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i.test(values.date)) {
                errors.date = "Invalid distance."
            }
            return errors
        },
        onSubmit: (values) => {
            if (id && distance && time && date) {
                dispatch(addJogTC(values.date, Number(values.time), Number(values.distance)))
            } else {
                dispatch(updateJogTC(values.date, Number(values.time), Number(values.distance), Number(id), user_id))
            }
            history.push("/")
            formik.resetForm()
        }
    })

    return (
        <section className={style.editAndAddJogBlock}>
            <div className={style.editAndAddJogContainer}>
                <form onSubmit={formik.handleSubmit} className={style.editAndAddJogForm}>
                    <div className={style.divContainer}>
                        <div className={style.divItem}>
                            <span className={style.editAndAddJogHelpText}>Distance</span>
                            <input type={"text"}
                                   {...formik.getFieldProps("distance")}
                                   className={formik.touched.distance && formik.errors.distance
                                       ? `${style.editAndAddJogInput} ${style.errorEditAndAddJogInput}`
                                       : `${style.editAndAddJogInput}`}
                            />
                        </div>
                        <div className={style.divItem}>
                            <span className={style.editAndAddJogHelpText}>Time</span>
                            <input type={"text"}
                                   {...formik.getFieldProps("time")}
                                   className={formik.touched.time && formik.errors.time
                                       ? `${style.editAndAddJogInput} ${style.errorEditAndAddJogInput}`
                                       : `${style.editAndAddJogInput}`}
                            />
                        </div>
                        <div className={style.divItem}>
                            <span className={style.editAndAddJogHelpText}>Date</span>
                            <input type="text"
                                   {...formik.getFieldProps("date")}
                                   className={formik.touched.date && formik.errors.date
                                       ? `${style.editAndAddJogInput} ${style.errorEditAndAddJogInput}`
                                       : `${style.editAndAddJogInput}`}
                            />
                        </div>
                    </div>
                    <Button
                        type={"submit"}
                        title={"Save"}
                        className={style.saveButton}
                    />
                    <ButtonCancel
                        onClick={onCancelButtonClickHandler}
                        className={style.cancelButton}
                    />
                </form>
            </div>
        </section>
    )
})