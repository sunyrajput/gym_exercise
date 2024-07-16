import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/file.png';

const HeroBanner = () => (
  
  <Box sx={{ mt: { lg: '0', xs: '0' }, ml: { sm: '50px' }, position: 'relative',  p:"10px"}}>
  
   
    <Stack direction={{ xs: 'column', lg: 'row' }} alignItems="center" spacing={2} sx={{ position: 'relative' }}>
      <Box sx={{ zIndex: 1 }} >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          FITNESS FREAK
        </Typography>
       
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
          Sweat, Smile <br />
          And Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
          Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
          <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
        
      </Box>
      <Typography fontWeight={600} color="#de1833" sx={{ opacity: '0.4', display: { lg: 'block', xs: 'none' }, fontSize: '200px', position: 'absolute', top: '83%', left: '50%', transform: 'translateX(-50%)' }}>
          Exercise
        </Typography>
        <Box sx={{ position: 'relative', zIndex: 2, ml: { lg: '-150px', xs: '0' },display:{lg:'block',xs: 'none'} }}>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{ maxWidth: '100%', height: 'auto' ,borderRadius:"20px"}} />
      </Box>
      
    </Stack>
  </Box>
);

export default HeroBanner;


