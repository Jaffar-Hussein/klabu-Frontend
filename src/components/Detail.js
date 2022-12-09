import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import { useParams } from "react-router-dom";

import { Routes, Route, useNavigate } from "react-router-dom";
import '../css/main.css'


function Detail({ user }) {
    const [filtered, setFiltered] = useState([]);
    const [stuff, setStuff] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/recipes/${id}`)
            .then(response => response.json())
            .then((rec) => setFiltered(rec));
    }, [])
    let nameArr = []
    let dateUnix = Date.parse('2020-09-09T21:00:14.114-04:00');
    const time = new Date(filtered.created_at).toLocaleTimeString();
    if (typeof filtered.ingredients !== 'undefined') {
        nameArr = filtered.ingredients.split(',');


    }
    console.log(nameArr);

    return (
        <>
            <div className="text-center">
                <p className="h3 my-5">{filtered.title}</p>
                <div>
                    <p className="text-break">
                        {filtered.description}</p>
                    <p className="h6">By {user.username}</p>

                </div>
                <p>{time}</p>

                <div>
                    <img src={filtered.picture} className="detsBg" />
                </div>
            </div>
            {/* <p>{nameArr}</p> */}

            <div className="m-5 ">
                <p className="h3 my-3">Ingredients</p>
                {nameArr.map((arr) => {
                   return <li className="">{arr}</li>
                })}
            </div>
            <div className="mx-5 ">
                <p className="h3 my-3">Direction</p>
                <p>{filtered.direction}</p>
            </div>

        </>

    )

}
export default Detail;