import React, {useCallback} from "react"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import useWindowDimensions from "../../assets/hooks/hooks"
import {loginTC} from "../../redux/reducers/login-reducer"
import {Button} from "../common/Buttons/Button/Button"
import desktopLoginLogo from "../../assets/images/logo/loginLogo/desktopLoginLogo/bear-face.png"
import mobileLoginLogo from "../../assets/images/logo/loginLogo/mobileLoginLogo/bearFace.png"
import style from "./Login.module.scss"

type LoginPropsType = {}

export const Login = React.memo((props: LoginPropsType) => {

    const {width} = useWindowDimensions()
    const dispatch = useDispatch()
    const history = useHistory()

    const onLoginButtonClickHandler = useCallback(() => {
        dispatch(loginTC())
        history.push("/")
    }, [dispatch, history])

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
                            onClick={onLoginButtonClickHandler}
                            className={style.loginButton}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
})