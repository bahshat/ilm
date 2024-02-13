import { useEffect, useState } from "react";
import "../App.css";
import { Outlet, Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Question</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Menu;
