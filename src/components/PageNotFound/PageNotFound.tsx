import React from "react"
import {Button} from "../common/Buttons/Button/Button"
import nothingIsThereImg from "../../assets/images/nothingIsThere/sad-rounded-square-emoticon.png"
import style from "./PageNotFound.module.scss"

type PageNotFoundPropsType = {}

export const PageNotFound = React.memo((props: PageNotFoundPropsType) => {
    return (
        <section className={style.nothingIsThereBlock}>
            <div className={style.nothingIsThereContainer}>
                <div className={style.nothingIsThereImgContainer}>
                    <img src={nothingIsThereImg} alt="nothingIsThereImg" className={style.nothingIsThereImg}/>
                </div>
                <span className={style.nothingIsThereText}>Nothing is there</span>
                <div className={style.buttonContaner}>
                    <Button
                        type={"button"}
                        title={"Create your jog first"}
                        className={style.createFirstJogButton}
                    />
                </div>
            </div>
        </section>
    )
})