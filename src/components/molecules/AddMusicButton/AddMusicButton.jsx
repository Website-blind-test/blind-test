import React from "react";
import { Button } from "@mui/material";
import { StyledAddMusicButton } from "./style";

export const AddMusicButton = (props) => {
    return(
        <StyledAddMusicButton>
            <Button href="/home" className="addMusicButton" sx={{display: "flex", color: "white", marginTop: "10%", marginLeft: "20%", marginRight:"20%", backgroundColor: "#082C6C"}}>
                {props.children}
            </Button>
        </StyledAddMusicButton>
        
    )
}