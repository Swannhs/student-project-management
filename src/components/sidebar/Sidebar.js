import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar ps" data-color="rose" data-background-color="black"
             data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
                <Link to='/' className="simple-text text-light logo-mini">
                    SW
                </Link>
                <Link to='/' className="simple-text text-light logo-normal">
                    Thesis
                </Link>
            </div>
            <div className="sidebar-wrapper ps">

                <ul className="nav">
                    <li className="nav-item">
                        <Link to='/dashboard' className="nav-link text-light">
                            <i className="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
