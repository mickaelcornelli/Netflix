import './App.scss';
import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Row from "./components/Row"
import Video from "./components/Video"
import Footer from "./components/Footer"
import requests from "./config/Requests"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Banner />
            <Row 
              title="Programmes Originaux Netflix" 
              fetchUrl={requests.fetchNetflixOriginals}
              isPoster={true}
            />
            <Row  
              title="Tendances actuelles" 
              fetchUrl={requests.fetchTrending} 
            />
            <Row  
              title="Les mieux notés" 
              fetchUrl={requests.fetchTopRated}
            />
            <Row  
              title="Thriller" 
              fetchUrl={requests.fetchThriller} 
            />
            <Row  
              title="Action" 
              fetchUrl={requests.fetchActionMovies}
            />
            <Row  
              title="Aventure" 
              fetchUrl={requests.fetchAdventure}
            />
            <Row  
              title="Comédies" 
              fetchUrl={requests.fetchComedyMovies}
            />
            <Row  
              title="Horreur" 
              fetchUrl={requests.fetchHorrorMovies}
            />
            <Row  
              title="Romance" 
              fetchUrl={requests.fetchRomanceMovie}
            />
            <Row  
              title="Documentaires" 
              fetchUrl={requests.fetchDocumentaries}
            />
            <Row  
              title="Science-fiction" 
              fetchUrl={requests.fetchScfi}
            />
            <Row  
              title="Historiques" 
              fetchUrl={requests.fetchHistory}
            />
            <Row  
              title="Crimes" 
              fetchUrl={requests.fetchCrime}
            />
            <Footer />
          </Route>
          <Route path="/video/:id" component={Video} />
          <Route path="*">
            <Redirect to ="/" />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
