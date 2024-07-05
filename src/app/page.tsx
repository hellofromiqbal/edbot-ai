import Navbar from "@/components/Navbar/Navbar";
import PageContent from "@/components/PageContent/PageContent";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <PageContent />
    </Box>
  );
}
