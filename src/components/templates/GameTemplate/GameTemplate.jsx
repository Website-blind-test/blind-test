import { useSelector } from "react-redux"
import { GameOrga } from "../../organisms/GameOrga/GameOrga"
import { TopRibbon } from "../../organisms/TopRibbon/TopRibbon"

export const GameTemplate = () => {

    const {username} = useSelector((state) => state.auth.userInfo)

    return (
        <div>
            <TopRibbon>Partie de {username} !</TopRibbon>
            <GameOrga></GameOrga>
        </div>
    )
}