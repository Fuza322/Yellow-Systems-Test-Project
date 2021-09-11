import React from "react"
import jogImage from "../../../assets/images/jog/icon.png"
import style from "./JogItem.module.scss"

type JogItemPropsType = {}

export const JogItem = React.memo((props: JogItemPropsType) => {
    return (
        <article className={style.jogItemContainer}>
            <div className={style.jogItemImgContainer}>
                <img src={jogImage} alt={"jogItemImg"} className={style.jogItemImg}/>
            </div>
            <div className={style.jogItemInfo}>
                <div className={style.jogInfoItem}>
                    <span className={style.jogInfoData}>20.12.2017</span>
                </div>
                <div className={style.jogInfoItem}>Speed:&nbsp;
                    <span className={style.jogInfoData}>15</span>
                </div>
                <div className={style.jogInfoItem}>Distance:&nbsp;
                    <span className={style.jogInfoData}>10 km</span>
                </div>
                <div className={style.jogInfoItem}>Time:&nbsp;
                    <span className={style.jogInfoData}>60 min</span>
                </div>
            </div>
        </article>
    )
})