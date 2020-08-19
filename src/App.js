import React from "react";
import "./App.css";
import Row from "./Row";
import Request from "./request";

function App() {
  return (
    <div className="App">
      <h1>Heyy</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Request.fetchNetFlixOriginals}
        isLargeRow
      />
      <Row title="Treading Now" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />
    </div>
  );
}

export default App;
