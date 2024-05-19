import * as React from "react";
import { LOGO_URL } from "../utils/constants";

export function Header(){
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="xox" src={LOGO_URL}/>
                <h2>MrPotters Kitchen!</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}