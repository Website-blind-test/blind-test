import { Navbar } from "../../organisms/Navbar/Navbar"
import { ProfilOrga } from "../../organisms/ProfilOrga/ProfilOrga"
import { TopRibbon } from "../../organisms/TopRibbon/TopRibbon"

export const ProfilTemplate = () => {
    return (
        <>
            <TopRibbon>Profil</TopRibbon>
            <Navbar />
            <ProfilOrga />
        </>
    )
}