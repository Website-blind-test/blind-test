import { Typography } from "@mui/material";
import React from "react";
import { LoginOrga } from "../../organisms/LoginOrga/LoginOrga";
import './LoginTemplate.css'

export const LoginTemplate = () => {
    return (
        <div>
            <Typography variant="h5" align="center" color="white" sx={{marginTop: "1rem"}}>Connexion</Typography>
            <LoginOrga />
        </div>
    )
}