 
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import {Switch} from "react-router"
import Home from './pages/Home';
import reactDom from 'react-dom';
import NewVehicleForm from './pages/NewVehicleForm';
import DeleteVehicle from './pages/DeleteVehicle';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path="/New" element={<NewVehicleForm/>} />
        <Route path="/Delete" element={<DeleteVehicle/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
