import React from 'react';
import { connect } from 'react-redux';
import { loadPokemon } from './actions/appActions';
import './App.css';

const App = props => {
  const handleLoadPokemon = e => {
    e.preventDefault();
    props.loadPokemon();
  }

  console.log(props.state);
  return (
    <div className="App">
      <h1>Pokedex:</h1>
      <form action="">
        <button onClick={handleLoadPokemon}> Load Pokemon </button>
      </form>
      {props.state.poke}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, { loadPokemon })(App);
