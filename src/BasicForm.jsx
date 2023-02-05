import React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";


const formvalidationschrma = yup.object({
  email:yup
  .string()
  .required('fill this email')
  .min(12,'need biggger'),

  password:yup
  .string()
  .required('fill this password')
  .min(8,'need biggger')
  .max(12,'too much'),

}); 

export function BasicForm() {
  const formik = useFormik({
    initialValues:{email:"", password:""},
    validationSchema: formvalidationschrma,
    onSubmit: (values)=>console.log('form values', values)
  })
  return (
    <div>
      <h1>Basic form Validation</h1>
      <br></br>
      <form onSubmit={formik.handleSubmit}>
      
      <input
      name='email'
      type='email'
      placeholder='email'
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       />
      {formik.touched.email && formik.errors.email ? formik.errors.email: null}
      <input
      name='password'
      type='text'
      placeholder='password'
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      
       />
      {formik.touched.password && formik.errors.password ? formik.errors.password: null}
        <button type='submit'>Submit</button>
        <br/>
      <br/>
       values
       <pre>{JSON.stringify(formik.values)}</pre> 
       Error
       <pre>{JSON.stringify(formik.errors)}</pre> 
       Touch
       <pre>{JSON.stringify(formik.touched)}</pre> 
        </form>
    </div>

  );
}
