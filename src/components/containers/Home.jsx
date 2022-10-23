import React from "react";
import Header from "../Header/index";
import "../../styles/home.scss";
import ContactButton from "../ContactButton";
import MenuManager from "../Menu/MenuManager";

const Home = () => {
  return (
    <MenuManager>
      <Header />
      <div className="main-container" id="main-container">
        <h1>
          frontend. <br />
          <span className="mid"> Smart contracts. </span> <br /> Research.
        </h1>
        <ContactButton />
      </div>
    </MenuManager>
  );
};

export default Home;
