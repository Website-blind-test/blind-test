import { TextField, Typography } from "@mui/material"
import { Field, ErrorMessage } from "formik";
import { useTheme } from "styled-components"
import {StyledFormField} from './style.js'


export const FormField = ({label, ...props}) => {
    const theme = useTheme();

    return (
        <StyledFormField >
            <Typography {...label} gutterBottom align="left" ></Typography>
            <Field name={props.name} type={props.type} className="form-control" style={{borderRadius: 7, bgcolor: 'background.paper', position: 'relative', bottom: '0.5rem', height: '50px', width: '100%', fontSize: '20px'}}/>
            <ErrorMessage name={props.name} component="div" className="alert alert-danger" />
        </StyledFormField>
    )

}