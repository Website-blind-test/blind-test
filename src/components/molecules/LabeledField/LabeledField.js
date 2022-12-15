import { TextField, Typography } from "@mui/material"
import { useTheme } from "styled-components"
import {StyledLabeledField} from './style.js'


export const LabeledField = ({label, ...props}) => {
    const theme = useTheme();

    return (
        <StyledLabeledField >
            <Typography {...label} gutterBottom align="left" ></Typography>
            <TextField {...props}></TextField>
        </StyledLabeledField>
    )

}