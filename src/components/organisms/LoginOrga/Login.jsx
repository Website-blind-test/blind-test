import React from "react";
import { LoginForm } from "../../molecules/LoginForm/LoginForm";
import { TopRibbon } from "../TopRibbon/TopRibbon";

export const Login = () => {
    return (
        <div>
            <TopRibbon>LoginPage</TopRibbon>
            <LoginForm />
        </div>
    )
}