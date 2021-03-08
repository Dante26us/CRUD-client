import React from "react";
import axios from 'axios';

class Update extends React.Component{
	constructor(){
		super()
		this.state={

		}
		this.handleChange=this.handleChange.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.onValueChange=this.onValueChange.bind(this);
	};
	handleChange(event){
		this.setState({
		[event.target.name]:event.target.value
		});
	}
	handleClick(event){
		const newChar={
  				"name": this.state.newCharName,
     			"gender": this.state.newGender,
      			"movie": this.state.newMovie,
      			"actor": this.state.newActor,
      			"characterId": this.state.charId
  				}
  		console.log(newChar);
		axios
     	.put('http://localhost:8080/update/'+this.state.charId,newChar)
        .then(response => {
			const data = response.data
          	console.log(data)
		})
		.catch(err => console.log(err))
	}
	onValueChange(event) {
    	this.setState({
      		newGender: event.target.value
    });
    }
	render(){
		return(
			<main className="form">
       			<label>Enter the characters Id : 
          		<input
           		className="textfield"
           		type="text"
           		name="charId"
           		placheholder="enter the ID" 
           		onChange={this.handleChange}/>
        	</label><br />
        	<label>enter Name :
				<input
	              className="textfield"
	              type="text"
	              name="newCharName"
	              placheholder="enter the name"
	              onChange={this.handleChange}/>
				</label><br />
				<label>enter Gender :
				<input 
					type="radio" 
					value="Male" 
					name="newGender"  
					checked={this.state.newGender === "Male"}
	              	onChange={this.onValueChange} />Male
        		<input 
	        		type="radio" 
	        		value="Female" 
	        		name="newGender" 
	        		checked={this.state.newGender === "Female"}
	             	onChange={this.onValueChange}/> Female
				</label><br />
				<label>enter Movie :
				<input
	              className="textfield"
	              type="text"
	              name="newMovie"
	              placheholder="enter the movie"
	              onChange={this.handleChange}/>
				</label><br />
				<label>enter Actor :
				<input
	              className="textfield"
	              type="text"
	              name="newActor"
	              placheholder="enter the actor"
	              onChange={this.handleChange}/>
				</label><br />
			<button className="button" onClick={this.handleClick} >FIND</button>
			<div></div>
			</main>
			)
	}
}

export default Update