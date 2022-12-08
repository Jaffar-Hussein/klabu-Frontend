import foodA from '../assets/foodA.png'
import foodB from '../assets/FoodB.png'
import '../css/main.css'
import { Link } from "react-router-dom"


function CallAction() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 col-lg-6">

                </div>
                <div className="col-md-6 col-lg-6">
                    <p className='h4'>Enjoy lots of free receipes</p>
                    <p>As soon as the temperature starts to drop, we
                        break out this collection of favorite soups, stews
                        casseroles, and meaty classics.</p>
                        <Link>
                        <button className="btn btn-primary rounded-pill ">
                            Upload Recipe
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CallAction