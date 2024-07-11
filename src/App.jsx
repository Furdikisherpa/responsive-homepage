
import './App.css'
import { Outlet } from 'react-router-dom'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'

const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
 

export default App

