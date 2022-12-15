import React from "react";
import { Button } from "../../atoms/MenuButton/Button";
import "./HomeListButton.css";

export const HomeListButton = ({buttons}) => {
    const generateListButton = () => {
        return buttons.map((button, i) => {
            return <div className="homeListButton">
                <Button key={i} class="homeButton"><div className="buttonText">{button.text}</div>{button.icon}</Button>
            </div>
        })
    }

    return(
        generateListButton()
    )
}