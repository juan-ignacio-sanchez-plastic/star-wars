import React from 'react';

import logo from '../../assets/images/logo-star-wars.svg';
import { CharacterList, Menu } from '../../components';

import './Home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home__header'>
        <Menu />
      </div>
      <div className='Home__body'>
        <img src={logo} alt='star wars logo' className='Home__body__logo' />
        <CharacterList />
      </div>
    </div>
  )
}

export default Home;
