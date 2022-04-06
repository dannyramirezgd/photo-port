import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1,
};

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} toggleModal={mockToggleModal} />);
  });
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(
      <Modal currentPhoto={currentPhoto} toggleModal={mockToggleModal} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    //arrange: render modal
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    //act: simulate click event
    fireEvent.click(getByText('Close this modal'))
    //assert: expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
