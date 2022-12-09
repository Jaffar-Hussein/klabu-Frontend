import foodB from '../assets/donut.jpg'
import pastries from '../assets/pastries.jpg'
import { NavLink } from "react-router-dom";

function Cards({recipes, cat}) {
    const dataaa =[{"id":1,"title":"Chocolate Donuts","description":"Lorem ipsum dolor sit amet consectetur. Suspendisse amet posuere eleifend duis tincidunt sollicitudin vitae. Integer ultrices lectus leo nam.","ingredients":"Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato","direction":"Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato","picture":"https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=764\u0026q=80","created_at":"2022-12-07T19:25:04.186Z","updated_at":"2022-12-07T19:25:04.186Z","category_id":1},{"id":2,"title":"Chocolate Donuts","description":"Lorem ipsum dolor sit amet consectetur. Suspendisse amet posuere eleifend duis tincidunt sollicitudin vitae. Integer ultrices lectus leo nam.","ingredients":"Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato","direction":"Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato,Tomato","picture":"https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=764\u0026q=80","created_at":"2022-12-07T23:29:15.402Z","updated_at":"2022-12-07T23:29:15.402Z","category_id":2}]
    
    return (
        <div className='d-flex justify-content-around flex-wrap'>
         {recipes.map((rec)=> {
              return <div className="card my-3" key={rec.id} style={{ width: '25vw', borderRadius: '6%' }}>
               <img className="card-img-top img-fluid" src={rec.picture} alt="Card image" style={{ width: '100%',    height: '15vw',objectFit:'cover' }} />
               <div className="card-body">
                   <h4 className="card-title text-dark">{rec.title}</h4>
                   <p className="card-text text-dark text-truncate">{rec.description}</p>
                   <NavLink className='text-dark h6' to={`/`+rec.id}>Read More</NavLink>
               </div>
           </div>
          })}
         {/* })} */}
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