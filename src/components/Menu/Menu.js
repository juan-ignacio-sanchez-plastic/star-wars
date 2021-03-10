import React, { useState, useEffect } from 'react';

import { Button, CircularButton } from '../';
import { toggleFullScreen } from '../../helpers';

import './Menu.scss';

const AUDIO = new Audio('https://ht.mobile9.com/download/media/3/starwars-i_sfxzhimi.mp3');

const Menu = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlerFullExperience = () => {
    if (isFullScreen) {
      setIsFullScreen(false);
    } else {
      setIsFullScreen(true);
    }
  }

  const handlerToggleAudio = () => {
    isPlayingAudio ? setIsPlayingAudio(false) : setIsPlayingAudio(true);
  }

  useEffect(() => {
    if (isPlayingAudio) {
      AUDIO.loop = true;
      AUDIO.volume = 0.1;
      AUDIO.currentTime = 0;
      AUDIO.play();
    } else {
      AUDIO.pause();
    }
  }, [isPlayingAudio]);

  useEffect(() => {
    toggleFullScreen();
    isFullScreen ? setIsPlayingAudio(true) : setIsPlayingAudio(false);
  }, [isFullScreen]);

  return (
    <div className='Menu'>
      <label>☰</label>
      <ul>
        <li>
          <Button
            label={isFullScreen ? 'End Full Experience' : 'Full Experience'}
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
