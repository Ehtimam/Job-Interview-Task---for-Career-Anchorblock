import React from "react";
// import "./Navbar.css"; // import CSS file
// import search from "../components/string.json";
import Button from "../components/comp_button";
import bell_icon from "../icon/icons8-notification-32.png";

function Headbar() {
  return (
    <div className="nav_area">
      <div className="search_area1">
        <form className="search_form">
          <input
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder="Search"
          />
          <input type="submit" value="search" className="search_button" />
        </form>
      </div>
      <div className="profile_area">
        <div className="blank"></div>
        <div className="notifybell">
          <Button
            className="notification"
            onClick={() => console.log("Clicked!")}
            type="text"
            color="#ffff"
          >
            <div>
              <img src={bell_icon} alt="bell icon" className="bell_icon" />
            </div>
          </Button>
        </div>
        <div className="profile">
          <Button
            className="profile_pic"
            onClick={() => console.log("Clicked!")}
            type="text"
            color="#ffff"
          />
        </div>
      </div>
    </div>
  );
}

export default Headbar;
