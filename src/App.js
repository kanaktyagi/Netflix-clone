import React from 'react';
import './App.css';
import Row from './Row' 
import Request from './request'

function App() {
  return (
    <div className="App">
      <h1>Heyy</h1>
      <Row title="NETFLIX Original" fetchUrl={Request.fetchNetFlixOriginals}/>
      <Row title="Treading Now" fetchUrl={Request.fetchTrending}/>
    </div>
  );
}

export default App;
