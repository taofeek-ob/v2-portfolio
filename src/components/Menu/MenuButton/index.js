import React from "react";
import { useContext } from "react";
import { MenuContext } from "../MenuManager";
import cn from "classnames";
import "./style.scss";
const MenuButton = () => {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <div className={cn("menu-button-wrap", { open })}>
      <button className="menu-button" onClick={() => setOpen(!open)}>
        <span />
      </button>
    </div>
  );
};

export default MenuButton;
