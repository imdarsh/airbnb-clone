import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home.js'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import SearchPage from './components/SearchPage/SearchPage.js'

function App() {
  return (
    <div className="App">
     <Router>
        <Header />
        
        <Switch>
          <Route path="/search"><SearchPage /></Route>
          <Route path="/"><Home /></Route>

        </Switch>

        
        
        <Footer />
     </Router>
    </div>
  );
}

export default App;
