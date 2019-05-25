import logo from './../logo.svg';
import './../App.css';
import React,{Component} from 'react'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import {
	BrowserRouter,
	Route,
	Link,
} from 'react-router-dom'

class App extends Component {
  render (){
    return (
    <BrowserRouter>
    <div>
    <ul>
    //Be have to wrap this links in BrowserRouter
    <li><Link to="/"> Home </Link></li>
    <li><Link to="/about"> About </Link></li>
    <li><Link to="/topics"> Topics </Link></li>
    </ul>
    <hr/>
     
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
    </div>
    </BrowserRouter>
        )
  }
}

export default App;
