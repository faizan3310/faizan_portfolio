import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Container } from '@material-ui/core';
import ResearchTab from './research_tab';

const MainApp = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isCitationPopupOpen, setIsCitationPopupOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleOpenCitationPopup = () => {
    setIsCitationPopupOpen(true);
  };

  const handleCloseCitationPopup = () => {
    setIsCitationPopupOpen(false);
  };

  return (
    <Container>
      <AppBar position="static">
        <Tabs value={currentTab} onChange={handleTabChange}>
          <Tab label="Research" />
          {/* Add more tabs as needed */}
        </Tabs>
      </AppBar>
      {currentTab === 0 && (
        <ResearchTab openCitationPopup={handleOpenCitationPopup}  />
      )}
      {/* Render other components based on selected tab */}
    </Container>
  );
};

export default MainApp;
