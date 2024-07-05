import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';

const FontSlider = () => {
  return (
    <Box sx={{ width: '85%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <FontDownloadOutlinedIcon sx={{ fontSize: '1.25rem' }}/>
        <Slider
          size="medium"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="off"
          step={50}
          marks
        />
        <FontDownloadOutlinedIcon sx={{ fontSize: '1.5rem' }}/>
      </Box>
    </Box>
  );
};

export default FontSlider;
