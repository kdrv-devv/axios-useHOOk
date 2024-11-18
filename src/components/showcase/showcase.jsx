import React from 'react'
import style  from  "./showcase.module.css"


const Showcase = () => {
  return (
    <div className={style.showcase}>
        <div className="container">
            <div className={style.shoptext}>
                <h2>Shop</h2>
                <div className={style.shopTextBottom}>
                    <a href="">Home  </a>
                    <h6 href=""> > </h6>
                    <h6 href="">Shop</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase