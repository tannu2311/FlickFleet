import './App.css';
import requests from './backend/requests'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';

function App() {
  return (
    <>
      {/* Whole App containing all the components - navbar, banner, rows*/}
      <div className="App">

        {/* navbar */}
        <Navbar />

        {/* banner */}
        <Banner fetchUrl={requests.fetchTrending} />

        {/* rows */}
        {/* isVerticalLargeRow defaults to true  */}
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isVerticalLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      </div>
    </>
  );
}

export default App;
