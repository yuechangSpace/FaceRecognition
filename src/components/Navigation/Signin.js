import React from 'react';
const Signin =(props)=>{
  return(
  <article className="w-50 pa4 black-80 shadow-5 center flex flex-column pl-2" >
      <h1 >Signin</h1>
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
        <div className="mt3">
          <label className="db fw4 lh-copy f6" >Email address</label>
          <input className="pa2 input-reset ba bg-transparent measure w-70" type="email" name="email-address"  id="email-address" />
        </div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6">Password</label>
          <input className="b pa2 input-reset ba bg-transparent w-70" type="password" name="password"  id="password" />
        </div>
      </fieldset>
      <div className="mt3">
        <button onClick={()=> props.onButtonNav('signedin')} 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
        type="submit">Signin</button>
      </div>
  </article>
  );
}
export default Signin;