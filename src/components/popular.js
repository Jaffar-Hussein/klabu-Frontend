import '../css/main.css'
import Food from '../assets/fruit.jpg'


function Popular(){

    return(
        <div className="my-2">
            <p className="h3 title text-center spacing">Popular Food Recipes</p>
            <div className='d-flex justify-content-center'>
                <div className='border rounded-circle'  style={{BackgroundColor:Food}}>

                </div>
                {/* <img src={Food} className='img-fluid rounded' height='12px'/> */}
            </div>

        </div>
    );
}
export default Popular;