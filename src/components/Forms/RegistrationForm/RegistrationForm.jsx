import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem, RadioGroup, FormControlLabel, Radio} from '@mui/material';

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  birthDate: Yup.date().required('Birth Date is required'),
  phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Phone number is not valid').required('Phone Number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6,'Password must be atleast 6 characters long'),
  addressLine: Yup.string().required('Address Line is required'),
  villageCityName: Yup.string().required('Village/City Name is required'),
  state: Yup.string().required('State is required'),
  district: Yup.string().required('District is required'),
  pincode: Yup.string().matches(/^[0-9]{6}$/, 'Pincode is not valid').required('Pincode is required'),
  gender: Yup.string().required('Gender is required'),
  accountType: Yup.string().required('Account Type is required'),
  profilePhoto: Yup.mixed().nullable(),
});


const RegistrationForm = ({onSubmit}) => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      birthDate: '',
      phoneNumber: '',
      email: '',
      password:'',
      addressLine: '',
      villageCityName: '',
      state: '',
      district: '',
      pincode: '',
      gender: '',
      profilePhoto: null,
      accountType: '',
    }}
    validationSchema={RegistrationSchema}
    onSubmit= {onSubmit}
  >
    {({ setFieldValue, errors, touched }) => (   
      <Form>
        <h1>SignUp</h1>
        <Field as={TextField} name="firstName" label="First Name" fullWidth error={touched.firstName && !!errors.firstName} helperText={touched.firstName && errors.firstName} />
        <br/>
        <br/>
        <Field as={TextField} name="lastName" label="Last Name" fullWidth error={touched.lastName && !!errors.lastName} helperText={touched.lastName && errors.lastName} />
        <br/>
        <br/>
        <Field as={TextField} name="birthDate" label="Birth Date" type="date" InputLabelProps={{ shrink: true }} fullWidth error={touched.birthDate && !!errors.birthDate} helperText={touched.birthDate && errors.birthDate} />
        <br/>
        <br/>
        <Field as={TextField} name="phoneNumber" label="Phone Number" fullWidth error={touched.phoneNumber && !!errors.phoneNumber} helperText={touched.phoneNumber && errors.phoneNumber} />
        <br/>
        <br/>
        <Field as={TextField} name="email" label="Email" fullWidth error={touched.email && !!errors.email} helperText={touched.email && errors.email} />
        <br/>
        <br/>
        <Field
          as={TextField} name="password" label="Password" type="password" fullWidth
          error={touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />
        <br/>
        <br/>
        <Field as={TextField} name="addressLine" label="Address Line" fullWidth error={touched.addressLine && !!errors.addressLine} helperText={touched.addressLine && errors.addressLine} />
        <br/>
        <br/>
        <Field as={TextField} name="villageCityName" label="Village/City Name" fullWidth error={touched.villageCityName && !!errors.villageCityName} helperText={touched.villageCityName && errors.villageCityName} />
        <br/>
        <br/>
        <Field as={TextField} name="state" label="State" fullWidth error={touched.state && !!errors.state} helperText={touched.state && errors.state} />
        <br/>
        <br/>
        <Field as={TextField} name="district" label="District" fullWidth error={touched.district && !!errors.district} helperText={touched.district && errors.district} />
        <br/>
        <br/>
        <Field as={TextField} name="pincode" label="Pincode" fullWidth error={touched.pincode && !!errors.pincode} helperText={touched.pincode && errors.pincode} />
        <br/>
        <br/>
        
        <Field as={RadioGroup} name="gender">
          <h4 className='gender-title'>Gender:</h4>
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </Field>
        <br/>
        <br/>
        <Button variant="contained" component="label">
          Upload Profile Photo
          <input type="file" hidden onChange={(event) => setFieldValue("profilePhoto", event.currentTarget.files[0])} />
        </Button>
        <br/>
        <br/>
        <Field as={TextField} name="accountType" label="Account Type" select fullWidth error={touched.accountType && !!errors.accountType} helperText={touched.accountType && errors.accountType}>
          <MenuItem value="farmer">Farmer</MenuItem>
          <MenuItem value="contractor">Contractor</MenuItem>
        </Field>
        <br/>
        <br/>
        <Button type="submit" variant="contained" color="primary">Next</Button>
      </Form>
    )}
  </Formik>
);

export default RegistrationForm;
