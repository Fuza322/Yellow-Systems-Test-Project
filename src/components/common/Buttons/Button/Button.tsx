import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import style from "./Button.module.scss"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    title: string
    onClick?: () => void
    className?: string
}

export const Button = React.memo((props: ButtonPropsType) => {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={props.className}>
            {props.title}
        </button>
    )
})