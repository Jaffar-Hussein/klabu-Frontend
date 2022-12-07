import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import Hero from "./HeroSection"
import Popular from "./popular";
import Cards from "./Cards";
import Category from "./category";
import Vector from '../assets/Vector.svg'
import '../css/main.css'

function Home() {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
    .then(r => r.json())
    .then(data => setCategories(data))
  },[])
  useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
    .then(r => r.json())
    .then(data => setCategories(data))
  },[])

  return (
    <>
      <div className="top_page">   
         <NavBar />

        <Hero />
        <Popular />
        <Category recipes={categories}/>
   

      </div>
      
      <img src={Vector} className="bgGradient img-fluid"
 />

    </>
  )
}
export default Home;