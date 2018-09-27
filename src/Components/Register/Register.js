import React from 'react';

class Register extends React.Component  {

  constructor(props){
  super(props);
  this.state = {
    email: '',
    password: '',
    name: ''
  }
}

onNameChange = (e) => {
  this.setState({name: e.target.value})
}

onEmailChange = (event) => {
  this.setState({email: event.target.value})
}

onPasswordChange = (event) => {
  this.setState({password: event.target.value})
}

onSubmitRegister = () => {
  console.log(this.state);
  fetch('http://localhost:3001/register', {
    method : 'post',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
      email : this.state.email,
      password : this.state.password,
      name : this.state.name
    })
  })
  .then(res => res.json())
  .then(user => {
    console.log(user)
    if(user.id > 0){
      this.props.loadUser(user)
      this.props.onRouteChange('home');
      this.props.getNowPlaying(user);
    }

  })
  .catch(err => console.log(err))
  
}
  render (){
    const { onRouteChange, getNowPlaying } = this.props;

	return (
    <div className="cover w-100 h-100 bg-left bg-center-l loginPageImg">
    <div className="bg-black-80 signinPadding">
		<div className="br3 ba dark-black b--white-30 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
<div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph1 mh0">
      <legend className="white no-underline dn dib-ns pv2 ph3 f3 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
      <label className="db fw6 lh-copy f6 white" >Name</label>
        <input 
          onChange = { this.onNameChange }
        className="pa2 white input-reset ba bg-transparent white hover-white width93" name="username" />
      </div>
      <div className="mt3">
        <label className="db fw6 white lh-copy f6" htmlFor="email-address">Email</label>
        <input 
        onChange = { this.onEmailChange }
        className="pa2 white input-reset ba bg-transparent white hover-white w-100" type="email" 
        name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 white lh-copy f6" htmlFor="password">Password</label>
        <input 
        onChange = { this.onPasswordChange }
        className="b white pa2 input-reset ba bg-transparent white hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="pb1">
      <input onClick={ this.onSubmitRegister} className="b ph3 f1 white pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
    </div>  
  </div>
  </div>
   </div>
  </div>
  );
}
}

export default Register;