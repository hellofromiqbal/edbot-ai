import ContentControllerTabs from "@/components/ContentControllerTabs/ContentControllerTabs";
import MainContent from "@/components/MainContent/MainContent";
import Navbar from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";

export default function EnglishReadingBasicA1Page() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, zIndex: 1000}}>
        <MainContent />
        <ContentControllerTabs/>
      </Box>
    </Box>
  );
};
