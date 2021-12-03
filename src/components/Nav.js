import React from 'react'
import "./Nav.scss"
import { useState } from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

function Nav() {

    const [navBlack, setNavBlack] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const [navAccount, setNavAccount] = useState(false)

    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    }
    useState(()=>{
        document.addEventListener("scroll",transitionNav)
    })

    const transitionNavAccount = () => {

        /*if(navAccount === false){
            setNavAccount(true)
            return(
                <div className="nav__account--visible">
                    <a href="#">Gérer les profils</a>
                    <a href="#">Comptes</a>
                    <a href="#">Centre d'aide</a>
                    <a href="#">Se déconnecter</a>
                </div>
            )
        }
        else {
            setNavAccount(false)
            return(
            <div className="nav__account">
                <a href="#">Gérer les profils</a>
                <a href="#">Comptes</a>
                <a href="#">Centre d'aide</a>
                <a href="#">Se déconnecter</a>
            </div>
            )
        }*/
        
    }

    const handleClick = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }


    return (
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav__transparent"} ${toggleMenu && "show"}`}>
            <button className="nav__burger" onClick={handleClick}>
                <MenuIcon />
            </button>
            <a href="https://www.netflix.com/browse"><img src="./img/netflix_logo.png" alt="logo netflix" className="nav__logo" /></a>
            <nav className="nav__links">
                <a href="/" className="nav__link">Accueil</a>
                <a href="#" className="nav__link">Séries</a>
                <a href="#movie" className="nav__link">Films</a>
                <a href="#" className="nav__link">Nouveauté les plus regardés</a>
                <a href="#" className="nav__link">Ma liste</a>
            </nav>
            <div className="nav__actions">
                <a href="#" className="nav__action">
                    <SearchIcon />
                </a>
                <a href="#" className="nav__action">DIRECT</a>
                <a href="#" className="nav__action">
                    <CardGiftcardIcon />
                </a>
                <a href="#" className="nav__action">
                    <NotificationsIcon />
                </a>
                <a href="#" className="nav__action">
                    <img src="./img/avatar_green.png" alt="avatar of user" className="avatar"/>
                    <ArrowDropUpIcon className="nav__action--profil" onClick={transitionNavAccount}/>
                </a>
            </div>
            
        </div>
    )
}
export default Nav;