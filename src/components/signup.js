import '../style.css';
import signup from '../assets/login.png'

function Signup(){
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
             <form  className="box" role="form">
              <div className='form-floating mb-3'>
              <input type="text"  name="username" className="form-control userName text-white" id="floatingInput" placeholder="Enter your nickname"/>
                 <label className='text-secondary' >Enter your username</label>
              </div>
               <div className="form-floating mb-3">
                 <input type="phone"  name="username" className="form-control userName text-white" id="floatingInput" placeholder="name@example.com"/>
                 <label className='text-secondary' >+254</label>
               </div>
               <div className="form-floating mb-3">
                 <input type="email"  name="email" className="form-control userName text-white" id="floatingInput" placeholder="name@example.com"/>
                 <label className='text-secondary' >Enter email address</label>
               </div>
               <div className="form-floating mb-3">
                 <input type="password"  name="password" className="form-control pass" id="floatingPassword" placeholder="Password"/>
                 <label className='text-secondary' >Enter Password</label>
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
