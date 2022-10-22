import React, { useContext } from "react";
import { Plus } from "react-feather";
import "./style.scss";
import cn from "classnames";
import { MenuContext } from "../Menu/MenuManager";
const Contact = () => {
  const { setOpen, open } = useContext(MenuContext);
  return (
    <button
      className={cn("contact-button", { open })}
      onClick={() => setOpen(!open)}
    >
      <span>Contact Us</span>
      <Plus />
    </button>
  );
};

export default Contact;
