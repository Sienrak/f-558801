
import React from 'react';

const ClarifaiApp = () => {
  return (
    <div 
      className="clarifai-content" 
      dangerouslySetInnerHTML={{ __html: document.querySelector('.clarifai-content')?.innerHTML || '' }}
    />
  );
};

export default ClarifaiApp;
