import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import './Navigation.css';
import People from './People.js';
import Home from './Home.js';

class Navigation extends Component{
	render(){
		return(
			<BrowserRouter>
			<div className="container">
					<ul>
						<li><Link to ="/">Home</Link></li>
						<li><Link to ="/People">People</Link></li>
						<li><Link to ="/Contact">Contact</Link></li>
						<li><Link to ="/Careers">Careers</Link></li>
					</ul>
					<div className="content">
						<Route exact path="/" component={Home}/>
						<Route path="/People" component={People}/>	
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default Navigation;
