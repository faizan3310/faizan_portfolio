import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import Cite from 'citation-js'; // Import citation-js library

const CitationPopup = ({ isOpen, onClose, publicationData }) => {
  const [citations, setCitations] = useState([]);

  const generateCitations = () => {
    try {
      const cite = new Cite(publicationData.map(item => ({
        title: item.title,
        author: item.author,
        publisher: item.publisher,
      })));
      const apaCitations = cite.format('bibliography', {
        format: 'html',
        template: 'apa',
      });
      setCitations(Array.isArray(apaCitations) ? apaCitations : [apaCitations]);
    } catch (error) {
      console.error('Error generating citations:', error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Generate Citations</DialogTitle>
      <DialogContent>
        <Button onClick={generateCitations} color="primary">
          Generate
        </Button>
        <div>
          {citations.map((citation, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: citation }} />
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CitationPopup;
