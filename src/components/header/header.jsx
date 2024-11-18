import React from 'react'
import style  from  "./header.module.css"
import headerLeftimg from "./imges/header-left.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser ,faMagnifyingGlass,faHeart,faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className={style.header} >
        <div className="container">
            <div className={style.headerLeft}>
                <img src={headerLeftimg} alt="" />
            </div>

            <div className={style.headerCenter}>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

            <div className={style.headerRight}>
                <button><FontAwesomeIcon icon={faUser} /></button>
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <button><FontAwesomeIcon icon={faHeart} /></button>
                <button><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>

        </div>
    </div>
  )
}

export default Header