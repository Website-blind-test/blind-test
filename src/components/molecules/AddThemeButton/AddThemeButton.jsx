import React from "react";
import { Button } from "@mui/material"
import { StyledAddThemeButton } from "./style";

export const AddThemeButton = (props) => {
    var objectIconProps = Object();
    objectIconProps.size = "1.5em";
    const icon = React.createElement(props.icon, objectIconProps);

    return(
        <StyledAddThemeButton>
            <Button className="addThemeButton" onClick={() => {props.setIsOpen(true)}}><p>{props.children}</p>{icon}</Button>
        </StyledAddThemeButton>
    )
}