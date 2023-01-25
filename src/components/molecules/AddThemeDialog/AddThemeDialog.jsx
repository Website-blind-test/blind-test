import React from "react";
import { Dialog } from "@mui/material";
import { StyledAddThemeDialog } from "./style";

export const AddThemeDialog = ({playlists}, props) => {
    const generatePlaylists = () => {
        console.log(playlists)
        if(playlists) {
            return playlists.map((playlist) => {
            return <div>{playlist.categorie_lib}</div>
        })
    }
    }
    return(
            <Dialog open={props.isOpen} sx={{height:"100%"}}>
              <StyledAddThemeDialog>
                    <p className="close" onClick={() => {props.setIsOpen(false)}}>X</p>
                    {generatePlaylists()}
                </StyledAddThemeDialog>
            </Dialog>
    )
}