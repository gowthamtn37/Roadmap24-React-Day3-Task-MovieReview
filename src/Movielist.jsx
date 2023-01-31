import React from 'react';
import { Moviecard } from './Moviecard';
import { useEffect,useState } from 'react';

export function Movielist() {

  const [movielist, setMovielist] = useState([]);
  useEffect(()=>{
    fetch('https://63d75fd5afbba6b7c93bed33.mockapi.io/movies')
    .then((data)=>data.json())
    .then((movie)=> setMovielist(movie));
  },[])
  
  return (

<div>
      <div className='movie-list'>
        {movielist.map((data) => (<Moviecard key={data.id} review={data} id={data.id} />))}
      </div>
    </div>
  );
}


