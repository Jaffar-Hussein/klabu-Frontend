import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import '../css/main.css'
import { Routes, Route, useNavigate } from "react-router-dom";

function Upload({ recipes, user, setRecipes }) {
    let navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch("https://klabu-backend-production.up.railway.app//categories")
            .then(response => response.json())
            .then((cat) => setCategories(cat));
    }, []);
    function handleChange(e) {
        const value = e.target.value;
        if(e.target.name === "category"){
            console.log(">>",value);
        }
        setRecords({
            ...records,
            [e.target.name]: value
        });


    }

    function handleSubmit(e) {
        e.preventDefault();

        const formData = { title: records.title, category_id: records.category, description: records.description, picture: records.picture, ingredient: records.ingredient, direction: records.direction, user_id: user.id };

        console.log(">>>>>", formData);
        fetch("http://localhost:3000/recipes", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then((newItem) => setRecipes([...recipes, newItem]));
        navigate('/');
    }

    return (
        <>
            <NavBar user={user} />
            <div className="container my-5">
                <p className="title text-center h2 spacing">Upload Your Recipes</p>
                <form className="mt-4" onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <label>Title</label>
                                <input type="text" className="form-control" placeholder="Enter title" name="title" onChange={handleChange} />

                            </div>
                            <div className="my-5">
                                <label>Description</label>

                                <input type="text" className="form-control" placeholder="Enter Description" name="description" onChange={handleChange} />

                            </div>


                            <div className="my-5">
                                <label>Category</label>
                                <select onChange={handleChange} name="category" value="pastries" className=' form-select' >

                                    {categories.map((c, index) => {
                                        return <option key={index} value={c.id}>
                                            {c.name}
                                        </option>;
                                    })}
                                </select>

                            </div>
                            <div >
                                <label>Food Image</label>

                                <input type="text" className="form-control" placeholder="Enter Image URL" name="picture" onChange={handleChange} />

                            </div>



                        </div>
                        <div className="col-md-6">
                            <div className="mb-5">
                                <label>Ingredients</label>
                                <textarea className="form-control" placeholder="Enter ingredients" name="ingredient" rows={5} />

                            </div>
                            <div>
                                <label>Directions</label>
                                <textarea className="form-control" placeholder="Enter Direction" name="direction" rows={7} />

                            </div>
                        </div>
                        <div className="d-flex justify-content-center my-5">
                            <button className="btn btn-primary rounded-pill btn-large" type="submit">Upload</button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )


}
export default Upload;