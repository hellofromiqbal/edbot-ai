import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import CustomTabPanel from '../CustomTabPanel/CustomTabPanel';
import FontSlider from '../Slider/FontSlider';
import { useSelector } from 'react-redux';
import { RootState } from '@/utils/redux/store';
import questions from '@/data/questions.json';

type MainContentProps = {
  value: number;
};

const MainContent = ({ value }: MainContentProps) => {
  const questionNumber = useSelector((state: RootState) => state.questionNumber.value);

  const currentQuestion = questions[questionNumber];

  if(!currentQuestion) {
    return <Typography>No Question data available</Typography>;
  };

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
            <Typography sx={{ fontSize: '14px' }}>{currentQuestion.question_data.definition}</Typography>
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
            <Typography sx={{ fontWeight: 'bold' }}>{currentQuestion.question_data.question}</Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            px: { xs: 3 , md: 13 },
            pt: 2,
          }}
        >
          {currentQuestion.question_data.options.map((option, index) => (
            <Button key={index} variant='outlined' fullWidth sx={{ minHeight: 55, borderRadius: '10px', display: 'flex', justifyContent: 'start' }}>
              <Typography fontSize='14px' sx={{ fontWeight: 'bold', textTransform: 'initial' }}>{option}</Typography>
            </Button>

          ))}
        </Box>
      </CustomTabPanel>
    </>
  )
};

export default MainContent;