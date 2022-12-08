import React, { useEffect, useState } from "react";
import '../css/main.css'
import Cards from "./Cards";

function Category({recipes, categories}) {
    const [dessert, setDessert] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/categories/1`")
            .then(r => r.json())
            .then(data => setDessert(data.recipes))
    },
        []);
    useEffect(() => {
        fetch("http://localhost:3000/categories/2")
            .then(r => r.json())
            .then(data => setLunch(data.recipes))
    }, []);
    useEffect(() => {
        fetch("http://localhost:3000/categories/3")
            .then(r => r.json())
            .then(data => setDinner(data.recipes))
    },[]);


    return (

   
           <div>
           <p className="mx-5">Pastries</p>
           <Cards recipes={dessert}/>
           <p className="mx-5">Lunch Recipe</p>
           <Cards recipes={lunch}/>
           <p className="mx-5"> Dinner Recipe</p>
            <Cards recipes={dinner}/>
           </div>

    )

}



export default Category;