import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Photography from "./components/Photography/Photography";
import './css/App.css';

class App extends Component {
 	render() {
    	return (
			<BrowserRouter> 
		      <div className="App">
		      <NavBar />
		        <Route exact path="/" component={Projects} />
		      </div>
		    </BrowserRouter>  
    	);
  	}
}

export default App;
