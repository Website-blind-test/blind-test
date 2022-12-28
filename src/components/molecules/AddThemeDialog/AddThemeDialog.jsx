import React from "react";
import { Dialog } from "@mui/material";
import { StyledAddThemeDialog } from "./style";

export const AddThemeDialog = (props) => {
    return(
            <Dialog open={props.isOpen} sx={{height:"100%"}}>
              <StyledAddThemeDialog>
                    <p className="close" onClick={() => {props.setIsOpen(false)}}>X</p>
                </StyledAddThemeDialog>
            </Dialog>
    )
}