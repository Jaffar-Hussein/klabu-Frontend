import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
  let navigate = useNavigate();

  return (
    <Routes>
       <Route path='/signup' element={<SignUp />}/>
    <Route path='/login' element={<Login />} />
    </Routes>
   

  )
}

export default App;
