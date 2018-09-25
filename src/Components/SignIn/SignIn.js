import React from 'react';
import image from '../loginPoster.jpeg';
class SignIn extends React.Component  {
constructor(props){
  super(props);
  this.state = {
    signInEmail: '',
    signInPassword: ''
  }
}

onEmailChange = (event) => {
  this.setState({signInEmail: event.target.value})
}

onPasswordChange = (event) => {
  this.setState({signInPassword: event.target.value})
}

onSubmitSignIn = () => {
  console.log(this.state);
  fetch('http://localhost:3001/signin', {
    method : 'post',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
      email : this.state.signInEmail,
      password : this.state.signInPassword
    })
  })
  .then(res => res.json())
  .then(data => {
    if(data.id){
      this.props.loadUser(data);
      this.props.onRouteChange('home');
      this.props.getNowPlaying(data);
    }
  })
  
}
  render (){
    const { onRouteChange , loadUser, getNowPlaying} = this.props
	return (
    <div className="cover w-100 h-100 bg-left bg-center-l loginPageImg">
    <div className="bg-black-80  signinPadding">
		<div className="br3 mr5 ba dark-black b--white-30 mv4 w-100  w-50-m w-25-l mw5 shadow-4 center">
<div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph1 mh0">
      <legend className="white no-underline  dn dib-ns pv2 ph3 f3 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 white-80 lh-copy f6">Email</label>
        <input 
onChange={this.onEmailChange}
        className="pa2 input-reset ba bg-transparent  b--white hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 white-80  lh-copy f6">Password</label>
        <input 
onChange={this.onPasswordChange}
        className="b pa2 input-reset ba bg-transparent  b--white hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input onClick={this.onSubmitSignIn} 
      className="b ph3 f1 pv2 input-reset ba white-80  b--white bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <p onClick={() => onRouteChange('register')} className="f6 link dim white-80 db pointer">Register</p>
    </div>
  </div>
  </div>
  </div>
  </div>

  );
}
}

export default SignIn;