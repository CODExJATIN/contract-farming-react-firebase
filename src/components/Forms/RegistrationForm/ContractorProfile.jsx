import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem } from '@mui/material';



const ContractorProfileSchema = Yup.object().shape({
  companyName: Yup.string().required('Company Name is required'),
  companyAddress: Yup.string().required('Company Address is required'),
  yearsOfExperience: Yup.number().required('Years of Experience is required').min(0, 'Must be greater than or equal to 0'),
  purchaseCapacityMin: Yup.number().required('Min Purchase Capacity is required').min(0, 'Must be greater than or equal to 0'),
  purchaseCapacityMax: Yup.number().required('Max Purchase Capacity is required').min(0, 'Must be greater than or equal to 0'),
  logisticsCapabilities: Yup.string().required('Logistics Capabilities is required'),
});



const ContractorProfileForm = ({ onSubmit }) => (
  <Formik
  initialValues={{
    companyName: '',
    companyAddress: '',
    yearsOfExperience: '',
    purchaseCapacityMin: '',
    purchaseCapacityMax: '',
    logisticsCapabilities: '',
  }}
  validationSchema={ContractorProfileSchema}
  onSubmit={onSubmit}
>
  {({ errors, touched }) => (
    <Form>
      <h1>Contractor Profile Setup</h1>
      <Field as={TextField} name="companyName" label="Company Name" fullWidth error={touched.companyName && !!errors.companyName} helperText={touched.companyName && errors.companyName} />
      <br/>
      <br/>
      <Field as={TextField} name="companyAddress" label="Company Address" fullWidth error={touched.companyAddress && !!errors.companyAddress} helperText={touched.companyAddress && errors.companyAddress} />
      <br/>
      <br/>
      <Field as={TextField} name="yearsOfExperience" label="Years of Experience" fullWidth error={touched.yearsOfExperience && !!errors.yearsOfExperience} helperText={touched.yearsOfExperience && errors.yearsOfExperience} />
      <br/>
      <br/>
      <h4>Purchase Capacity (MIN & MAX) (in tons)</h4>
      <div className='range-purchase'>
      <Field as={TextField} name="purchaseCapacityMin" label="Min Capacity" fullWidth error={touched.purchaseCapacityMin && !!errors.purchaseCapacityMin} helperText={touched.purchaseCapacityMin && errors.purchaseCapacityMin} />
      <Field as={TextField} name="purchaseCapacityMax" label="Max Capacity" fullWidth error={touched.purchaseCapacityMax && !!errors.purchaseCapacityMax} helperText={touched.purchaseCapacityMax && errors.purchaseCapacityMax} />
      </div>
      <br/>

      <Field as={TextField} name="logisticsCapabilities" label="Logistics Capabilities" select fullWidth error={touched.logisticsCapabilities && !!errors.logisticsCapabilities} helperText={touched.logisticsCapabilities && errors.logisticsCapabilities}>
        <MenuItem value="own">Own Transportation Services</MenuItem>
        <MenuItem value="external">External Services</MenuItem>
      </Field>
      <br/>
      <br/>
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Form>
  )}
</Formik>
);

export default ContractorProfileForm;
