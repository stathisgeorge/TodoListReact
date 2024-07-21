import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function Login({ setIsLogged }) {
    localStorage.setItem('georgestathis13@gmail.com','17032010');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [errors,setErrors]=useState([]);
    const navigate = useNavigate();
  
     const handleSubmit=(event)=>{
        event.preventDefault();
        const errors=validate();
        setErrors(errors);
        var pass=localStorage.getItem(email);
        if (pass===password){
            console.log('success');
            setIsLogged(true);
            navigate('/dashboardTasks');
         }
        console.log('errors',errors);

    }
 
    const validate=()=>{
        const error={};
        if(!email){
            error.email="Email is required";
        }else {
            error.email="";
        }
        if(!password){
            error.password="password is required";
        }else if (password.length<8){
            error.password="password should be more than 8 characters/numbers"
            return error;
        }
        else {
            error.password="";
        }
        if (error.password && error.email){
            var pass=localStorage.getItem(email);
            if (pass==password){
                setIsLogged(true);
            }else{
                setIsLogged(false);
                error.wrongCredentials="Email or password is wrong"
            }
            console.log(error);
        }
       
        return error;
    }
  return (
    <>
  
       
      <form className="form_container" onSubmit={handleSubmit}>
          <div className="LoginForm">
             <h1>Login</h1>
              <input label="email" type="email" required placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
              {errors.email && <div className="error">{errors.email}</div>}
              <input
                label="password"
                type="password"
                
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}
              /> {errors.password && <div className="error">{errors.password}</div>}
              <span>
              {errors.wrongCredentials && <div className="error">{errors.wrongCredentials}</div>}</span>
          </div>
          
          <button type="submit" className="login-button">Login</button>
      </form>
  </>
  );
}
