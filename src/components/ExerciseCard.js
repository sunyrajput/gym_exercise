import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }} >
  
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#000000', fontSize: '14px', borderRadius: '10px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#000000', fontSize: '14px', borderRadius: '10px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#fa4700" fontWeight="bold"  sx={{ fontSize: { lg: '24px', xs: '20px' }}} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;

