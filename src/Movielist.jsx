import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Moviecard } from './Moviecard';

export function Movielist({movielist, setMovielist}) {
 

  const [title, setTitle] = useState("");
  const [pic, setPic] = useState("");
  const [des, setDes] = useState("");
  const [rat, setRat] = useState("");

  return (

    <div>
      <h1>MOVIE DASHBOARD</h1> 
      <div className='Movie-Add-Form'>
      <TextField label="Name" onChange={(event) => setTitle(event.target.value)} variant="outlined" />
      <TextField label='Poster' onChange={(event) => setPic(event.target.value)} variant="outlined" />
      <TextField label='Summary' onChange={(event) => setDes(event.target.value)} variant="outlined" />
      <TextField label='rating' onChange={(event) => setRat(event.target.value)} variant="outlined" />

        {/* <input type='text' placeholder='Name' onChange={(event) => setTitle(event.target.value)}></input>
        <input type='text' placeholder='Poster' onChange={(event) => setPic(event.target.value)}></input>
        <input type='text' placeholder='Summary' onChange={(event) => setDes(event.target.value)}></input>
        <input type='text' placeholder='rating' onChange={(event) => setRat(event.target.value)}></input> */}

        <Button variant="contained" color='success' type='submit' onClick={() => {
          const newMovie = {
            name: title,
            poster: pic,
            summary: des,
            rating: rat,
          };
          setMovielist([...movielist, newMovie]);

        }}>ADD Movie</Button>
      </div><br />

      <div className='movie-list'>
        {movielist.map((data,index) => (<Moviecard review={data} id={index} />))}
      </div>
    </div>
  );
}

