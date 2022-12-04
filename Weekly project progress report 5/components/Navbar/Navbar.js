import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/md";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
    return (

      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          SYSTUNE
          <Icons.MdOutlineSettingsSuggest />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Game Builds") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
  );
}

export default Navbar;
