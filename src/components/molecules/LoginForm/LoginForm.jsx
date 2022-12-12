import { TextField } from "@mui/material"
import './LoginForm.css'

export const LoginForm = () => {
    return (
        <div id="loginForm">
            <form >
            <div className="field">
                <TextField id="login" type="text" sx={{color: 'white', bgcolor: 'background.paper'}}/>
                <p>Identifiant</p>
            </div>
            </form>
        </div>
    )
}