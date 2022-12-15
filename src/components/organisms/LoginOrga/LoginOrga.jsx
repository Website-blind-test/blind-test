import { Button, TextField, Typography } from "@mui/material"
import { LabeledField } from "../../molecules/LabeledField/LabeledField"
import './LoginOrga.css'

export const LoginForm = () => {
    return (
        <div id="loginForm">
            <form >
                <LabeledField label={{children:"Identifiant :"}} type="text" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
                <LabeledField label={{children:"Mot de passe :"}} type="password" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
                <Button variant="contained" size="large" sx={{borderRadius: 2, marginTop: '5rem', color: '#4E5E94', bgcolor: "#62D9FF", position: 'relative', left: '16%'}}>Se connecter</Button>
                <Typography sx={{color: "#00FFD1", fontSize: "0.7em", textDecoration: "underline", textAlign:'center'}}>Créer un compte</Typography>
                <Typography sx={{color: "#00FFD1", fontSize: "0.7em", textDecoration: "underline", textAlign:'center'}}>Mot de passe oublié ?</Typography>
            </form>
        </div>
    )
}