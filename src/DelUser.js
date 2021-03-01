import React from "react";
import axios from 'axios';

class DelUser extends React.Component{
	constructor() {
    	super();
    	this.state = {

    	};
    	this.handleSubmit1=this.handleSubmit1.bind(this);
    	this.handleChanges1=this.handleChanges1.bind(this);
    }
    handleSubmit1(event){
  		const newChar=this.state.delId;
  		//console.log(newChar)
  		
		axios.delete('http://localhost:8080/deleteCharacter',{data:{newChar}})
  			.then(res => console.log('Data Sent'))
   			.catch(err => console.log(err))
		

  	}
  	handleChanges1(event){
  		this.setState({
  			[event.target.name]: event.target.value
  		});
  	}
	user1(){
	  		//console.log('hi');
		  	return(
				<main className="form">
					<div>
					<label>enter new ID :
					<input
		              className="textfield"
		              type="text"
		              name="delId"
		              placheholder="enter the ID to be deleted"
		              onChange={this.handleChanges1}/>
					</label><br />
					<button className="button" onClick={this.handleSubmit1}>DELETE</button>
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
export default DelUser
