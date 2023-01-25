import React from "react";
import { AddMusicButton } from "../../molecules/AddMusicButton/AddMusicButton";
import { LabeledField } from "../../molecules/LabeledField/LabeledField";
import { AddThemeButton } from "../../molecules/AddThemeButton/AddThemeButton";
import { StyledAddMusicOrga } from "./style.js";
import {IoAddOutline} from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
// import { RxCross1 } from "react-icons/rx";
import { AddThemeDialog } from "../../molecules/AddThemeDialog/AddThemeDialog";
import { useState } from "react";
import { ThemeAssociated } from "../../molecules/ThemeAssociated/ThemeAssociated";

export const AddMusicOrga = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <StyledAddMusicOrga>
            <LabeledField label={{children:"Ajouter une URL"}} id='addUrl' size="small" type="text" sx={{borderRadius: 2, bgcolor: 'white', position: 'relative', bottom: '0.5rem'}}/>
            <AddThemeButton icon={IoAddOutline} setIsOpen={setIsOpen}>Thèmes</AddThemeButton>
            <AddMusicButton>Ajouter la musique</AddMusicButton>
            <ThemeAssociated icon={AiFillDelete}>Années 80</ThemeAssociated>
            <AddThemeDialog isOpen={isOpen} setIsOpen={setIsOpen}></AddThemeDialog>
        </StyledAddMusicOrga>
    )
}