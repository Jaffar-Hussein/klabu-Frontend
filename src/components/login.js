import '../style.css';
import login from '../assets/login.png'
import { useState} from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
function Login({ onLogin }){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [auth_error, setauth_error] = useState('');
  const navigate = useNavigate();
  const onSubmit = data => {
    fetch('http://127.0.0.1:3000/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    method: 'POST',
    body: JSON.stringify({
        "phone":data.phonenumber,
        "password":data.password
    })
   
  })
  .then(r => 
    {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate("/");
      } else {
        r.json().then((err) =>auth_error(err.errors[0]));
      }
    })
  };
    return (
        <>
        
  <div className="row g-0">
   
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image ">
    </div>
    <div className="col-md-8 col-lg-6 signup login">
    <div className='d-flex align-items-center align-content-center justify-content-around'>
    <img src={login} />
    </div>
      <div className=" d-flex align-items-center py-5 plusafya">
        <div className="container">
          <div className="row ">
            <div className="col-md-9 col-lg-8   mx-auto ">
              <h3 className="login-heading mb-4 text-white text-center" >Sign In</h3>
              <form onSubmit={handleSubmit(onSubmit)}  role="form" className="box needs-validation"  noValidate>
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
                  <label className='text-white' >Phone Number</label>
                  <div className="invalid-feedback" id="floatingInputFeedback">{errors.phonenumber?.message}</div>
                </div>
                

                <div className="form-floating mb-3">
                  <input type="password" name="password" className={`form-control text-white userName pass ${errors.password ? 'is-invalid' : ''} `}id="floatingPassword" autoComplete="current-password webauthn" placeholder="password"
                   {...register("password", {required: "Please input your password"})} />
                  <label className='text-white' >Password</label>
                  <div className="invalid-feedback" id="floatingPasswordFeedback">{errors.password?.message}</div>
                </div>

                <div className="form-check mb-3">
                <input className={`form-check-input ${errors.Tearms ? 'is-invalid' : ''} `}  type="checkbox" id="rememberPasswordCheck" 
                placeholder="Tearms and Conditions" {...register("Tearms", {required: "Check to agree to the Tearms and Conditions"})} />
                  <label className="form-check-label text-muted">
                    I agree to the terms and condition
                  </label>
                  <div className="invalid-feedback" id="floatingPasswordFeedback">{errors.Tearms?.message}</div>
                </div>
                <div className={`invalid-feedback my-2 ${auth_error ? 'd-block' : ''}`}>
                  {auth_error}
                </div>
                <div className="d-grid form mb-3">
                  <button className="btn btn-lg btn-primary btn-login  mb-2" type="submit">Sign in</button>
                  <div className="text-center">
                  </div>
                </div>
                <div className="d-grid form mb-3">
                  <button className="btn btn-lg btn-secondary btn-login  mb-2" type="submit">Create Account</button>
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

export default Login;
