// src/App.tsx

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import WordCard from './components/WordCard';
import { data } from './data/data';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    trackMouse: true,
  });

  return (
    <div className="from-orange-400 select-none to-yellow-300 h-screen w-screen bg-gradient-to-r flex flex-col justify-center items-center">
      <WordCard
        word={data[currentIndex].word}
        translate={data[currentIndex].translate}
        part_of_speech={data[currentIndex].part_of_speech}
        swipeHandlers={swipeHandlers}
        currentIndex={currentIndex + 1}
        lastIndex={data.length}
      />

      <p className="mt-4 text-white">Swipe left or right to navigate</p>
    </div>
  );
};

export default App;
