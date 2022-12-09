import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import Cards from "./Cards";
import { Routes, Route, useNavigate } from "react-router-dom";
import '../css/main.css'

function Recipes({recipes, categories}){
const [display, setDisplay] = useState([]);
const [title, setTitle] = useState("");
function displayChange(cat){
    setDisplay([]);
    let all_data = [];
    setTitle(cat);
    recipes.map((rec) =>{
        if(rec.category.name === cat){
        // console.log(all_data);
            // all_data.push(rec)   
         setDisplay(display => [...display, rec ])

        }

    
    })


}   
 console.log(display);

    return (
        <>
        <NavBar />
        <div className="top_page">
               <div className="detailBg">
    
        </div>
        <p className="rectext h2"><em>Recipes</em></p>
        </div>
    
        <div className="my-5 d-flex justify-content-around">
            {categories ? categories.map((cat) => {
           return <button className="btn btn-outline-primary text-light rounded-pill" onClick={() => displayChange(cat.name)} key={cat.id}>{cat.name}</button>

            }) :  <></>}
            {/* <button className="btn btn-outline-primary text-light rounded-pill">Dinner Recipes</button>
            <button className="btn btn-outline-primary text-light rounded-pill">Breakfast Recipes</button>
     */}
        </div>

        {
            display ?            
           <>
           <p className=" h1 title text-center spacing my-5">{title} Recipe</p>
            <Cards recipes={display} /></>
            :
            <></>
        }
     
        </>
        
    );
}
export default Recipes;