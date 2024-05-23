import React, { useState } from 'react';
import ImageUploader from './Components/ImageUploader';
import TextExtractor from './Components/TextExtractor';
import LanguageSupported from './Components/LanguageSupported'
import './App.css';

const App = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="App">
      <h1 className="text-3xl font-semibold text-gray-500 mb-4 font-serif mt-6">Image Text Separator</h1>
      <ImageUploader onImageUpload={setImage} />
      {image && <TextExtractor image={image} />}
      <LanguageSupported/>
    </div>
  );
};

export default App;
