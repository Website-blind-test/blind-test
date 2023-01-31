import React from "react";
import { Button } from "@mui/material";
import "./style.css";

export const HomeListButton = ({buttons}) => {
    const generateListButton = () => {
        return buttons.map((button, i) => {
            
            return <div className="homeListButton" key={i}>
                <Button href={button.url} key={i} className="homeButton" sx={{display:"flex", justifyContent:"space-between",  marginTop: "10%", marginLeft: "20%", marginRight:"20%", backgroundColor: "#082C6C", borderRadius:"10px"}}>
                    <div className="buttonText">{button.text}</div>{button.icon}
                </Button>
            </div>
        })
    }

    return(
        generateListButton()
    )
}