import * as React from "react";

export function Header(){
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="xox" src="https://img.freepik.com/free-psd/vintage-pizzeria-logo-design_23-2151236943.jpg?t=st=1715763355~exp=1715766955~hmac=c1be8218b443b26f34884064b1bcc2b57f4deb24e995f1b8ef013d624b1103bb&w=740"/>
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