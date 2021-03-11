import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Menu from '../Menu';

it('should render and unmount Menu without crashing', () => {
  const { unmount } = render(<Menu />);

  unmount();
});

it('should render Menu with the correct content', () => {
  const { getByText } = render(<Menu />);

  getByText('☰');
  getByText('Full Experience');
  getByText('▷');
});

describe('should change the buttons label when are clicked', () => {
  it('When full experience button is clicked should change the label of full experience button and play button', () => {
    const { getByText } = render(<Menu />);

    fireEvent.click(getByText('Full Experience'));
    getByText('End Full Experience');
    getByText('||');

    fireEvent.click(getByText('End Full Experience'));
    getByText('Full Experience');
    getByText('▷');
  });

  it('When play button is clicked it should change its label', () => {
    const { getByText } = render(<Menu />);

    fireEvent.click(getByText('▷'));
    getByText('||');

    fireEvent.click(getByText('||'));
    getByText('▷');
  });
});

window.HTMLMediaElement.prototype.load = () => { };
window.HTMLMediaElement.prototype.play = () => { };
window.HTMLMediaElement.prototype.pause = () => { };
window.HTMLMediaElement.prototype.addTextTrack = () => { };
