import React from 'react';
import { useState } from 'react';
import { Counter } from './Counter';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

export function Moviecard({ review, id, deleteButton }) {

  const sty = { color: review.rating > 8.5 ? 'green' : 'red' };

  const [Show, setShow] = useState(true);
  // const dis = {display: Show? "block":"none" }

  const navigate = useNavigate();
  return (

    <Card className='movie-container'>

      <img className='movie-pose' src={review.poster} alt={review.name} />
    <CardContent>
      <div className='align-spec'>
          <h2 className='movie-name'>{review.name}
          <IconButton color='primary' className='toggle' onClick={() => setShow(!Show)} aria-label="Summary">
            {Show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton color='primary' onClick={() =>navigate(`/movies/${id}`)} aria-label="info">
            <InfoIcon />
          </IconButton>
          </h2>

        <p className='movie-rating' style={sty}>⭐{review.rating}</p>
      </div>
      {/* <Button color="error" className='btn3' onClick={() => setShow(!Show)}>Toggle Summary - {"" + Show}</Button> */}
      
        {Show ? <p className='movie-summary'>{review.summary}</p> : null}
      </CardContent>
      {/* <p className={Show? 'movie-summary-green':'movie-summary-red'} >{review.summary}</p> */}
      <CardActions>
        <Counter />{deleteButton}
      </CardActions>
    </Card>

  );
}
