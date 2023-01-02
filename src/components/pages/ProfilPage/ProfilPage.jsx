import { useSlotProps } from "@mui/base"
import { ProfilTemplate } from "../../templates/ProfilTemplate/ProfilTemplate"

export const ProfilPage = (props) => {
    return (
        <ProfilTemplate idUser={props.idUser}/>
    )
}