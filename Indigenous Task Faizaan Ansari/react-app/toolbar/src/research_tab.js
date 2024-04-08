import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import axios from 'axios';
import CitationPopup from './citation';

const ResearchTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCitationPopup, setShowCitationPopup] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://api.gyanibooks.com/search_publication/', {
        keyword: searchQuery,
        limit: 10,
      });
      setSearchResults(response.data.data); // Assuming data is inside a 'data' property
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenCitationPopup = () => {
    setShowCitationPopup(true);
  };

  const handleCloseCitationPopup = () => {
    setShowCitationPopup(false);
  };

  return (
    <div>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {searchResults.length > 0 && (
        <div>
          <Typography variant="h6">Search Results:</Typography>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
          <Button variant="contained" color="secondary" onClick={handleOpenCitationPopup}>
            Generate Citation
          </Button>
        </div>
      )}
      <CitationPopup isOpen={showCitationPopup} onClose={handleCloseCitationPopup} publicationData={searchResults} />
    </div>
  );
};

export default ResearchTab;
