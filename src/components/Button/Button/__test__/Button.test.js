import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Button from '../Button';

it('should render and unmount Button without crashing', () => {
  const { unmount } = render(<Button />);

  unmount();
});

it('should render Button with the correct content', () => {
  const { getByText } = render(<Button label='Load more' />);

  getByText('Load more');
});

it('should call the onClick function once when click Button', () => {
  const onClickFunction = jest.fn();
  const { getByText } = render(<Button label='Load more' onClick={onClickFunction} />);

  fireEvent.click(getByText('Load more'));

  expect(onClickFunction).toHaveBeenCalledTimes(1);
});
