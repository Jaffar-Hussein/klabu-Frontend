import React, { useEffect, useState } from "react";
import '../css/main.css'
import Cards from "./Cards";

function Category({ recipes, categories }) {
    const [dessert, setDessert] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);


    useEffect(() => {
        fetch("https://klabu-backend-production.up.railway.app/categories/1`")
            .then(r => r.json())
            .then(data => setDessert(data.recipes))
    },
        []);
    useEffect(() => {
        fetch("https://klabu-backend-production.up.railway.app/categories/2")
            .then(r => r.json())
            .then(data => setLunch(data.recipes))
    }, []);
    useEffect(() => {
        fetch("https://klabu-backend-production.up.railway.app/categories/3")
            .then(r => r.json())
            .then(data => setDinner(data.recipes))
    }, []);


    return (


        <div>
            {dessert ?
                <div className="my-5 ">
                    <p className="h6  m-5 ">Pastries</p>
                    <Cards recipes={dessert} />
                </div>
                :
                <p>Data not yet populated</p>
            }
            {lunch ?
                <div className="my-5">
                    <p className=" h6 m-5">Lunch Recipe</p>
                    <Cards recipes={lunch} />
                </div> :
                <p>Data not yet populated</p>}
            {dinner ?
                <div className="my-5">
                    <p className=" h6 m-5">Dinner Recipe</p>
                    <Cards recipes={dinner} />
                </div> :
                <p>Data not yet populated</p>}

         
        </div>

    )

}

export default Category;