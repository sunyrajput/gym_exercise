import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css'; // Ensure styles are imported
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} style={{ cursor: 'pointer' }}>
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} style={{ cursor: 'pointer' }}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyPart,bodyParts, setBodyPart }) => {
  console.log('data:', data); // Ensure data is an array of strings or objects with name property

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className="no-scrollbar">
      {data.map((item) => (
        <Box
          key={item.id ||  item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? 
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
           : <ExerciseCard exercise={item} /> }
          
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;


