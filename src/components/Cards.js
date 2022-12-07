import foodB from '../assets/donut.jpg'
import pastries from '../assets/pastries.jpg'

function Cards({recipes, cat}) {

    return (
        <div className='d-flex justify-content-around'>
         {/* {recipes.map((rec)=> {
               <div className="card" style={{ width: '400px' }}>
               <img className="card-img-top" src={foodB} alt="Card image" style={{ width: '100%' }} />
               <div className="card-body">
                   <h4 className="card-title text-dark">{rec.title}</h4>
                   <p className="card-text text-dark">{rec.description}</p>
                   <a href="#" className="btn btn-primary">See Profile</a>
               </div>
           </div>
         })} */}
            {/* <div className="card" style={{ width: '400px' }}>
                <img className="card-img-top" src={pastries} alt="Card image" style={{ width: '100%' }} />
                <div className="card-body">
                    <h4 className="card-title text-dark">John Doe</h4>
                    <p className="card-text text-dark">Some example text some example text. John Doe is an architect and engineer</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div> */}

        </div>
    )
}
export default Cards;