import { Navbar } from "../Navbar/Navbar"
import { PageTitle } from "../../atoms/PageTitle/PageTitle";
import React from "react";
import "./TopRibbon.css"

export const TopRibbon = (props) => {
    return(
        <>
        <Navbar/>
        <div className="topRibbon">
            <PageTitle>{props.children}</PageTitle>
        </div>
        </>
    )
}