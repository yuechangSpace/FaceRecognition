import React from 'react';
const Register =({onButtonSign,onButtonNav})=>{

    function register(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email-address").value;
    const passwd = document.getElementById("password").value;

    if (name === "" || email === "" || passwd === "") document.getElementById("error").innerText = "Shouldn't be empty!";
    else{
      fetch("http://localhost:4000/register",{
        method:"post",
        headers:{
          'content-type': 'application/json'
        },

        body:JSON.stringify({
          "name":name,
          "email":email,
          "passwd":passwd
        })
      })
      .then(res=>res.json())
      .then((user) => {
        if (user[0].id){
          onButtonSign({
            "name":name,
            "email":email
          });
          onButtonNav('signedin');
        }
        else document.getElementById("error").innerText = "Email exist!"
      })
    }
  }

  return(
  <article className="w-50 pa4 black-80 shadow-5 center flex flex-column pl-2" >
      <h1 >Register</h1>
      <div style={{'color':'red'}}><strong id="error"/></div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6">User Name</label>
        <input className="pa2 input-reset ba bg-transparent measure w-70" id="name" />
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6">Email address</label>
        <input className="pa2 input-reset ba bg-transparent measure w-70" id="email-address" />
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6">Password</label>
        <input className="b pa2 input-reset ba bg-transparent w-70"id="password" />
      </div>
      <div className="mt3">
        <button 
        onClick={()=>register()} 
        className="b ph3 pv2 w-1 input-reset ba b--black bg-transparent grow pointer f6">Register
        </button>
      </div>
  </article>
  );
}
export default Register;