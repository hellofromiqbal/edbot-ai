'use client'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Description, Forum } from '@mui/icons-material';
import { Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{ minHeight: '100vh', pt: { xs: '8.3rem', md: '8.5rem' } }}
    >
      {value === index && <Box sx={{ height: 145, bgcolor: '#d0e0f9' }}>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PageContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, bgcolor: 'background.paper', zIndex: 1000 }}>
      <CustomTabPanel value={value} index={0}>
        <Typography variant='h1'>Hello</Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <Box sx={{ bgcolor: '#222e3a' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth'>
          <Tab
            icon={<Description />}
            iconPosition="start"
            label="Passage"
            {...a11yProps}
            sx={{
              color: 'white',
              borderTop: '4px solid transparent',
              textTransform: 'capitalize',
              '&.Mui-selected': { color: 'yellow', borderTop: '4px solid rgb(255, 208, 24)' }
            }}
          />
          <Tab
            icon={<Forum />}
            iconPosition="start"
            label="Questions"
            {...a11yProps}
            sx={{
              color: 'white',
              borderTop: '4px solid transparent',
              textTransform: 'capitalize',
              '&.Mui-selected': { color: 'yellow', borderTop: '4px solid rgb(255, 208, 24)' }
            }}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default PageContent;
