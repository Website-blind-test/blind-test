import { Avatar } from "@mui/material"
import axios, * as others from 'axios'
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LabeledField } from "../../molecules/LabeledField/LabeledField"
import { StyledProfilOrga } from "./style"

export const ProfilOrga = (props) => {

    const userInfo = useSelector((state) => state.auth.userInfo)
    

      return(
        <StyledProfilOrga >
            <Avatar src=""  sx={{marginTop: '2.5rem', width: 100, height: 100}}/>
            <LabeledField label={{children:"Identifiant :"}} defaultValue={userInfo.username} type="text" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
            <LabeledField label={{children:"Adresse mail :"}} defaultValue={userInfo.email} type="text" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
        </StyledProfilOrga>
        
    )

}