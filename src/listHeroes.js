import React, { Component } from 'react';
import {CardColumns} from 'react-bootstrap';
import Heroe from './heroe';
class ListHeroes extends Component {

    state={
        listHeroes:[],
    }


    componentDidMount() {
    if (!navigator.onLine) {
        if (localStorage.getItem('heroes') === null)
            this.setState({ heroes: "loading..." })
        else
            this.setState({ listHeroes: localStorage.getItem('heroes') });
    }
  
    fetch("https://gateway.marvel.com:443/v1/public/characters?ts=marvelapi&hash=87a8c968107f64d29bfa993a2a6521e2&apikey=84552397034e62a8166169c85ff06148")
      .then(res => {
          return res.json();
      }).then(res => {
          this.setState({ listHeroes: res.data.results });
          localStorage.setItem('heroes', res.data.results);
      });
    }

    renderHeroes(){
        if(this.state.listHeroes.length !== 0){
        console.log(this.state.listHeroes)
        return this.state.listHeroes.map((e,i) => ( 
            <Heroe value={e} key={i}></Heroe>
        ));
    }
    }

    render() {
        return (
            <div>
                <h1>Marvel Heroes</h1>
                <CardColumns>
                    {this.renderHeroes()}
                </CardColumns>
            </div>
        );
    }
}

export default ListHeroes;