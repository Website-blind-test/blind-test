import React from "react";
import { Typography } from "@mui/material";
import { SignupOrga } from "../../organisms/SignupOrga/SignupOrga";

export const SignupTemplate = () => {

    return (
        <>
            <Typography variant="h5" align="center" color="white" sx={{marginTop: "1rem"}}>Inscription  </Typography>
            <SignupOrga />
        </>   
    )
}