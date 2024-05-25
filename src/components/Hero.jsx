import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faSearch } from '@fortawesome/fontawesome-free-solid';
import Card from './Card';
import TinyCard from './TinyCard';
import up from '../assets/up.svg';
import down from '../assets/down.svg';
import axios from 'axios';

function Hero() {
  const [startIndex, setStartIndex] = useState(0);
  const [text, setText] = useState('');

  const handlePrevClick = () => {
    setStartIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNextClick = () => {
    setStartIndex(prevIndex => (prevIndex + 1) % cards.length);
  };

  const visibleCards = 3;

  const searchPokemon = async () => {
    if (!text) return;
    try {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
      console.log(result);
      const id = result?.data.id;
      setStartIndex(id - 1);
    } catch (err) {
      console.log(err);
    }
  };

  const cards = Array.from({ length: 600 }, (_, index) => ({ id: index + 1 }));

  // Calculate the index of the middle card
  const middleIndex = Math.floor(visibleCards / 2);

  return (
    <div className='w-full h-screen bg-slate-800 grid text-center'>
      <div className='my-8 flex justify-center items-center'>
        <input
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Search'
          className='p-2 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-500 w-80 max-w-md mr-3'
        />
        <FontAwesomeIcon icon={faSearch} className='text-slate-300 cursor-pointer' onClick={searchPokemon} />
      </div>
      {/* <div className='flex justify-center items-center animate-bounce'>
        <img src={up} className='h-14 w-14' alt='up' />
      </div> */}
      <div className='grid grid-cols-12 items-center text-center'>
        <div className='col-span-1'>
          <button className='bg-purple-300 rounded-full p-1 h-9 w-9' onClick={handlePrevClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className='col-span-10'>
          <div className='flex justify-center gap-8 items-center my-2'>
            {[...Array(visibleCards)].map((_, index) => {
              const cardIndex = (startIndex + index - middleIndex + cards.length) % cards.length;
              const card = cards[cardIndex];
              return (
                <div key={card.id} className='transform 0.3s ease-in-out flex-none'>
                  {index === middleIndex ? <Card id={card.id} /> : <TinyCard id={card.id} />}
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-span-1'>
          <button className='bg-purple-300 rounded-full p-1 h-9 w-9' onClick={handleNextClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      {/* <div className='flex justify-center items-center animate-bounce'>
        <img src={down} className='h-14 w-14' alt='down' />
      </div> */}
    </div>
  );
}

export default Hero;
