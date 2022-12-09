import React, { useEffect, useState } from "react";
import Login from "./login";
import Signup from "./signup";
function LoginSwitch({onLogin}){
    const [showLogin, setShowLogin] = useState(true)
    return (
        <>
          {showLogin ? (
            <>
              <Login onLogin={onLogin} setShowLogin={setShowLogin}/>
            </>
          ) : (
            <>
              <Signup onLogin={onLogin} setShowLogin={setShowLogin}/>
            </>
          )}
        </>
      )
    }


export default LoginSwitch;