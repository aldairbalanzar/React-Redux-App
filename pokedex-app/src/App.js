import React from 'react';
import { connect } from 'react-redux';
import { loadPokemon } from './actions/appActions';
import './App.css';

const App = props => {
  const handleLoadPokemon = e => {
    e.preventDefault();
    props.loadPokemon();
  }
  console.log('line 12:', props.pokemonList);
  return (
    <div className="App">
      <h1>Pokedex:</h1>
      <form action="">
        <button onClick={handleLoadPokemon}> Load Pokemon </button>
      </form>
      {props.pokemonList.map(item => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pokemonList: state.pokemonList
  }
}

export default connect(mapStateToProps, { loadPokemon })(App);
