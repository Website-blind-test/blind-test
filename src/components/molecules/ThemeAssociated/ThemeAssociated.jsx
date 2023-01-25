import { Button } from "@mui/material";
import React from "react";
import { StyledThemeAssociated } from "./style";

export const ThemeAssociated = (props) => {
    var objectIconProps = Object();
    objectIconProps.size = "1.5em";
    const icon = React.createElement(props.icon, objectIconProps);

    return(
        <StyledThemeAssociated>
            <p>{props.children}</p>
            <Button onClick={() => {}}>{icon}</Button>
        </StyledThemeAssociated>
    )
}