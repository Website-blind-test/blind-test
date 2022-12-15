import React from "react";
import { LabeledField } from "../../molecules/LabeledField/LabeledField";
import { Button, Link, Typography } from "@mui/material";
import './SignupOrga.css'

export const SignupOrga = () => {

    return (
        <div id="signupForm">
            <form >
                <LabeledField theme label={{children:"Adresse mail :"}} id='mail' size="small" type="text" sx={{borderRadius: 2, bgcolor: 'white', position: 'relative', bottom: '0.5rem'}}></LabeledField>
                <LabeledField theme label={{children:"Identifiant :"}}  id='login' size="small"  type="text" sx={{borderRadius: 2, bgcolor: 'white', position: 'relative', bottom: '0.5rem'}}></LabeledField>
                <LabeledField theme label={{children:"Mot de passe :"}}  id='pwd' size="small"  type="password" sx={{borderRadius: 2, bgcolor: 'white', position: 'relative', bottom: '0.5rem'}}></LabeledField>
                <LabeledField theme label={{children:"Confirmer le mot de passe :"}} id='confirmPwd'  size="small" type="password" sx={{borderRadius: 2, bgcolor: 'white', position: 'relative', bottom: '0.5rem'}}></LabeledField>
                <Button variant="contained" size="large" sx={{borderRadius: 2, marginTop: '2rem', color: '#4E5E94', bgcolor: "#62D9FF", position: 'relative', left: '27%', fontWeight:'bold'}}>Valider</Button>
                <Typography  id='login' sx={{color: "#00FFD1", fontSize: "0.7em", textAlign:'center', marginTop:'1rem'}}><Link href='/' sx={{color: "#00FFD1", textDecoration: "underline"}}>Déjà inscrit ? Connectez vous !</Link></Typography>
            </form>
        </div>
    )
}