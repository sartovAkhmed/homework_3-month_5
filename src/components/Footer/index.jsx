import React from 'react'
import stylles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={stylles.footer}>
            <div className="container">
                <div className={stylles.footer__inner}>
                    <div className="footer__logo">
                        logo
                    </div>
                    <ul>
                        <li><a href="#">instangram</a></li>
                        <li><a href="#">twitter</a></li>
                        <li><a href="#">telegram</a></li>
                        <li><a href="#">facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
