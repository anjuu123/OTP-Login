import React from "react";
import Header from "../header";

function Login(){    
     return (
<div class="card">
        <div class="card-header bg-transparent">  
        <Header/> 
 
      </div>

     
 <form className="Form">
     <h2 class="head">Welcome back!</h2>
  <p class="para">Sign in to your Covered by SAGE account</p>
 <input class="form-control" placeholder="Email ID or Phone Number" required="required"/>

   <div> <button>Sign In</button> </div>
            
    </form>
    <div>
        <p class="signup">Don't have an account? <a href="#">Sign Up</a></p>
        </div>
<div>
    <p class="privacy">Your privacy is important to us.<a href="#"> <u>Learn more</u></a></p>
    </div>
        </div>
        
     )
}
export default Login
     
    
