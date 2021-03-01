import React from "react";
import axios from 'axios';

class AddUser1 extends React.Component{
	constructor() {
    	super();
    	this.state = {

    	};
    	this.handleSubmit=this.handleSubmit.bind(this);
    	this.handleChanges=this.handleChanges.bind(this);
  	}
  	handleSubmit(event){
  		const newChar={
  				"name": this.state.name,
     			"gender": this.state.gender,
      			"movie": this.state.movie,
      			"actor": this.state.actor,
      			"id": this.state.newId
  				}
  		//alert('A form was submitted: ' + JSON.stringify(newChar));
		axios.post('http://localhost:8080/addCharacter',newChar)
  			.then(res => console.log('Data Sent'))
   			.catch(err => console.log(err))
		

  	}
  	handleChanges(event){
  		this.setState({
  			[event.target.name]: event.target.value
  		});
  	}
  	user(){
  		//console.log('hi');
	  	return(
			<main className="form">
				<div>
				<label>enter new ID :
				<input
	              className="textfield"
	              type="text"
	              name="newId"
	              placheholder="enter the ID"
	              onChange={this.handleChanges}/>
				</label><br />
				<label>enter Name :
				<input
	              className="textfield"
	              type="text"
	              name="name"
	              placheholder="enter the name"
	              onChange={this.handleChanges}/>
				</label><br />
				<label>enter Gender :
				<input
	              className="textfield"
	              type="text"
	              name="gender"
	              placheholder="enter the gender"
	              onChange={this.handleChanges}/>
				</label><br />
				<label>enter Movie :
				<input
	              className="textfield"
	              type="text"
	              name="movie"
	              placheholder="enter the movie"
	              onChange={this.handleChanges}/>
				</label><br />
				<label>enter Actor :
				<input
	              className="textfield"
	              type="text"
	              name="actor"
	              placheholder="enter the actor"
	              onChange={this.handleChanges}/>
				</label>
				<button className="button" onClick={this.handleSubmit}>Submit</button>
				</div>
			</main>
		);
  	}
	render(){
	
		return(
			<div>

			</div>
		);
	}
}


export default AddUser1
