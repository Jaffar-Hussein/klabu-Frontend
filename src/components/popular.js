import '../css/main.css'
import Food from '../assets/fruit.jpg'
import Cards from "./Cards";


function Popular({recipes, cat}){

    return(
        <>
        <div className="my-2">
            <p className="h3 title text-center spacing">Popular Food Recipes</p>
            <div className='d-flex justify-content-center'>
                <div className='border rounded-circle'  style={{BackgroundColor:Food}}>

                </div>

                {/* <img src={Food} className='img-fluid rounded' height='12px'/> */}
            </div>

        </div>                    
            {/* <Cards recipes={recipes} cat={cat} /> */}
            </>

    );
}
export default Popular;