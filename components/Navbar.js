import React from "react";
import "./Navbar.css"; // import CSS file

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home" className="home">
            Home
          </a>
        </li>
        <li className="right">
          {" "}
          {/* add "right" class to position "About" link on the right */}
          <select className="locale">
            <option value="">English</option>
            <option value="https://www.example.com/page1">Bangla</option>
          </select>
    
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
