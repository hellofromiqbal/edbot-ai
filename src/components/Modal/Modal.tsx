'use client'

import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setModalVisibility } from '@/utils/redux/reducers/modalVisibilitySlice';
import { RootState } from '@/utils/redux/store';
import { useRouter } from 'next/navigation';
import { setCurrentTabIndex } from '@/utils/redux/reducers/tabIndexValueSlice';
import { resetProgressValue } from '@/utils/redux/reducers/progressValueSlice';
import { resetQuestionNumber } from '@/utils/redux/reducers/questionNumberSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const handleExit = () => {
    dispatch(resetProgressValue());
    dispatch(resetQuestionNumber());
    dispatch(setCurrentTabIndex(0));
    dispatch(setModalVisibility({ visibility: false, type: '' }))
    router.push("/");
  };

  const type = useSelector((state: RootState) => state.modalVisibility.type);

  if(type === 'close-confirmation') {
    return (
      <Box sx={{ width: '100%', height: '100vh', position: 'absolute', bgcolor: 'rgba(0, 0, 0, .5)', zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper elevation={4} sx={{ height: 'max-content', width: 'max-content', p: 2, bgcolor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-between' }}>
          <Typography sx={{ textAlign: 'center' }}>Do you want to exit?</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button disableElevation variant="contained" sx={{ bgcolor: '#4caf50', ':hover': { bgcolor: '#2e7d32' }, width: '100%', borderRadius: '10px' }} onClick={() => dispatch(setModalVisibility({ visibility: false, type: '' }))}>Stay</Button>
            <Button disableElevation variant="contained" sx={{ color: '#4caf50', bgcolor: 'transparent', ':hover': { bgcolor: '#eee' }, width: '100%', borderRadius: '10px' }} onClick={handleExit}>Exit</Button>
          </Box>
        </Paper>
      </Box>
    )
  } else if('info') {
    return (
      <Box sx={{ width: '100%', height: '100vh', position: 'absolute', bgcolor: 'rgba(0, 0, 0, .5)', zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper elevation={4} sx={{ height: 350, width: '45%', p: 4, bgcolor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, facere sit praesentium tenetur perferendis et minus unde velit ab consequatur!</Typography>
          <Button disableElevation variant="contained" sx={{ color: '#4caf50', bgcolor: 'transparent', ':hover': { bgcolor: '#eee' }, width: '100%' }} onClick={() => dispatch(setModalVisibility({ visibility: false, type: '' }))}>Close</Button>
        </Paper>
      </Box>
    )
  };
};

export default Modal;