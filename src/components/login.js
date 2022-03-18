import React, { useState } from "react";

function Login(){
    const [user,setUser] = useState({email: "",password: ""})

    const submitHandeler = e =>{
        e.preventDefault();
        Login(user)

    }

    const Login = details =>{
        if(user.email === "") return;
        console.log(user)
    }  

    const Logout = () => {
        setUser({email: "",password: ""})
    }

return(
   <form onSubmit={submitHandeler}>
       <div className="form-inner">
           <h2>Login</h2>
           {/* ERROR :3 */}
           <div className="form-group">
               <label htmlFor="email">Email:</label>
               <input type="email" name="email" id="email" onChange={e => setUser({...user, email: e.target.value})} value={user.email}/>
           </div>
           <div className="form-group">
               <label htmlFor="password">Password:</label>
               <input type="password" name="password" id="password" onChange={e => setUser({...user, password: e.target.value})} value={user.password}/>
           </div>
           <input type="submit" value="LOGIN"/>
       </div>
   </form>
)
}

export default Login