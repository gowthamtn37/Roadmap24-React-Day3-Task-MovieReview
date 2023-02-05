import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export function Addmovie() {

  const [title, setTitle] = useState("");
  const [pic, setPic] = useState("");
  const [des, setDes] = useState("");
  const [rat, setRat] = useState("");
  const [tra, setTrailer] = useState(""); 

const navigate = useNavigate();

  const addMovie = async() => {
    const newMovie = { 
      name: title,
      poster: pic,
      summary: des,
      rating: rat,
      trailer: tra,
    };

    console.log(newMovie);

    await fetch("https://63d75fd5afbba6b7c93bed33.mockapi.io/movies",
    { method:'POST',
     body: JSON.stringify(newMovie), 
     headers:{"Content-Type": "application/json",},
    });
    navigate('/movies')
  } 

  return (
    <div>
      <div className='Movie-Add-Form'>
        <br/>
        <TextField label="Name" onChange={(event) => setTitle(event.target.value)} variant="outlined" />
        <TextField label='Poster' onChange={(event) => setPic(event.target.value)} variant="outlined" />
        <TextField label='Summary' onChange={(event) => setDes(event.target.value)} variant="outlined" />
        <TextField label='rating' onChange={(event) => setRat(event.target.value)} variant="outlined" />
        <TextField label='trailer' onChange={(event) => setTrailer(event.target.value)} variant="outlined" />

        {/* <input type='text' placeholder='Name' onChange={(event) => setTitle(event.target.value)}></input>
            <input type='text' placeholder='Poster' onChange={(event) => setPic(event.target.value)}></input>
            <input type='text' placeholder='Summary' onChange={(event) => setDes(event.target.value)}></input>
            <input type='text' placeholder='rating' onChange={(event) => setRat(event.target.value)}></input> */}

        <Button variant="contained" color='success' type='button' onClick={addMovie}>ADD Movie</Button>
      </div><br />
    </div>
  );
}
