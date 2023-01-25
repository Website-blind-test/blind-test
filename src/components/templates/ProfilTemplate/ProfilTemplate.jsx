import { ProfilOrga } from "../../organisms/ProfilOrga/ProfilOrga"
import { TopRibbon } from "../../organisms/TopRibbon/TopRibbon"

export const ProfilTemplate = (props) => {
    return (
        <>
            <TopRibbon>Profil</TopRibbon>
            <ProfilOrga idUser={props.idUser}/>
        </>
    )
}