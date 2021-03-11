import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import CircularButton from '../CircularButton';

it('should render and unmount CircularButton without crashing', () => {
  const { unmount } = render(<CircularButton />);

  unmount();
});

it('should render CircularButton with the correct content', () => {
  const { getByText } = render(<CircularButton label='▷' />);

  getByText('▷');
});

it('should call the onClick function once when click CircularButton', () => {
  const onClickFunction = jest.fn();
  const { getByText } = render(<CircularButton label='▷' onClick={onClickFunction} />);

  fireEvent.click(getByText('▷'));

  expect(onClickFunction).toHaveBeenCalledTimes(1);
});
