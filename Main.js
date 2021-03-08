import React from "react";
import './index.css';
import App from'./App.js';
import DelUser from'./DelUser.js';
import AddUser1 from'./AddUser1.js';
import Update from'./Update.js';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Main extends React.Component{
	render(){
		return(
			<HashRouter>
			<div className="main">
				<h1>What to do?</h1>
				<ul className="header">
            		<li><NavLink exact to="/seechar">See character</NavLink></li>
            		<li><NavLink to="/addchar">Add character</NavLink></li>
            		<li><NavLink to="/delchar">Delete character</NavLink></li>
                <li><NavLink to="/update">Update character</NavLink></li>
          		</ul>
          		<div className="content">
          			<Route exact path="/seechar" component={App}/>
            		<Route exact path="/addchar" component={AddUser1}/>
            		<Route exact path="/delchar" component={DelUser}/>
                <Route exact path="/update" component={Update}/>
          		</div>
			</div>
			</HashRouter>
			)
	}
}

export default Main;