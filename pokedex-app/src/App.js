import React from 'react';
import { connect } from 'react-redux';
import { loadPokemon } from './actions/appActions';
import './App.css';
import './App.scss';

const App = props => {
  const handleLoadPokemon = e => {
    e.preventDefault();
    props.loadPokemon();
  }

  console.log('line 18:', props.pokemonList);

  return (
    <div className="App">
      <h1>Pokedex:</h1>
      <form className="button-form" action="">
        <button className="load-button" onClick={handleLoadPokemon}> Load Pokemon </button>
      </form>
      <section className="pokemon-list">
        {props.pokemonList.map(item => (
          <div className="pokemon-card">
            <p className="pokemon-name">{item.name}</p>
            <img className="pokemon-sprite" src={item.sprites.front_default} alt={item.name}/>
            <p className="p-type">Type: </p>
            {item.types.map(item => (
              <p className="pokemon-type">{item.type.name}</p>
            ))}
          </div>
          // <img
          //  src=''
          //  alt=""/>
        ))}
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pokemonList: state.pokemonList
  }
}

export default connect(mapStateToProps, { loadPokemon })(App);
