import './App.css';
import React, { useEffect, useState } from "react";
import Login from './components/login';
import SignUp from './components/signup';
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import Home from './components/Home';
import Detail from './components/Detail';



function App() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/`)
      .then(r => r.json())
      .then((data) => setRecipes(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3000/me/`).then((r)=> {
      if (r.ok){
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!user) return <Login onLogin={setUser}  />;
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signup' element={<SignUp onLogin={setUser} />} />
      <Route path='/login' element={<Login onLogin={setUser} />} />
      <Route path={`/:detail`} element={<Detail />} />
    </Routes>


  )
}


export default App;
