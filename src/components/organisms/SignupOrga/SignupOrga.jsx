import { FormField } from "../../molecules/FormField/FormField";
import { Button, Link, Modal, Typography } from "@mui/material";
import './SignupOrga.css'
import { Formik, Form} from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../../store/slices/message"
import { register } from "../../../store/slices/authentication"
import * as Yup from "yup";
import React, { useState, useEffect  } from "react";

export const SignupOrga = () => {

    let navigate = useNavigate();

    const [successful, setSuccessful] = useState(false);
    
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);
  
    const initialValues = {
      first_name: "",
      email: "",
      password: "",
    };


    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
          .test(
            "len",
            "The username must be between 3 and 20 characters.",
            (val) =>
              val &&
              val.toString().length >= 3 &&
              val.toString().length <= 20
          )
          .required("This field is required!"),
        email: Yup.string()
          .email("This is not a valid email.")
          .required("This field is required!"),
        password: Yup.string()
          .test(
            "len",
            "The password must be between 6 and 40 characters.",
            (val) =>
              val &&
              val.toString().length >= 6 &&
              val.toString().length <= 40
          )
          .required("This field is required!"),
      });

      const handleRegister = (formValue) => {
        const { first_name, email, password} = formValue;
    
        setSuccessful(true);
    
        dispatch(register({ first_name, email, password }))
          .unwrap()
          .then(() => {
            navigate("/");
            window.location.reload();
          })
          .catch(() => {
            setSuccessful(false);
          });
      };

    if(successful){
      return <Navigate to="/" />;
    }

    return (
        <>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleRegister} >
        <div id="signupForm">
            <Form >
                <FormField theme label={{children:"Identifiant :"}} name="first_name" type="textarea"> </FormField>
                <FormField theme label={{children:"Adresse mail :"}}  name="email" type="textarea"></FormField>
                <FormField theme label={{children:"Mot de passe :"}}  name="password" type="password"></FormField>
                <Button type="submit" variant="contained" size="large" sx={{borderRadius: 2, marginTop: '2rem', color: '#4E5E94', bgcolor: "#62D9FF", position: 'relative', left: '20%', fontWeight:'bold', display: "flex", justifyContent: 'space-between'}}>S'inscrire</Button>
                <Typography  id='login' sx={{color: "#00FFD1", fontSize: "0.7em", textAlign:'center', marginTop:'1rem'}}><Link href='/' sx={{color: "#00FFD1", textDecoration: "underline"}}>Déjà inscrit ? Connectez vous !</Link></Typography>
            </Form>
        </div>
        </Formik>
        </>
        
    )
}