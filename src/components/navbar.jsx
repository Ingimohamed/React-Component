import React from "react";

//Stateless Functional Component
const Navbar = ({totalCounters}) => {

    return (
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <badge className="badge-pill badge-secondary mx-2">
                {totalCounters}
              </badge>
              Product
            </a>
          </div>
        </nav>
      );

 };


export default Navbar;
