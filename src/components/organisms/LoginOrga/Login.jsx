import React from "react";
import { LoginForm } from "../../molecules/LoginForm/LoginForm";
import { Navbar } from "../Navbar/Navbar";

export const Login = () => {
    return (
        <div>
            <Navbar />
            <LoginForm />
        </div>
    )
}