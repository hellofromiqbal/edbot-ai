import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import CustomTabPanel from '../CustomTabPanel/CustomTabPanel';
import FontSlider from '../Slider/FontSlider';

type MainContentProps = {
  value: number;
};

const MainContent = ({ value }: MainContentProps) => {
  return (
    <>
      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{
            pt: 2,
            height: 150,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#d0e0f9'
          }}
        >
          <FontSlider/>
          <Paper
            elevation={1}
            sx={{
              p: 1,
              width: '90%',
              minHeight: { xs: 'max-content', md: 100 },
              borderRadius: '10px',
              borderTop: '3px solid #03a9f4',
              position: 'relative',
              top: 30
            }}
          >
            <Typography sx={{ fontSize: '14px' }}>My name is Lisa. I wake up at 7 o'clock every morning. I take a shower and get dressed. Then, I have breakfast with my family. After that, I go to school. I study English and math. I have lunch at 12 o'clock. In the afternoon, I have art class. I go home at 4 o'clock. In the evening, I watch TV and do my homework. I go to bed at 9 o'clock.</Typography>
          </Paper>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box
          sx={{
            py: 2,
            px: 2.5,
            height: 150,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#d0e0f9'
          }}
        >
          <Paper
            elevation={1}
            sx={{
              p: 1,
              width: '100%',
              minHeight: 100,
              borderRadius: '10px',
              borderLeft: '3px solid #03a9f4',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ fontWeight: 'bold' }}>What subjects does Lisa study at school?</Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            px: { xs: 3 , md: 13 },
            pt: 2,
          }}>
          <Button variant='outlined' fullWidth sx={{ minHeight: 55, borderRadius: '10px', display: 'flex', justifyContent: 'start' }}>
            <Typography fontSize='14px' sx={{ fontWeight: 'bold', textTransform: 'initial' }}>Art and English</Typography>
          </Button>
          <Button variant='outlined' fullWidth sx={{ minHeight: 55, borderRadius: '10px', display: 'flex', justifyContent: 'start' }}>
            <Typography fontSize='14px' sx={{ fontWeight: 'bold', textTransform: 'initial' }}>Math and Science</Typography>
          </Button>
          <Button variant='outlined' fullWidth sx={{ minHeight: 55, borderRadius: '10px', display: 'flex', justifyContent: 'start' }}>
            <Typography fontSize='14px' sx={{ fontWeight: 'bold', textTransform: 'initial' }}>History and Art</Typography>
          </Button>
          <Button variant='outlined' fullWidth sx={{ minHeight: 55, borderRadius: '10px', display: 'flex', justifyContent: 'start' }}>
            <Typography fontSize='14px' sx={{ fontWeight: 'bold', textTransform: 'initial' }}>English and Math</Typography>
          </Button>
        </Box>
      </CustomTabPanel>
    </>
  )
};

export default MainContent;