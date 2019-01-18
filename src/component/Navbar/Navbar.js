import React from "react";
import  "./Navbar.css";




function Navbar(props) {
    return (
        <div className="alex text-center">
            <nav>
                <ul className="text-center">

                    <li>{props.status}</li>
                    <li>Score: {props.score} / Top Score: {props.bestScore}</li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;