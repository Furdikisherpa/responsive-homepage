import('tailwindcss').Config
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div >
            <img src={logo} alt="" className='navbar-logo'/>  
            </div>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
