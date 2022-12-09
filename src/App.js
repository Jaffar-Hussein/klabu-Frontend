import './App.css';
import React, { useEffect, useState } from "react";
import Login from './components/login';
import SignUp from './components/signup';
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import Home from './components/Home';
import Detail from './components/Detail';
import Recipes from './components/Recipes';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories]= useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
      .then(r => r.json())
      .then((data) => setCategories(data));
  }, []);
  // let navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
      .then(r => r.json())
      .then((data) => setRecipes(data));
  }, []);
  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(user));
  // }, [user]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('user'));
  //   if (items) {
  //     setUser(items);
  //   }
  // }, []);
console.log(user);
  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path={`/:id`} element={<Detail recipes={recipes} />} />
        <Route path='/recipes' element={<Recipes recipes={recipes} categories={categories}/>} />
      </Routes>

    </>


  )
}


export default App;
