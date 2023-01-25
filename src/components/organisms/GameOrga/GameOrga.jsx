import { StyledDivImage, StyledDivLabel } from "./style" 

import {FiPlay} from "react-icons/fi";
import { Button, Slider, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { getTrack, playTrack } from "../../../store/slices/track"
import { useEffect } from "react";

export const GameOrga = () => {

    const dispatch = useDispatch();

    const currentTrack = useSelector((state) => state.track);


    return (
        <div>
            <StyledDivImage>        
                <FiPlay size="10em" style={{paddingTop: "15%", color: "white"}}/>
            </StyledDivImage>
            <Slider sx={{width: "80%", marginLeft: "10%", marginRight: "10%"}}/>
            <StyledDivLabel><p>Musique - Facile</p> <p>Musique n'1</p></StyledDivLabel>
            <TextField size="small" sx={{ marginLeft: "25%", marginRight:"25%" ,bgcolor: "white"}} />

            <Button sx={{marginTop: "2em", marginRight: "30%", marginLeft: "40%", bgcolor: "#62D9FF"}}>Valider</Button>
        </div>
    )
}