// src/components/TextExtractor.jsx
import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

const TextExtractor = ({ image }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (image) {
      setLoading(true);
      Tesseract.recognize(
        image,
        'eng+hin+spa+fra+ita+jpn+kor+chi_tra',
        {
          logger: (m) => console.log(m),
        }
      ).then(({ data: { text } }) => {
        setText(text);
        setLoading(false);
      });
    }
  }, [image]);

  return (
    <div className="flex justify-center items-center">
  {loading ? (
    <h1 className="text-3xl text-gray-700">Loading...</h1>
  ) : (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Extracted Text</h1>

      <p className="bg-white w-full rounded-3xl shadow-gray-400 shadow-md p-6 text-lg font-semibold mt-5">{text}</p>
    </div>
  )}
</div>

  );
};

export default TextExtractor;
