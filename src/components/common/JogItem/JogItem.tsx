import React from "react"
import {NavLink} from "react-router-dom"
import transformDateFromNumberToStr from "../../../assets/dateTransformers/dateReformerFromNumberToStr"
import {JogType} from "../../../api/api"
import jogImage from "../../../assets/images/jog/icon.png"
import style from "./JogItem.module.scss"

type JogItemPropsType = JogType

export const JogItem = React.memo((props: JogItemPropsType) => {

    return (
        <>
            <NavLink to={`/editjog/${props.id}/${props.distance}/${props.time}/${props.date}`}>
                <div className={style.jogItemImgContainer}>
                    <img src={jogImage} alt={"jogItemImg"} className={style.jogItemImg}/>
                </div>
            </NavLink>
            <div className={style.jogItemInfo}>
                <div className={style.jogInfoItem}>
                    <span className={style.jogInfoData}>{transformDateFromNumberToStr(props.date)}</span>
                </div>
                <div className={style.jogInfoItem}>Speed:&nbsp;
                    <span className={style.jogInfoData}>{(props.distance / props.time).toFixed(3)} km/min</span>
                </div>
                <div className={style.jogInfoItem}>Distance:&nbsp;
                    <span className={style.jogInfoData}>{props.distance} km</span>
                </div>
                <div className={style.jogInfoItem}>Time:&nbsp;
                    <span className={style.jogInfoData}>{props.time} min</span>
                </div>
            </div>
        </>
    )
})