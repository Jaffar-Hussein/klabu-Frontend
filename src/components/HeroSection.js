import '../css/main.css'
import hero from '../assets/Hero.png'
import foodA from '../assets/foodA.png'
import foodB from '../assets/FoodB.png'


import { Link, NavLink } from "react-router-dom"

function HeroSection() {
    
    return (
        <div className="container">
            <div className="row align-items-center hero" >
                <div className="col-md-6 col-lg-6">
                    <p className="h3 spacing"> Food Recipes </p>
                    <p>for the taste</p>
                    <p className="my-5 text-secondary">As soon as the temperature starts to drop, we
                        break out this collection of favorite soups, stews
                        casseroles, and meaty classics.</p>
                    {/* <div className='d-flex justify-content-center '> */}
                    <NavLink>
                        <button className="btn btn-primary rounded-pill " to="/upload">
                            Upload Recipe
                        </button>
                    </NavLink>

                    {/* </div> */}

                </div>
                <div className="col-md-6 col-lg-6">
                    <img src={hero} className="img-fluid mt-3" alt="" />



                </div>

            </div>
            {/* <div className='d-flex flex-column mini-pics'>
                <img src={foodB} className='image-fluid' />
                <div>
                <img src={foodA} className='image-fluid' />

                </div>
            </div> */}
         
        </div>
    )
}
export default HeroSection;