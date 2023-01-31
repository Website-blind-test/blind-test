import React, { useEffect } from "react";
import { AddMusicButton } from "../../molecules/AddMusicButton/AddMusicButton";
import { LabeledField } from "../../molecules/LabeledField/LabeledField";
import { StyledAddMusicOrga } from "./style.js";
// import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { getPlaylists } from "../../../store/slices/playlist";
import { UploadFiles } from "../../molecules/UploadFiles/UploadFiles";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addTrack } from "../../../store/slices/track";
import { checkToken } from "../../../store/slices/authentication";
import { useNavigate } from "react-router";
import { SelectTheme } from "../../molecules/SelectTheme/SelectTheme";

export const AddMusicOrga = () => {
    let navigate = useNavigate();
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

    useEffect(() => {
        dispatch(getPlaylists());
    }, [])

    const playlist = useSelector((state) => state.playlist.playlist)

    return(
        <StyledAddMusicOrga>
            <UploadFiles file={file} setFile={setFile}/>
            <form action="/home">
                <LabeledField ref={ref} label={{children:"Titre :"}} size="small" name="title" type="text"></LabeledField>
                <SelectTheme id="selectTheme" playlists={playlist}></SelectTheme>
                <input id="submit" type="button" value="Valider" onClick={handleSubmit}/>
            </form>
        </StyledAddMusicOrga>
    )
}