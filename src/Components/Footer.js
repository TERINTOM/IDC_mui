import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: ' #000000',
        padding: 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="body2" sx={{color:"white"}}>
        Copyright © 2021 IDC and Alteryx. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{color:"#0093D0"}}>
        Privacy Policy | Policy Security
      </Typography>
    </Box>
  );
};

export default Footer;
