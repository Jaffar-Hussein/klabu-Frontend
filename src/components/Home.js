import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import Hero from "./HeroSection"
import Footer from "./Footer";
import Popular from "./popular";
import Cards from "./Cards";
import CallAction from "./CallAction";
import Category from "./category";
import Vector from '../assets/Vector.svg'
import '../css/main.css'

function Home({user}) {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
    .then(r => r.json())
    .then((data) => setCategories(data));
  },[])
  useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
    .then(r => r.json())
    .then((data) => setRecipes(data));
  },[]);

  return (
    <>
      <div className="top_page">   
      
         <NavBar user={user}/>

        <Hero />
        {/* <Popular recipes={recipes} cat={categories} /> */}
        <Category recipes={recipes} categories={categories}/>
        {/* <Cards recipes={recipes} cat={categories} /> */}
        {<CallAction/>}
        <Footer/>
      </div>
      
      <img src={Vector} className="bgGradient img-fluid"
 />

    </>
  )
}
export default Home;