import React from "react"
import nothingIsThereImg from "../../assets/images/nothingIsThere/sad-rounded-square-emoticon.png"
import { Button } from "../common/Buttons/Button/Button"
import style from "./PageNotFound.module.scss"

type PageNotFoundPropsType = {}

export const PageNotFound = React.memo((props: PageNotFoundPropsType) => {
    return (
        <section>
            <div>
                <div>
                    <img src={nothingIsThereImg} alt="nothingIsThereImg"/>
                    <span>Nothing is there</span>
                </div>
                <div>
                    <Button
                        type={"button"}
                        title={"Create your jog first"}
                        className={"test"}
                    />
                </div>
            </div>
        </section>
    )
})