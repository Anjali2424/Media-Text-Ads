// TopNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <>
            <header style={headerStyle}>
                <div style={logoStyle}>APP LOGO</div>
                <nav style={navbarStyle}>
                    <Link to="/" style={navLinkStyle}>Dashboard</Link>
                    <Link to="/create-ad" style={navLinkStyle}>Create Ad</Link>
                </nav>
            </header>
        </>
    );
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    // padding: '10px',
    backgroundColor: '#fff',
    color: '#000',
};

const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '47px',
    marginTop: '20px'
};

const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '20px'
};

const navbarStyle = {
    display: 'flex',
};

const navLinkStyle = {
    margin: '5px 10px',
    color: '#000',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
};

export default TopNavigation;
