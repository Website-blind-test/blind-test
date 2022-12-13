import React from "react";
import "./MenuBar.css"

export const MenuBar = (props) => {
    return (
        <nav className= {props.isOpen ? "navbar navbarOpen" : "navbar"}>{props.children}</nav>
    )
}