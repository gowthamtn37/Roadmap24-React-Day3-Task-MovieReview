import React from 'react';
import { Moviecard } from './Moviecard';
import { useEffect,useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from 'react-router-dom';
export function Movielist() {

  const [movielist, setMovielist] = useState([]);

const getMovies=()=>{
    fetch('https://63d75fd5afbba6b7c93bed33.mockapi.io/movies')
    .then((data)=>data.json())
    .then((movie)=> setMovielist(movie));
}

useEffect(()=> getMovies(),[]);  

  const deleteMovie = (id) =>{
      fetch(`https://63d75fd5afbba6b7c93bed33.mockapi.io/movies/${id}`, {method:'DELETE'})
      .then(()=>getMovies());
  };

  const navigate = useNavigate();
  
  return (

<div>
      <div className='movie-list'>
        {movielist.map((data) => (<Moviecard key={data.id} review={data} id={data.id} deleteButton={<IconButton onClick={()=>deleteMovie(data.id)}
         sx={{marginLeft:'auto'}} 
         color="secondary"
         aria-label="delete">
        <DeleteIcon />
      </IconButton>}
      editButton={<IconButton onClick={()=>navigate(`/movies/edit/${data.id}`)}
      sx={{marginLeft:'auto'}} 
      color="primary"
      aria-label="Edit">
     <BorderColorIcon />
    </IconButton>} />))}
      </div>
    </div>
  );
}


