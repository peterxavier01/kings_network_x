import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { AiFillBell } from "react-icons/ai";

const routes = [{
  path: "/",
  icon: <FaHome />,
  label: "Home"
},{
  path: "/events",
  icon: <AiFillBell />,
  label: "Events"
},{
  path: "/songs",
  icon: <MdOutlineLibraryMusic />,
  label: "Songs"
}];


const Navigation = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }} className="sidebar-container">
        <div textColor="#fff" backgroundColor="#333" className="d-none d-lg-block sidebar">
            <div prefix={<i className="fa fa-bars fa-large"></i>}>
                <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                King's Network
                </Link>
            </div> 

            <div className="sidebar-content">
                <div>
                <NavLink exact to="/">
                    <a href='/' icon="home">Home</a>
                </NavLink>
                <NavLink to="/events">
                    <a href='/' icon="bell">Events</a>
                </NavLink>
                <NavLink to="/songs">
                    <a href='/' icon="user">Songs</a>
                </NavLink>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <div
                style={{
                    padding: '20px 5px',
                }}
                >
                Sidebar Footer
                </div>
            </div>
        </div>

        {/* Bottom Tab Navigator*/}
        <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-nav" role="navigation">
            <div className="w-100">
            <div className=" d-flex flex-row justify-content-around w-100">
            {
                routes.map((route, index) => (
                <div key={`tab-${index}`}>
                    <NavLink to={route.path} className="nav-link bottom-link" activeClassName="active">
                        <div className="row d-flex flex-column justify-content-center align-items-center">
                            <i className='text-center'>{route.icon}</i>
                            <div>{route.label}</div>
                        </div>
                    </NavLink>
                </div>
                ))
            }
            </div>
            </div>
        </nav>
    </div>
  );
};

export default Navigation;
