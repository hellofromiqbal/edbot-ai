'use client'

import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomTabPanel from '../CustomTabPanel/CustomTabPanel';
import FontSlider from '../Slider/FontSlider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/utils/redux/store';
import { incrementProgressValue, resetProgressValue } from '@/utils/redux/reducers/progressValueSlice';
import { incrementQuestionNumber, resetQuestionNumber } from '@/utils/redux/reducers/questionNumberSlice';
import questions from '@/data/questions.json';
import { setCurrentTabIndex } from '@/utils/redux/reducers/tabIndexValueSlice';
import { useRouter } from 'next/navigation';

const MainContent = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const currentFontSize = useSelector((state: RootState) => state.passageFontSize.value);
  
  const currentTabIndexValue = useSelector((state: RootState) => state.tabIndexValue.value);

  const [state, setState] = useState({
    selectedOption: '',
    answerCorrectly: false,
    showResult: false
  });

  const questionNumber = useSelector((state: RootState) => state.questionNumber.value);

  const currentQuestion = questions[questionNumber];

  if(!currentQuestion) {
    router.push("/english-reading-basic-a1/thank-you");
    dispatch(resetProgressValue());
    dispatch(resetQuestionNumber());
    return;
  };

  const handleClickOption = (option: string, answer: string) => {
    dispatch(incrementProgressValue());
    if(option === answer) {
      setState({...state, selectedOption: option, answerCorrectly: true, showResult: true});
      return;
    } else {
      setState({...state, selectedOption: option, answerCorrectly: false, showResult: true});
      return;
    };
  };

  const handleClickContinue = () => {
    dispatch(incrementQuestionNumber());
    setState({...state, selectedOption: '', answerCorrectly: false, showResult: false});
    dispatch(setCurrentTabIndex(0));
  };

  return (
    <>
      <CustomTabPanel value={currentTabIndexValue} index={0}>
        <Box sx={{ pt: 2, height: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#d0e0f9'}}>
          <FontSlider/>
          <Paper elevation={1} sx={{ p: 1, width: '90%', minHeight: { xs: 'max-content', md: 100 }, borderRadius: '10px', borderTop: '3px solid #03a9f4', position: 'relative', top: 30 }}>
            <Typography sx={{ fontSize: `${currentFontSize}px` }}>
              {currentQuestion.question_data.passage}
            </Typography>
          </Paper>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={currentTabIndexValue} index={1}>
        <Box sx={{ py: 2, px: 2.5, height: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#d0e0f9' }}>
          <Paper elevation={1} sx={{ p: 1, width: '100%', minHeight: 100, borderRadius: '10px', borderLeft: '3px solid #03a9f4', display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 'bold' }}>
              {currentQuestion.question_data.question}
            </Typography>
          </Paper>
        </Box>
        {state.showResult ?
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, px: { xs: 3 , md: 13 }, pt: 2 }}>
            <Button variant='contained' fullWidth sx={{ bgcolor: state.answerCorrectly ? '#4caf50' : '#f44336', minHeight: 55, borderRadius: '10px', display: 'flex', justifyContent: 'start', ':hover': { bgcolor: state.answerCorrectly ? '#2e7d32' : '#d32f2f' } }}>
              <Typography fontSize='14px' sx={{ fontWeight: 'bold', textTransform: 'initial' }}>
                {state.selectedOption}
              </Typography>
            </Button>
            <Paper elevation={1} sx={{ height: 150, p: 1, borderRadius: '10px', mt: '6rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant='h5' sx={{ color: '#4caf50' }}>{state.answerCorrectly ? 'Excellent!' : 'Try again!'}</Typography>
              </Box>
              <Button size='medium' variant='contained' fullWidth sx={{ bgcolor: '#4caf50', py: 1, px: 3, width: 'max-content', fontSize: '14px', textTransform: 'inherit',  borderRadius: '10px', ':hover': { bgcolor: '#2e7d32' } }} onClick={handleClickContinue}>
                Continue
              </Button>
            </Paper>
          </Box>
          :
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, px: { xs: 3 , md: 13 }, pt: 2 }}>
            {currentQuestion.question_data.options.map((option, index) => (
              <Button key={index} variant='outlined' fullWidth sx={{ minHeight: 55, borderRadius: '10px', display: 'flex', justifyContent: 'start' }} onClick={() => handleClickOption(option, currentQuestion.question_data.answer)}>
                <Typography fontSize='14px' sx={{ fontWeight: 'bold', textTransform: 'initial' }}>{option}</Typography>
              </Button>
            ))}
          </Box>
        }
      </CustomTabPanel>
    </>
  )
};

export default MainContent;