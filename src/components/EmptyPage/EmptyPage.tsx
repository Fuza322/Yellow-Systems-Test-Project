import React, {useCallback} from "react"
import {useHistory} from "react-router-dom"
import {Button} from "../common/Buttons/Button/Button"
import nothingIsThereImg from "../../assets/images/nothingIsThere/sad-rounded-square-emoticon.png"
import style from "./EmptyPage.module.scss"

export const EmptyPage = React.memo(() => {

    const history = useHistory()

    const onCreateFirstJogButtonClickHandler = useCallback(() => {
        history.push("/addjog")
    }, [history])

    return (
        <section className={style.nothingIsThereBlock}>
            <div className={style.nothingIsThereContainer}>
                <div className={style.nothingIsThereImgContainer}>
                    <img src={nothingIsThereImg} alt={"nothingIsThereImg"} className={style.nothingIsThereImg}/>
                </div>
                <span className={style.nothingIsThereText}>Nothing is there</span>
                <div className={style.buttonContainer}>
                    <Button
                        type={"button"}
                        title={"Create your jog first"}
                        onClick={onCreateFirstJogButtonClickHandler}
                        className={style.createFirstJogButton}
                    />
                </div>
            </div>
        </section>
    )
})