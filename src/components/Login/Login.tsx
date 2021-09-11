import React from "react"
import {Button} from "../common/Buttons/Button/Button"
import loginLogo from "../../assets/images/logo/loginLogo/bear-face.png"
import style from "./Login.module.scss"

type LoginPropsType = {}

export const Login = React.memo((props: LoginPropsType) => {
    return (
        <section className={style.loginBlock}>
            <div className={style.loginContainer}>
                <div className={style.loginForm}>
                    <div className={style.loginImgContainer}>
                        <img src={loginLogo} alt={"loginLogo"}/>
                    </div>
                    <div>
                        <Button
                            type={"button"}
                            title={"Let me in"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
})