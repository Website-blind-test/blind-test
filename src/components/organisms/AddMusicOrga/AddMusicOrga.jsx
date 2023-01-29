import React, { useEffect } from "react";
import { AddMusicButton } from "../../molecules/AddMusicButton/AddMusicButton";
import { LabeledField } from "../../molecules/LabeledField/LabeledField";
import { AddThemeButton } from "../../molecules/AddThemeButton/AddThemeButton";
import { StyledAddMusicOrga } from "./style.js";
import {IoAddOutline} from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
// import { RxCross1 } from "react-icons/rx";
import { AddThemeDialog } from "../../molecules/AddThemeDialog/AddThemeDialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylists } from "../../../store/slices/playlist";

import { ThemeAssociated } from "../../molecules/ThemeAssociated/ThemeAssociated";
import { SelectTheme } from "../../atoms/SelectTheme/SelectTheme";

export const AddMusicOrga = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPlaylists());
    }, [])
    const playlist = useSelector((state) => state.playlist.playlist)

    const [isOpen, setIsOpen] = useState(false);
    return(
        <StyledAddMusicOrga>
            <LabeledField label={{children:"Ajouter une URL"}} id='addUrl' size="small" type="text" sx={{borderRadius: 2, bgcolor: 'white', position: 'relative', bottom: '0.5rem'}}/>
            {/* <AddThemeButton icon={IoAddOutline} setIsOpen={setIsOpen}>Thèmes</AddThemeButton> */}
            <SelectTheme playlists={playlist}></SelectTheme>
            <AddMusicButton>Ajouter la musique</AddMusicButton>
            
            {/* <AddThemeDialog isOpen={isOpen} setIsOpen={setIsOpen} playlists={musicList}></AddThemeDialog> */}
        </StyledAddMusicOrga>
    )
}