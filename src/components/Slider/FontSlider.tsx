'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/utils/redux/store';
import { setFontSize } from '@/utils/redux/reducers/passageFontSizeSlice';

const FontSlider = () => {
  const dispatch = useDispatch();
  const fontSize = useSelector((state: RootState) => state.passageFontSize.value);

  const handleChange = (e: Event, newValue: number | number[]) => {
    dispatch(setFontSize(newValue as number));
  };

  const sliderValue = fontSize === 18 ? 100 : fontSize === 16 ? 50 : 0;

  return (
    <Box sx={{ width: '85%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <FontDownloadOutlinedIcon sx={{ fontSize: '1.25rem' }}/>
        <Slider
          size="medium"
          value={sliderValue}
          onChange={handleChange}
          aria-label="Font Size"
          valueLabelDisplay="off"
          step={50}
          min={0}
          max={100}
          marks
        />
        <FontDownloadOutlinedIcon sx={{ fontSize: '1.5rem' }}/>
      </Box>
    </Box>
  );
};

export default FontSlider;
