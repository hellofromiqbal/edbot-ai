'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MainContent from '../MainContent/MainContent';
import ContentControllerTabs from '../ContentControllerTabs/ContentControllerTabs';

const PageContent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, zIndex: 1000}}>
      <MainContent value={value} />
      <ContentControllerTabs value={value} handleChange={handleChange}/>
    </Box>
  );
};

export default PageContent;
