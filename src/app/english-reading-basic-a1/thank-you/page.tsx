import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
      <Typography variant='h1'>THANK YOU</Typography>
      <Link href="/" className="px-3 py-2 bg-black text-white rounded-md">Welcome Page</Link>
    </Box>
  )
};

export default ThankYouPage;