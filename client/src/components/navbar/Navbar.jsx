import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"
import { Context } from '../..'

const Navbar = () => {
    const { store } = useContext(Context);
    console.log({store})
    return (
        <div className='navbar'>
            <div className='container'>
                <NavLink to="/"><img src={Logo} alt="" className='navbar__logo' /></NavLink>
                <div className='navbar__header'>Files in cloud</div>
                {!store.isAuth && <div className='navbar__login'><NavLink to="/login">Login</NavLink></div>}
                {!store.isAuth && <div className='navbar__registration'><NavLink to="/registration">Registration</NavLink> </div>}
                {store.isAuth && <div className='navbar__logout'>Logout</div>}
            </div>
        </div>
    )
}

export default Navbar