import React from "react";
import { TopRibbon } from "../../organisms/TopRibbon/TopRibbon";
import {HomeOrga} from "../../organisms/HomeOrga/HomeOrga";

export const HomeTemplate = () => {
    return(
        <>
            <TopRibbon>Bienvenue pseudo !</TopRibbon>
            <HomeOrga/>
        </>
    )
}