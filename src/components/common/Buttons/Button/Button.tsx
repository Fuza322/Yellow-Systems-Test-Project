import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import style from "./Button.module.scss"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    title: string
    className?: string
}

export const Button = React.memo((props: ButtonPropsType) => {
    return (
        <button type={props.type} className={props.className}>{props.title}</button>
    )
})