import React from 'react';
import { render } from '@testing-library/react';

import Home from '../Home';

it('should render and unmount Home without crashing', () => {
  const { unmount } = render(<Home />);

  unmount();
});

it('should render Home with the correct content', () => {
  const { getByAltText } = render(<Home />);

  getByAltText('star wars logo');
});

window.HTMLMediaElement.prototype.load = () => { };
window.HTMLMediaElement.prototype.play = () => { };
window.HTMLMediaElement.prototype.pause = () => { };
window.HTMLMediaElement.prototype.addTextTrack = () => { };
