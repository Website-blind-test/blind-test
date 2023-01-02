import { Avatar } from "@mui/material"
import axios, * as others from 'axios'
import { useRef } from "react"
import { LabeledField } from "../../molecules/LabeledField/LabeledField"
import { StyledProfilOrga } from "./style"

export const ProfilOrga = (props) => {

    const profilRef = useRef();
    const mailRef = useRef();

    axios.get('http://127.0.0.1:8055/items/user/'+props.idUser
    ).then(function (response) {
        if(profilRef.current !== undefined){
            profilRef.current.value = response.data.data.login;
        }
        if(mailRef.current !== undefined){
            mailRef.current.value = response.data.data.mail;
        }
      });

      return(
        <StyledProfilOrga >
            <Avatar src=""  sx={{marginTop: '2.5rem', width: 100, height: 100}}/>
            <LabeledField label={{children:"Pseudo :"}} inputRef={profilRef} type="text" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
            <LabeledField label={{children:"Adresse mail :"}} inputRef={mailRef} type="text" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
        </StyledProfilOrga>
        
    )

}