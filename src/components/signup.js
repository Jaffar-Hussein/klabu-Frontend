import '../style.css';
import signup from '../assets/login.png'
import { useForm } from 'react-hook-form';
import { useState} from 'react'
function Signup({onLogin}){
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data =>{
    fetch('http://127.0.0.1:3000/signup', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    method: 'POST',
    body: JSON.stringify({
        "phone":data.phonenumber,
        "password":data.password,
        "username":data.username,
        "email":data.email
    })
   
  })
  .then(r => 
    {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) =>console.log(err));
      }
    })
  };
  console.log(errors.phonenumber?.message);
return(
<>
<div className="row g-0">
   
   <div className="d-none d-md-flex col-md-4 col-lg-6 signup-image ">
   </div>
   <div className="col-md-8 col-lg-6 signup login">
   <div className='d-flex align-items-center align-content-center justify-content-around'>
   <img src={signup} />
   </div>
     <div className=" d-flex align-items-center py-5 plusafya">
       <div className="container">
         <div className="row ">
           <div className="col-md-9 col-lg-8   mx-auto ">
             <h3 className="login-heading mb-4 text-white text-center" >Create Account</h3>
             <form onSubmit={handleSubmit(onSubmit)}  role="form" className="box needs-validation"  noValidate>
              <div className='form-floating mb-3'>
              <input type="text"  name="username"  className={`form-control userName text-white ${errors.username ? 'is-invalid' : ''}`}  id="floatingInputUsername" placeholder="firstname"
              {...register("username", {required: "Please input your username", minLength: {value:5, message:"Username is too short"}})} 
              />
                 <label className='text-secondary' >Enter your username</label>
                 <div className="invalid-feedback" id="floatingInputUsernameFeedback">{errors.username?.message}</div>
              </div>
              <div className="form-floating mb-3 has-validation">
                  <input type="tel" name="username" className={`form-control userName text-white ${errors.phonenumber ? 'is-invalid' : ''}`} id="floatingInput" placeholder="phonenumber"
                   {...register(
                    "phonenumber", 
                    {required : "Input your phone number to login"
                   , min: 
                   {
                    value:12,
                    message:"The phone number is too short"
                  }, pattern:{ 
                    value:/^\+254/i,
                    message:"Input your phone number +254.."
                  }})}  

                   />
                  <label className='text-secondary' >+254</label>
                  <div className="invalid-feedback" id="floatingInputFeedback">{errors.phonenumber?.message}</div>
                </div>
               <div className="form-floating mb-3">
                 <input type="email"  name="email" className={`form-control userName text-white ${errors.email ? 'is-invalid' : ''}`}  id="floatingEmail" placeholder="email"
                  {...register("email", {required: "Please input your Email",
                  pattern:{
                    value:/^\S+@\S+$/i,
                    message:"Input a valid email"
                  }
                })} 
                 />
                 <label className='text-secondary' >Enter email address</label>
                 <div className="invalid-feedback" id="floatingEmailFeedback">{errors.email?.message}</div>
               </div>
               <div className="form-floating mb-3">
                  <input type="password" name="password" className={`form-control pass ${errors.password ? 'is-invalid' : ''} `}id="floatingPassword" autoComplete="current-password webauthn" placeholder="password"
                   {...register("password", {required: "Please input your password"})} />
                  <label className='text-secondary' >Enter Password</label>
                  <div className="invalid-feedback" id="floatingPasswordFeedback">{errors.password?.message}</div>
                </div>

           

               <div className="d-grid form mb-3">
                 <button className="btn btn-lg btn-primary btn-login  mb-2" type="submit">Register Account</button>
                 <div className="text-center">
                 </div>
               </div>
               <div className="d-grid form mb-3">
                 <button className="btn btn-lg btn-secondary btn-login  mb-2" type="submit">Sign Up</button>
                 <div className="text-center">
                 </div>
               </div>
               {/* <div className="mb-12 mt-3 ml-5">
                   <small className="text-muted float-left">
                       Don't have an Account? <a className="ml-2" type="button" >Create Account</a>
                   </small>
               </div> */}
        
             </form>
           </div>
         </div>
       </div>
     </div>
   </div>
  
 </div>
</>
);
}
export default Signup;
