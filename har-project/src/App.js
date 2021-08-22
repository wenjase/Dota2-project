import React, {useState} from 'react';
import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import Filter from './components/Filter';
import Nav from './Nav';
import {Route, Link, Redirect, withRouter} from 'react-router-dom'

function App() {

  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <Header />

      <Nav />
      <Route exact path='/' render={() => (
        <Filter players={players} setPlayers={setPlayers}/>
      )}/>
      <Route exact path='/Categories/:account_id' render={(routerProps) => (
        <Categories match={routerProps} players={players}/>

      )}/> 
      
      
    </div>
  );
}

export default App;
