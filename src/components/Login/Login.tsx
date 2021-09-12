import React from "react"
import useWindowDimensions from "../../assets/hooks/hooks"
import {Button} from "../common/Buttons/Button/Button"
import desktopLoginLogo from "../../assets/images/logo/loginLogo/desktopLoginLogo/bear-face.png"
import mobileLoginLogo from "../../assets/images/logo/loginLogo/mobileLoginLogo/bearFace.png"
import style from "./Login.module.scss"


type LoginPropsType = {}

export const Login = React.memo((props: LoginPropsType) => {

    const {width} = useWindowDimensions()

    return (
        <section className={style.loginBlock}>
            <div className={style.loginContainer}>
                <div className={style.loginForm}>
                    <div className={style.loginImgContainer}>
                        {width <= 650
                            ? <img src={mobileLoginLogo} alt={"loginLogo"} className={style.loginImg}/>
                            : <img src={desktopLoginLogo} alt={"loginLogo"} className={style.loginImg}/>
                        }
                    </div>
                    <div className={style.loginButtonContainer}>
                        <Button
                            type={"button"}
                            title={"Let me in"}
                            onClick={() => console.log("LoginButton was Clicked")}
                            className={style.loginButton}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
})