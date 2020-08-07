import React from "react";
import Logo from '../../assets/images/airtel-logo.svg';
import { Link,
    NavLink,
    withRouter } from 'react-router-dom';
import {
    Grid,
    Form,
    Segment,
    Button,
    Message,
    Icon,
    Dropdown
  } from "semantic-ui-react";
const Header = () => {
    return (
        <div className="social__top">
            <div className="social__header">
                <div className="social__header__start">
                    <NavLink className="logo" to="/"><img src={Logo} alt="logo"/></NavLink>
                </div>
                <div className="social__header__end">
                        <NavLink to="/match"><div className="social__header__match"><Icon size='big' name="handshake"/></div></NavLink>
                        <NavLink to="/profile"><div className="social__header__user"><Icon size='big' name="user circle"/></div></NavLink>
                </div>
            </div>
        </div>
    )
}
export default Header;
