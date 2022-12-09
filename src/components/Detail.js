import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import { useParams } from "react-router-dom";

import { Routes, Route, useNavigate } from "react-router-dom";
import '../css/main.css'


function Detail({recipies}) {
    const [filtered, setFiltered] = useState([]);

    let {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3000/recipes/${id}`)
        .then(response => response.json())
            .then((rec) => setFiltered(rec));
    },[])
    let dateUnix = Date.parse('2020-09-09T21:00:14.114-04:00');
    const time = new Date(filtered.created_at).toLocaleTimeString();
    return (
        <div className="text-center">
            <p className="h3 my-5">{filtered.title}</p>
            <div>
            <p className="text-break">
                {filtered.description}</p>

            </div>
            <p>{time}</p>

        <div>
            <img src={filtered.picture} className="detsBg" />
      </div>
      </div>
    
)

}
export default Detail;