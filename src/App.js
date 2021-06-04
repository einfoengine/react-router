// Core
import './App.css';
// Imports
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Declare

// Components
import Header from './Container/Header';
import Home from './Container/Home';
import About from './Container/About';
import Contact from './Container/Contact';
import Posts from './Container/Posts';
// import Nav from './Header/Nav';

// Functions

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        {/* <Nav/> */}
        <Switch>
          {/* <Route path='/' exact component={Home} /> In order to avoide exact we can get the '/' path at the end of the route list */}
          <Route path='/' exact render={()=>{
            return <Home name="Shanewaz Al Maruf" />
          }} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/posts/:postId' component={Posts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// In stead of exact we can use switch
