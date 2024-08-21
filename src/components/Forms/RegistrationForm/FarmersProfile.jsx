import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

const FarmerProfileSchema = Yup.object().shape({
  farmArea: Yup.number().required('Farm Area is required').min(1, 'Farm Area must be greater than 0'),
  cropsGrown: Yup.array().of(Yup.string().required('Crop is required')).min(1, 'At least one crop is required'),
  annualProduction: Yup.number().required('Annual Production is required').min(0, 'Annual Production must be greater than 0'),
});

const FarmerProfileForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      farmArea: '',
      cropsGrown: [''],
      annualProduction: '',
      financialServices: {
        loanGrants: false,
        cropInsurance: false,
      },
      transportationAvailability: false,
      coldStorageAccess: false,
    }}
    validationSchema={FarmerProfileSchema}
    onSubmit={onSubmit}
  >
    {({ errors, touched, values, setFieldValue }) => (
      <Form>
        <h1>Farmer Profile Setup</h1>

        <Field as={TextField} name="farmArea" label="Farm Area (in acres)" fullWidth error={touched.farmArea && !!errors.farmArea} helperText={touched.farmArea && errors.farmArea} />
        <br />
        <br />
        <h4>Crops Grown in last 5 years:</h4>
        <FieldArray name="cropsGrown">
          {({ push, remove }) => (
            <div>
              {values.cropsGrown.map((_, index) => (
                <div className='crops-detail-form' key={index}>
                  <Field as={TextField} name={`cropsGrown[${index}]`} label={`Crop #${index + 1}`} fullWidth error={touched.cropsGrown?.[index] && !!errors.cropsGrown?.[index]} helperText={touched.cropsGrown?.[index] && errors.cropsGrown?.[index]} />
                  <Button type="button" onClick={() => remove(index)}>Remove</Button>
                </div>
              ))}
              <Button type="button" variant='contained' color='secondary' onClick={() => push('')}>Add Crop</Button>
            </div>
          )}
        </FieldArray>
        <br />

        <Field as={TextField} name="annualProduction" label="Annual Production (in tons)" fullWidth error={touched.annualProduction && !!errors.annualProduction} helperText={touched.annualProduction && errors.annualProduction} />
        <br />
        <br />

        <h2>Financial Services:</h2>
        <p><strong><i>(Tick mark the services that are available to you)</i></strong></p>

        <FormControlLabel
          control={
            <Field
              as={Checkbox}
              type="checkbox"
              name="financialServices.loanGrants"
              checked={values.financialServices.loanGrants}
              onChange={() => setFieldValue("financialServices.loanGrants", !values.financialServices.loanGrants)}
            />
          }
          label="Access to Loan and Grants"
        />
        <br />

        <FormControlLabel
          control={
            <Field
              as={Checkbox}
              type="checkbox"
              name="financialServices.cropInsurance"
              checked={values.financialServices.cropInsurance}
              onChange={() => setFieldValue("financialServices.cropInsurance", !values.financialServices.cropInsurance)}
            />
          }
          label="Crop Insurance"
        />
        <br />

        <h2>Other Services:</h2>

        <FormControlLabel
          control={
            <Field
              as={Checkbox}
              type="checkbox"
              name="transportationAvailability"
              checked={values.transportationAvailability}
              onChange={() => setFieldValue("transportationAvailability", !values.transportationAvailability)}
            />
          }
          label="Transportation Availability"
        />
        <br />

        <FormControlLabel
          control={
            <Field
              as={Checkbox}
              type="checkbox"
              name="coldStorageAccess"
              checked={values.coldStorageAccess}
              onChange={() => setFieldValue("coldStorageAccess", !values.coldStorageAccess)}
            />
          }
          label="Access to Cold Storage"
        />
        <br />
        <br />

        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </Form>
    )}
  </Formik>
);

export default FarmerProfileForm;

