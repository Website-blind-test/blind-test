import { TextField, Typography } from "@mui/material"
import { useTheme } from "styled-components"
import {StyledLabeledField} from './style.js'


export const LabeledField = ({label, ...props}) => {
    const theme = useTheme();

    return (
        <StyledLabeledField >
            <Typography {...label} gutterBottom align="left" ></Typography>
            <TextField {...props} sx={{borderRadius: 2, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem'}} ></TextField>
        </StyledLabeledField>
    )

}