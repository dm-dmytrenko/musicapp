import React from 'react';
import { Box } from '@mui/system';
import * as s from '../AboutUs.styles';

const AboutUsSectionWrapper = ({ children }) => (
  <Box sx={s.sectionContainerStyles}>
    {children}
  </Box>
);

export default AboutUsSectionWrapper;
