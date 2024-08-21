import React, {useState} from 'react'
import './LoginForm.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem } from '@mui/material';

import { auth } from '../../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

const LoginForm = () => {

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
      });


  return (
    <div className="main">
        <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" ><path fill="currentColor" d="m24.251 21.37l2.194 1.462A1 1 0 0 0 27.8 22.6l3-4l-1.6-1.2l-2.433 3.244l-2.212-1.476a1 1 0 0 0-1.369.25L20 23.879V16h-2v10a2 2 0 0 0 2 2h10v-2h-9.057zM2 21h14v2H2zm0 5h14v2H2zm9-10v-5h1a4.005 4.005 0 0 0 4-4V4h-3a3.98 3.98 0 0 0-2.747 1.107A6 6 0 0 0 5 2H2v3a6.007 6.007 0 0 0 6 6h1v5H2v2h14v-2zm2-10h1v1a2 2 0 0 1-2 2h-1V8a2 2 0 0 1 2-2M8 9a4.005 4.005 0 0 1-4-4V4h1a4.005 4.005 0 0 1 4 4v1z"/></svg>
            <h2>AgriTrade</h2>
        </div>
        <div className="login">
            <h1>Login</h1>
            <br/>
            <br/>

            <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={LoginSchema}
    onSubmit={async (values) => {
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        toast.success('Logged in successfully!!!');
      } catch (error) {
        console.error(error.message);
        toast.error('Login failed! Please check your email and password.');
      }
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field
          as={TextField}
          name="email"
          label="Email"
          fullWidth
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />
        <br />
        <br />
        <Field
          as={TextField}
          name="password"
          label="Password"
          type="password"
          fullWidth
          error={touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Form>
    )}
  </Formik>
  <br/>
  <br/>
   <p className='dont-have-ac'><i>Don't have an account? </i><a>SignUp</a></p>
        </div>
    </div>
  )
}

export default LoginForm;
