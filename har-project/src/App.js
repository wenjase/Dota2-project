import React from 'react';
import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import Filter from './components/Filter';
import Nav from './Nav';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />

      <Nav />

      <Categories />

      <Filter />

      <Route exact path='/' component={Nav}/>
      {/* <Route exact path='/Categories' component={Categories}/>  */}
      {/* <Route exact path='/player-container' render={() => <Redirect to='./components/Categories'/>}/> */}
    </div>
  );
}

export default App;
