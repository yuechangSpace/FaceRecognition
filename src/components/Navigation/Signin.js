import React from 'react';
const Signin =(props)=>{

  function signIn(){
    const email = document.getElementById("email-address").value;
    const passwd = document.getElementById("password").value;
    fetch("http://localhost:4000/signin",{
      method:"post",
      headers:{
        'content-type': 'application/json'
      },

      body:JSON.stringify({
        "email":email,
        "passwd":passwd
      })
    })
     .then(res=>{
          if (res.status===200){
            res.json()
            .then((data) => {
                props.onButtonSign({
                    "email":email,
                    "name":data.name,
                    "id":data.id,
                    "date":data.joined,
                    "entries":data.entries
                  });
                props.onButtonNav('signedin');
            })
          }else{
            document.getElementById("error").innerText = "Wrong email or password!"
          }
      })
  }

  return(
  <article className="w-50 pa4 black-80 shadow-5 center flex flex-column pl-2" >
      <h1 >Sign in</h1>
      <div style={{'color':'red'}}><strong id="error"/></div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6" >Email address</label>
          <input className="pa2 input-reset ba bg-transparent measure w-70"  id="email-address" />
        </div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6">Password</label>
          <input className="b pa2 input-reset ba bg-transparent w-70"  id="password" />
        </div>
      <div className="mt3">
        <button onClick={()=> signIn()} 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
        type="submit">Signin</button>
      </div>
  </article>
  );
}
export default Signin;