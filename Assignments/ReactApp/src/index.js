import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Exploit from './Exploit.js';
import People from './People.js';
ReactDOM.render(
	<BrowserRouter>
		<Navigation/>
		
		<h1>Keeler Software Security</h1>
		<p>Introducting innovative security solutions for any business. Keeler Software Security has teams dedicated to: pentesting, exploit removal, and network security consultation. We have been leaders in the regions software security for over 20 years!</p>
		<Exploit/>
		<div className='peopleWork'>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);
