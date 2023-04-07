import React from 'react';
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import {RoutesConstants} from "../constants/routes-constants";

export function Navigation() {
    return (
        <nav className="flex justify-start px-14 bg-black items-center text-white sticky top-0 h-[90px]">
            <Link to="/home" className="mr-10">
                <img src={logo} alt="star wars logo" className="pr-10"/>
            </Link>
            <span>
                <Link to={RoutesConstants.HOME} className="mr-10">Home</Link>
                <Link to={RoutesConstants.PREVIEW}>Preview</Link>
            </span>
        </nav>
    )
}