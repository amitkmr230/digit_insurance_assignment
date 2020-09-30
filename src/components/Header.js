import React from 'react'
import back from '../images/back.svg'
import logo from '../images/logo.png'
import contact from '../images/contact.svg'

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                        <img src={back} alt="back"/>
                        <img className="logoimg" src={logo} alt="logo"/>
                </div>
                <div className="contact">
                        <img src={contact} alt="contact"/>
                </div>
            </div> 
        </>
    )
}

export default Header
