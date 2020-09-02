import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      {/* nav bar*/}
      <Navbar />

      {/* banner*/}
      <Banner />

      <Row
        tittle="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row tittle="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row tittle="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row tittle="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row tittle="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
