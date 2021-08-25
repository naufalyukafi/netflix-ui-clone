import React from 'react';
import './App.css';
import Banner from '../Banner/Banner';
import Nav from '../../components/Nav/Nav';
import Request from '../../config/Request';
import Row from '../../components/Row/Row';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={Request.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopNetwork} />
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />
    </div>
  );
}

export default App;
