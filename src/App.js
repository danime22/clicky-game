import React, { Component } from "react";
import Navbar from "./component/Navbar/Navbar";
import Jumbotron from "./component/Jumbotron/Jumbotron";
import PokemonCard from "./component/PokemonCard/Pokemon";
import Wrapper from "./component/Wrapper/Index";
import Footer from "./component/Footer/Footer";
import data from "./data.json";


class App extends Component {
  constructor(props) {
    super(props);
    this.pokemonClicked = [];
    this.score = 0;
    this.bestScore = 0;
    this.cards = data;
    this.status = "";
  }

  shufflePokemon = (arr) => {
    let currentIndex = arr.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  }

  onclickHandler = (id) => {
    if (this.pokemonClicked.includes(id)) {
      this.status = "You Fucking Loser!!!!"
      if (this.score > this.bestScore) {
        this.bestScore = this.score;
      }
  
      this.score = 0;
      this.pokemonClicked = [];
    } else {
      this.status = "Correct!"
      this.pokemonClicked.push(id);
      this.score++;
      this.cards = this.shufflePokemon(this.cards);
     
    }

    this.forceUpdate();

  };

  renderCard(i) {
    return <PokemonCard key={this.cards[i].id} Pokestop={this.cards[i]} callback={this.onclickHandler} />

  }
  render() {
    return (

      <div className="App">
        <Navbar status={this.status} score={this.score} bestScore={this.bestScore} />
        <Jumbotron title="Clicky that Pokemon!" />
        <Wrapper>
          {
            this.cards.map((card, i) => {
              return this.renderCard(i);
            })
          }
        </Wrapper>  
        <Footer /> 
      </div>

    );
  }
}

export default App;