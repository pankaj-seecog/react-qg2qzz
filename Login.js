import React from 'react';

class Login extends React.Component{

constructor(){
  super();
  this.state = {
    email : "",
    emailErr : "",
    password : "",
    passErr : "",
  }
}

resetError = () =>{
  this.setState({
    emailErr : "",
    passErr : ""
  })
}

checkLogin = () =>{

this.resetError();

if(this.state.email==""){
  this.setState({
    emailErr : "Please enter email."
  })
  return;
}

if(this.state.password==""){
  this.setState({
    passErr : "Please enter password."
  })
  return;
}
console.log("The data of login is ",this.state.email,this.state.password)
}

render(){
  return (
    <div>
<p>
Email : <input value={this.state.email}  onChange={(evt)=>this.setState({
email : evt.target.value
})}/><br/>
<span style={{color : 'red'}}>{this.state.emailErr}</span>
</p>
<p>
Password : <input value={this.state.passowrd} onChange={(evt)=>this.setState({
password : evt.target.value
})}/>
<br/>
<span style={{color : 'red'}}>{this.state.passErr}</span>
</p>
<button onClick={this.checkLogin}>Login</button>
    </div>
  )
}

}

export default Login;