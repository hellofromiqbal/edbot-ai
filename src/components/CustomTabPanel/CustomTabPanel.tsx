import React from 'react';
import { Box } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{
        minHeight: '100vh',
        bgcolor: '#f8f7fc'
      }}
    >
      {value === index &&
        <Box sx={{ pt: '8.3rem' }}>
          {children}
        </Box>}
    </Box>
  );
};

export default CustomTabPanel;
