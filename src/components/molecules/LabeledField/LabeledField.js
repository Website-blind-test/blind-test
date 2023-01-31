import { TextField, Typography } from "@mui/material"
import { forwardRef } from "react";
import { useTheme } from "styled-components"
import {StyledLabeledField} from './style.js'


export const LabeledField = forwardRef(({label, ...props}, ref) => {
    const theme = useTheme();

    return (
        <StyledLabeledField >
            <Typography {...label} gutterBottom align="left" ></Typography>
            <TextField {...props} inputRef={ref} sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}} ></TextField>
        </StyledLabeledField>
    )

});