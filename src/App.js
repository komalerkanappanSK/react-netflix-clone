import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'

function App() {
  return (
    <div className="App">
     <h1>netflix app</h1>
     <Row tittle="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
     <Row tittle="Trending Now" fetchUrl={requests.fetchTrending} />
     
    </div>
  );
}

export default App;
