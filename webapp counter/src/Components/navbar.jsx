import React, { Component } from "react";

//use functions instead of classes when dealing with simple, stateless components
const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

//class NavBar extends Component {
//  render() {
//
//  }
//}

export default NavBar;
