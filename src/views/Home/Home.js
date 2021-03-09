import React from 'react';

import logo from '../../assets/images/logo-star-wars.svg';
import { CharacterList, Loading } from '../../components';

import './Home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home__header'>
        <img src={logo} alt='star wars logo' className='Home__header__logo' />
      </div>
      <div className='Home__body'>
        <CharacterList />
      </div>
    </div>
  )
}

export default Home;
