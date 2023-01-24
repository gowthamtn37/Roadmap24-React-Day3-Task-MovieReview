import React from 'react';
import { useState } from 'react';
import { Counter } from './Counter';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export function Review({ review }) {

  const sty = { color: review.rating > 8.5 ? 'green' : 'red' };

  const [Show, setShow] = useState(true);
  // const dis = {display: Show? "block":"none" }
  return (

    <Card className='movie-container'>

      <img className='movie-pose' src={review.poster} alt={review.name} />
    <CardContent>
      <div className='align-spec'>
          <h2 className='movie-name'>{review.name}
          <IconButton color='primary' className='toggle' onClick={() => setShow(!Show)} aria-label="Summary">
            {Show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          </h2>

        <p className='movie-rating' style={sty}>⭐{review.rating}</p>
      </div>
      {/* <Button color="error" className='btn3' onClick={() => setShow(!Show)}>Toggle Summary - {"" + Show}</Button> */}
      
        {Show ? <p className='movie-summary'>{review.summary}</p> : null}
      </CardContent>
      {/* <p className={Show? 'movie-summary-green':'movie-summary-red'} >{review.summary}</p> */}
      <CardActions>
        <Counter />
      </CardActions>
    </Card>

  );
}
