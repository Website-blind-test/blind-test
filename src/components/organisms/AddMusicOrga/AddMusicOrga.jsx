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
import { getPlaylists } from "../../../store/slices/playlist";
import { ThemeAssociated } from "../../molecules/ThemeAssociated/ThemeAssociated";
import { UploadFiles } from "../../molecules/UploadFiles/UploadFiles";
import { margin } from "@mui/system";
import { FormField } from "../../molecules/FormField/FormField";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addTrack, getTrack } from "../../../store/slices/track";
import { checkToken } from "../../../store/slices/authentication";
import { useNavigate } from "react-router";

export const AddMusicOrga = () => {
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState()

    const ref = useRef('');

    const dispatch = useDispatch();
    dispatch(checkToken())

    const handleSubmit = () => {

        let data = {
            title: ref.current.value,
            url: file.name.replace(/ /g, "-")
        }
        dispatch(addTrack(data))
        navigate("/home");  


    }

    return(
        <StyledAddMusicOrga>
            <UploadFiles file={file} setFile={setFile}/>
            <form action="/home">
                <LabeledField ref={ref} label={{children:"Titre :"}} size="small" name="title" type="text"></LabeledField>
                <input id="submit" type="button" value="Valider" onClick={handleSubmit}/>
            </form>
        </StyledAddMusicOrga>
    )
}