import React from "react"
import style from "./Contacts.module.scss"

export const Contacts = React.memo(() => {

    return (
        <section className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h3 className={style.contactsTitle}>Contact Us</h3>
                <div className={style.contactsText}>
                    <span className={style.contactsHelpText}>Gmail:&nbsp;
                        <a href={"mailto:vanya.osipik322@gmail.com"} target={"_blank"} rel={"noreferrer"} className={style.contactsValue}>
                            vanya.osipik322@gmail.com
                        </a>
                    </span>
                </div>
                <div className={style.contactsText}>
                    <span className={style.contactsHelpText}>Telegram:&nbsp;
                        <a href={"https://t.me/vanya_Fuza"} target={"_blank"} rel={"noreferrer"} className={style.contactsValue}>
                            @vanya_Fuza
                        </a>
                    </span>
                </div>
                <div className={style.contactsText}>
                    <span className={style.contactsHelpText}>LinkedIn:&nbsp;
                        <a href={"https://www.linkedin.com/in/ivanosipik/"} target={"_blank"} rel={"noreferrer"} className={style.contactsValue}>
                            Ivan Osipik
                        </a>
                    </span>
                </div>
                <div className={style.contactsText}>
                    <span className={style.contactsHelpText}>GitHub:&nbsp;
                        <a href={"https://github.com/Fuza322"} target={"_blank"} rel={"noreferrer"} className={style.contactsValue}>
                            Fuza322
                        </a>
                    </span>
                </div>
                <div className={style.contactsText}>
                    <span className={style.contactsHelpText}>Portfolio:&nbsp;
                        <a href={"https://fuza322.github.io/portfoliofuza322/"} target={"_blank"} rel={"noreferrer"} className={style.contactsValue}>
                            portfoliofuza322
                        </a>
                    </span>
                </div>
            </div>
        </section>
    )
})