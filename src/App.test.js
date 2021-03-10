import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders and unmount App', () => {
  const { unmount } = render(<App />);
  unmount();
});

window.HTMLMediaElement.prototype.load = () => { };
window.HTMLMediaElement.prototype.play = () => { };
window.HTMLMediaElement.prototype.pause = () => { };
window.HTMLMediaElement.prototype.addTextTrack = () => { };
