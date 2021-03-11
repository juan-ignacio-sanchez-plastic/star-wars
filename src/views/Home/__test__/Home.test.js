import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Home from '../Home';

it('should render and unmount Home without crashing', () => {
  const { unmount } = render(<Home />);

  unmount();
});

it('should render Home with the correct content', () => {
  const tree = renderer.create(<Home />).toJSON();

  expect(tree).toMatchSnapshot();
});

window.HTMLMediaElement.prototype.load = () => { };
window.HTMLMediaElement.prototype.play = () => { };
window.HTMLMediaElement.prototype.pause = () => { };
window.HTMLMediaElement.prototype.addTextTrack = () => { };
