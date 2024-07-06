import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h1'>WELCOME</Typography>
      <Link href="/english-reading-basic-a1" className="px-3 py-2 bg-black text-white rounded-md">English Reading Basic (A1)</Link>
    </Box>
  );
}
