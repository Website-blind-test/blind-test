import { LabeledField } from "../../molecules/LabeledField/LabeledField"

export const ProfilOrga = () => {

    return(
        <>
            <LabeledField label={{children:"Pseudo :"}} type="text" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
            <LabeledField label={{children:"Adresse mail :"}} type="text" sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}}></LabeledField>
        </>
        
    )
}