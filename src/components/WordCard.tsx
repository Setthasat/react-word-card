import React from 'react';
import { WordData } from '../data/data';

interface WordCardProps extends WordData {
  swipeHandlers: any;
  currentIndex: number;
  lastIndex: number;
}

const WordCard: React.FC<WordCardProps> = ({ word, translate, part_of_speech, swipeHandlers, currentIndex, lastIndex }) => {
  return (
    <div {...swipeHandlers} className="p-4 bg-white w-[25rem] h-[25rem] rounded shadow-md m-2">
      <div className="flex gap-2 mt-[2rem] m-[1rem]">
        <h2 className="text-xl font-bold text-[3.5rem]">{word}</h2>
        <p className="text-sm italic text-gray-500 text-[2rem]">({part_of_speech})</p>
      </div>
      <p className="text-sm text-gray-600 mt-[4rem] text-[4rem] m-[1.5rem]">{translate}</p>
      <div className="flex-col mt-[8rem]">
        <div className="flex justify-center items-cecnter mb-2">{currentIndex} / {lastIndex}</div>
        <div className="flex justify-between items-center border-t border-black pt-2 mx-4 text-[2rem]">
          <p>{'<'}</p>
          <p>Swipe</p>
          <p>{'>'}</p>
        </div>
      </div>
    </div>
  );
};

export default WordCard;
