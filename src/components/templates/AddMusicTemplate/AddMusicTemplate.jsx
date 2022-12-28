import React from "react";
import { TopRibbon } from "../../organisms/TopRibbon/TopRibbon";
import { AddMusicOrga } from "../../organisms/AddMusicOrga/AddMusicOrga";

export const AddMusicTemplate = () => {
    return(
        <>
            <TopRibbon>Ajouter une musique</TopRibbon>
            <AddMusicOrga/>
        </> 
    )
}