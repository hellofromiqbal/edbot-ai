import React from 'react';
import Box from '@mui/material/Box';
import MainContent from '../MainContent/MainContent';
import ContentControllerTabs from '../ContentControllerTabs/ContentControllerTabs';

const PageContent = () => {
  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, zIndex: 1000}}>
      <MainContent />
      <ContentControllerTabs/>
    </Box>
  );
};

export default PageContent;
