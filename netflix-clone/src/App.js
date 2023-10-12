
import './App.css';
import Row from './components/Row/Row';
import requests from './js/requests';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Nav/>
     <Banner/>
     <Row title="NETFLIX ORIGIN" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    
    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row
      title="Documentaries Movies"
      fetchUrl={requests.fetchDocumentaries}
    />
    <Footer/>
    </div>
  );
}

export default App;
