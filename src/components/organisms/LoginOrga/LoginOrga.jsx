import { Button, Link, Modal, Typography } from "@mui/material"
import React, { useState, useEffect  } from "react";
import './LoginOrga.css'
import { Formik, Form} from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../../store/slices/message"
import { login } from "../../../store/slices/authentication"
import { FormField } from "../../molecules/FormField/FormField";
import { useRef } from "react";

export const LoginOrga = () => {

    let navigate = useNavigate();

    const formRef = useRef();


    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true)

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
      };

      const validationSchema = Yup.object().shape({
        email: Yup.string().required("The username is required!"),
        password: Yup.string().required("The password is required!"),
      });

      useEffect(() => {
        dispatch(clearMessage());
      }, [dispatch]);

      const handleLogin = (formValue) => {
        const { email, password } = formValue;

        setLoading(true);
    
        dispatch(login({ email, password }))
          .unwrap()
          .then(() => {
            navigate("/home");
            window.location.reload();
          })
          .catch(() => {
            setLoading(false);
          });
      };

      if (isLoggedIn) {
        return <Navigate to="/home" />;
      }
    
    return (
        <>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin} >
        <div id="loginForm">
            <Form ref={formRef}>
                <FormField label={{children:"Adresse mail :"}} name="email" type="textarea"></FormField>
                <FormField label={{children:"Mot de passe :"}} name="password" type="password" ></FormField>
                <Button type="submit" variant="contained" size="large" sx={{borderRadius: 2, marginTop: '5rem', color: '#4E5E94', bgcolor: "#62D9FF", position: 'relative', left: '16%', fontWeight:'bold'}}>Se connecter</Button>
                <Typography  id='signup' sx={{color: "#00FFD1", fontSize: "0.7em", textAlign:'center', marginTop:'1rem'}}><Link href='/sign-up' sx={{color: "#00FFD1", textDecoration: "underline"}}  >Pas encore inscrit ? Créez un compte</Link></Typography>
                
            </Form>
        </div>
        </Formik>

    </>
    )
}