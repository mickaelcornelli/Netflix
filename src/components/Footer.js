import React from 'react'
import "./Footer.scss"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"

function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__socials">
                    <a href="https://www.facebook.com/netflixfrance" className="footer__social">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/NetflixFR" className="footer__social">
                        <InstagramIcon />
                    </a>
                    <a href="https://twitter.com/NetflixFR" className="footer__social">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.youtube.com/user/netflixfrance" className="footer__social">
                        <YouTubeIcon />
                    </a>
                </div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="https://www.netflix.com/browse/subtitles">Audio et sous-titres</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://media.netflix.com/">Presse</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://help.netflix.com/legal/privacy">Confidentialité</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://help.netflix.com/contactus">Nous contacter</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://www.netflix.com/browse/audio-description">Audiodescription</a>
                    </li>
                    <li className="footer__link">
                        <a href="http://ir.netflix.com/">Relations Investisseurs</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://help.netflix.com/legal/notices">Informations légales</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://help.netflix.com/">Centre d'aide</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://jobs.netflix.com/">Recrutement</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://www.netflix.com/Cookies">Préférences de cookies</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://www.netflix.com/redeem">Cartes cadeaux</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://help.netflix.com/legal/termsofuse">Conditions d'utilisation</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://help.netflix.com/legal/corpinfo">Mentions légales</a>
                    </li>
                </ul>
                <div className="footer__copy">
                    <a href="http://mickaelcornelli.fr">Ce site est une copie du site de Netflix - Tous droits réservés</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer