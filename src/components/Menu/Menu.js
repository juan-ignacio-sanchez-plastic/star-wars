import React, { useState } from 'react';

import { Button, CircularButton } from '../';
import { toggleFullScreen } from '../../helpers';

import './Menu.scss';

const AUDIO = new Audio('https://ht.mobile9.com/download/media/3/starwars-i_sfxzhimi.mp3');

const Menu = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handlerFullExperience = () => {
    AUDIO.loop = true;
    AUDIO.currentTime = 0;
    AUDIO.play();
    toggleFullScreen();
    setIsPlayingAudio(true);
  }

  const handlerToggleAudio = () => {
    if (isPlayingAudio) {
      AUDIO.pause();
      setIsPlayingAudio(false);
    } else {
      AUDIO.play();
      setIsPlayingAudio(true);
    }
  }

  return (
    <div className='Menu'>
      <label>☰</label>
      <ul>
        <li>
          <Button
            label='Full Experience'
            onClick={handlerFullExperience}
            style={{ transform: `scale(0.5)` }}
          />
        </li>
        <li>
          <CircularButton
            label={isPlayingAudio ? '||' : '▷'}
            onClick={handlerToggleAudio}
            style={{ transform: `scale(0.5)` }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Menu;
