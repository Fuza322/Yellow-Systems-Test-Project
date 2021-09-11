import React from "react"
import {Button} from "../common/Buttons/Button/Button"
import nothingIsThereImg from "../../assets/images/nothingIsThere/sad-rounded-square-emoticon.png"
import style from "./EmptyPage.module.scss"

type EmptyPagePropsType = {}

export const EmptyPage = React.memo((props: EmptyPagePropsType) => {
    return (
        <section className={style.nothingIsThereBlock}>
            <div className={style.nothingIsThereContainer}>
                <div className={style.nothingIsThereImgContainer}>
                    <img src={nothingIsThereImg} alt="nothingIsThereImg" className={style.nothingIsThereImg}/>
                </div>
                <span className={style.nothingIsThereText}>Nothing is there</span>
                <div className={style.buttonContainer}>
                    <Button
                        type={"button"}
                        title={"Create your jog first"}
                        onClick={() => {console.log("CreateFirstJogButton was Clicked")}}
                        className={style.createFirstJogButton}
                    />
                </div>
            </div>
        </section>
    )
})