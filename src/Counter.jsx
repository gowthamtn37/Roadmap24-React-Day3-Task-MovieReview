import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


export function Counter() {
  const [Like, setLike] = useState(0);
  const [Dislike, setDislike] = useState(0);

  return (
    <div className='cnt-btn'>


     <IconButton color='secondary' onClick={() => setLike(Like + 1)} aria-label="like" >
     <Badge badgeContent={Like} 
      color="success">
        💖
     </Badge>
     </IconButton>

    <IconButton color='secondary' onClick={() => setDislike(Dislike + 1)} aria-label="dislike" >
  <Badge badgeContent={Dislike} 
  color="error">
    💔
  </Badge>
  </IconButton>

    </div>
  );
}
