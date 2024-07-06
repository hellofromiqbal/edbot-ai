'use client'

import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { Description, Forum } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/utils/redux/store';
import { setCurrentTabIndex } from '@/utils/redux/reducers/tabIndexValueSlice';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const ContentControllerTabs = () => {
  const dispatch = useDispatch();
  const currentTabIndexValue = useSelector((state: RootState) => state.tabIndexValue.value);
  
  return (
    <Box sx={{ bgcolor: '#222e3a' }}>
      <Tabs value={currentTabIndexValue} onChange={(e, newValue) => dispatch(setCurrentTabIndex(newValue))} aria-label="basic tabs example" variant='fullWidth'>
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
  )
};

export default ContentControllerTabs;
