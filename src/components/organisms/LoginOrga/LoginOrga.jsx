import { Button, Link, Typography } from "@mui/material"
import { LabeledField } from "../../molecules/LabeledField/LabeledField"
import './LoginOrga.css'

export const LoginOrga = () => {
    return (
        <div id="loginForm">
            <form >
                <LabeledField label={{children:"Identifiant :"}} type="text" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
                <LabeledField label={{children:"Mot de passe :"}} type="password" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
                <Button variant="contained" size="large" sx={{borderRadius: 2, marginTop: '5rem', color: '#4E5E94', bgcolor: "#62D9FF", position: 'relative', left: '16%', fontWeight:'bold'}}>Se connecter</Button>
                <Typography  id='signup' sx={{color: "#00FFD1", fontSize: "0.7em", textAlign:'center', marginTop:'1rem'}}><Link href='/sign-up' sx={{color: "#00FFD1", textDecoration: "underline"}}  >Pas encore inscrit ? Créez un compte</Link></Typography>
                <Typography id='forgottenPwd' sx={{fontSize: "0.7em", textAlign:'center', marginTop:'1rem'}}><Link href='/sign-up' sx={{color: "#00FFD1", textDecoration: "underline"}} >Mot de passe oublié ?</Link></Typography>
            </form>
        </div>
    )
}