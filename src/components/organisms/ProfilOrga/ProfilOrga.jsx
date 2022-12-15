import { Avatar } from "@mui/material"
import { LabeledField } from "../../molecules/LabeledField/LabeledField"

export const ProfilOrga = () => {

    return(
        <>
            <Avatar src="3dc69548-60f8-4b76-ba75-ef076a948894"/>
            <LabeledField label={{children:"Pseudo :"}} type="text" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
            <LabeledField label={{children:"Adresse mail :"}} type="text" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
        </>
        
    )
}