import React from "react";
import "./Jumbotron.css";
import logo from "./http___pluspng.com_img-png_pokemon-logo-png-pokemon-logo-png-2000.png";

function Jumbotron(props) {
    return (


        <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <img style={{width: 400 }} src={logo} alt="logo" className="logoPokemon"/>
                    </div>
                    <div className="title col-sm-8">
                        <h1>{props.title}</h1>
                        Click Pokemon to earn points, but don't click on any more than once!
                    </div>

                </div>
            </div>


        </div>
  
    );
}


export default Jumbotron;


