import React from "react"
import {Button} from "../common/Buttons/Button/Button"
import {ButtonCancel} from "../common/Buttons/ButtonCancel/ButtonCancel"
import style from "./EditAndAddJog.module.scss"

type EditAndAddJogPropsType = {}

export const EditAndAddJog = React.memo((props: EditAndAddJogPropsType) => {
    return (
        <section className={style.editAndAddJogBlock}>
            <div className={style.editAndAddJogContainer}>
                <form className={style.editAndAddJogForm}>
                    <div className={style.gridContainer}>
                        <div className={style.gridItem}>
                            <span className={style.editAndAddJogHelpText}>Distance</span>
                            <input type={"number"} className={style.editAndAddJogInput}/>
                        </div>
                        <div className={style.gridItem}>
                            <span className={style.editAndAddJogHelpText}>Time</span>
                            <input type={"number"} className={style.editAndAddJogInput}/>
                        </div>
                        <div className={style.gridItem}>
                            <span className={style.editAndAddJogHelpText}>Date</span>
                            <input type="text" className={style.editAndAddJogInput}/>
                        </div>
                    </div>
                    <Button
                        type={"submit"}
                        title={"Save"}
                        className={style.saveButton}
                    />
                    <ButtonCancel
                        className={style.cancelButton}
                    />
                </form>
            </div>
        </section>
    )
})