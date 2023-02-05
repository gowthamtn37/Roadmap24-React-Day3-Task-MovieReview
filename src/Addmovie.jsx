import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik,} from 'formik';
import * as yup from "yup";

const formvalidationschrma = yup.object({
  name:yup
  .string()
  .required('fill this Name'),

  poster:yup
  .string()
  .required('Add this Poster url')
  .min(4)
  .url(),

  summary:yup
  .string()
  .required('fill this Summary')
  .min(20),

  rating:yup
  .number()
  .required('Add this Rating').min(0).max(20),

  trailer:yup
  .string()
  .min(4)
  .required('Add this trailer url')
  .url(),

}); 

export function Addmovie() {

  const{handleSubmit,handleChange,handleBlur, values, errors, touched} = useFormik({
    initialValues:{
      name:"", 
      poster:"", 
      summary:"", 
      rating:"", 
      trailer:""},
    validationSchema: formvalidationschrma,
    onSubmit: (newMovie)=>{
      console.log('form values', values);
      addMovie(newMovie)}
  })

const navigate = useNavigate();

  const addMovie = async(newMovie) => {
 

    await fetch("https://63d75fd5afbba6b7c93bed33.mockapi.io/movies",
    { method:'POST',
     body: JSON.stringify(newMovie), 
     headers:{"Content-Type": "application/json",},
    });
    navigate('/movies')
  } 


  return (
    <div>

      <form onSubmit={handleSubmit} className='Movie-Add-Form'>
      
        <TextField 
        name='name'
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Name" variant="outlined"
        error={errors.name && touched.name}
        helperText={errors.name && touched.name ? errors.name:null } />
        
        <TextField 
        name='poster'
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        label='Poster'  variant="outlined"
        error={errors.poster && touched.poster}
        helperText={errors.poster && touched.poster ? errors.poster:null } />
        
        <TextField 
        name='summary'
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        label='Summary'  variant="outlined"
        error={errors.summary && touched.summary }
        helperText={errors.summary && touched.summary ? errors.summary:null } />
        
        <TextField 
        name='rating'
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        label='rating'  variant="outlined" 
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating ? errors.rating:null }/>
        
        <TextField 
        name='trailer'
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        label='trailer' variant="outlined" 
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer ? errors.trailer:null }/>
        
        {/* <input type='text' placeholder='Name' onChange={(event) => setTitle(event.target.value)}></input>
            <input type='text' placeholder='Poster' onChange={(event) => setPic(event.target.value)}></input>
            <input type='text' placeholder='Summary' onChange={(event) => setDes(event.target.value)}></input>
            <input type='text' placeholder='rating' onChange={(event) => setRat(event.target.value)}></input> */}

        <Button variant="contained" color='success' type='submit'>ADD Movie</Button>
      </form>
      
    </div>
  );
}
