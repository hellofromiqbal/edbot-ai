'use client'

import ContentControllerTabs from "@/components/ContentControllerTabs/ContentControllerTabs";
import MainContent from "@/components/MainContent/MainContent";
import Modal from "@/components/Modal/Modal";
import Navbar from "@/components/Navbar/Navbar";
import { RootState } from "@/utils/redux/store";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function EnglishReadingBasicA1Page() {
  const modalVisibility = useSelector((state: RootState) => state.modalVisibility.visibility);

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      {modalVisibility && <Modal/>}
      <Navbar/>
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, zIndex: 1}}>
        <MainContent />
        <ContentControllerTabs/>
      </Box>
    </Box>
  );
};
