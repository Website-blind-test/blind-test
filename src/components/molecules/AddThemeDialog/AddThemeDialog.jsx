import React from "react";
import { Dialog } from "@mui/material";
import { StyledAddThemeDialog } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylists } from "../../../store/slices/playlist";

export const AddThemeDialog = (props) => {

    const playlists = useSelector((state) => state);
    const dispatch = useDispatch();
    dispatch(getPlaylists())
    .unwrap()
    .then(
        () =>{
            console.log('tarace')
        }
    )

    return(
            <Dialog open={props.isOpen} sx={{height:"100%"}}>
              <StyledAddThemeDialog>
                    <p className="close" onClick={() => {props.setIsOpen(false)}}>X</p>
                    <div>Hello</div>
                </StyledAddThemeDialog>
            </Dialog>
    )
}