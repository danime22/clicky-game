import React, { Component } from "react";
import "./Pokemon.css";


class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.Pokestop = props.Pokestop;
        this.callback = props.callback;
    }

    onclickHandler = (id) => {
        this.callback(id);
    }


    render() {
        return (
            
                <div style={{
                    display: "inline-block",
                    width: 300,
                    height: 300,

                }} className="card" onClick={() => this.onclickHandler(this.Pokestop.name)}>

                    <div className="img-container">
                        <img alt="poke1" src={this.props.Pokestop.images} />

                    </div>

                </div>

        )
    }


}




export default PokemonCard;