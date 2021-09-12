import React, {useCallback} from "react"
import {useHistory} from "react-router-dom"
import {Button} from "../common/Buttons/Button/Button"
import {ButtonCancel} from "../common/Buttons/ButtonCancel/ButtonCancel"
import style from "./EditAndAddJog.module.scss"

type EditAndAddJogPropsType = {}

export const EditAndAddJog = React.memo((props: EditAndAddJogPropsType) => {

    const history = useHistory()

    const onCancelButtonClickHandler = useCallback(() => {
        history.push("/")
    }, [history])

    return (
        <section className={style.editAndAddJogBlock}>
            <div className={style.editAndAddJogContainer}>
                <form className={style.editAndAddJogForm}>
                    <div className={style.divContainer}>
                        <div className={style.divItem}>
                            <span className={style.editAndAddJogHelpText}>Distance</span>
                            <input type={"number"} className={style.editAndAddJogInput}/>
                        </div>
                        <div className={style.divItem}>
                            <span className={style.editAndAddJogHelpText}>Time</span>
                            <input type={"number"} className={style.editAndAddJogInput}/>
                        </div>
                        <div className={style.divItem}>
                            <span className={style.editAndAddJogHelpText}>Date</span>
                            <input type="text" className={style.editAndAddJogInput}/>
                        </div>
                    </div>
                    <Button
                        type={"submit"}
                        title={"Save"}
                        onClick={() => console.log("SaveButton was Clicked")}
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