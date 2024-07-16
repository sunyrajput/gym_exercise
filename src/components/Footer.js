import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import badge from '../assets/images/badge.png';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" >
     <Link to="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src={badge}
        alt="Fitness Freak"
        style={{ width: '500px', margin: 'px 20px', justifySelf: 'center', alignSelf: 'center' }}
      />
    </Link>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px" color="#000000">TAGDE RAHO GROUP💪💪💪</Typography>
  </Box>
);

export default Footer;
