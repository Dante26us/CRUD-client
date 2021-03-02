import React from "react";
import axios from 'axios';
//import AddUser1 from './AddUser1';
//import DelUser from './DelUser';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
      charId:0
      
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    
  }
  getData(){
     axios
     .get('http://localhost:8080/'+this.state.charId,{})
        .then(response => {
          const data = response.data
          //console.log(data)
          const fetch=[data].map((u) =>{
           return(
            <div key={u.id}>  
            <p>{u.name}</p>
            <p>{u.gender}</p>
            <p>{u.movie}</p>
            <p>{u.actor}</p>
            <p>{this.details}</p>
            </div>
            )

         })
        this.setState({
                      fetch
                    })
      })
      
      .catch((error) => {
               console.log(error)
            })
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  
  }
  handleClick(event){
  
    this.getData()
  
  }
  

  render() {

        //const a=this.addUser();
    return(
      <main className="body">
       <label>Enter the users Id : 
          <input
           className="textfield"
           type="text"
           name="charId"
           placheholder="enter the ID" 
           onChange={this.handleChange}/>
        </label>
        <br />
        <button className="button" onClick={this.handleClick}>Find</button>
        <div>
          {this.state.fetch}
        </div>
        
      </main>
    )
  }
}
 

export default App;
/*<button className="button" onClick={this.addUser}>Add USER</button>
        <AddUser1 ref="add"/>
        <div>{this.state.a}</div>
        <button className="button" onClick={this.delUser}>Delete USER</button>
        <DelUser ref="del"/>
        <div>{this.state.b}</div>


        addUser(event){
  //console.log('hi');
    const a =this.refs.add.user();
    //console.log(a);
    this.setState({
        a
    })
  }
  delUser(event){
  //console.log('hi');
    const b =this.refs.del.user1();
    //console.log(a);
    this.setState({
        b
    })
  }

this.addUser=this.addUser.bind(this);
    this.delUser=this.delUser.bind(this);
  
  */