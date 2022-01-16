import React, { Component } from 'react';

class Navbar extends React.Component {
    render() { 
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"style={{backgroundColor:'yellow'}}>IMBD</a>
                </div>
            </nav> 
        );
    } 
}
 
export default Navbar;