import React from "react";
import { Link } from "react-router-dom";
import './button.css'; 

const Button = () => {
    return (
       <>
       <h1>navbar</h1>
        <nav className="navbar">
            <ul className="navbar-nav">
               
                <li className="nav-item">
                    <Link to="/add" className="nav-link">Add_data</Link>
                </li>
                <li className="nav-item">
                    <Link to="/put" className="nav-link">Updata_data</Link>
                </li>
                <li className="nav-item">
                    <Link to="/delete" className="nav-link">Delete_data</Link>
                </li>
            </ul>
        </nav>
       </>
    );
}

export default Button;
