// ********RoostGPT********
// Test generated by RoostGPT for test react-tic using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
// Import testing utilities
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Import the component to test
import Moves from '../../../../src/components/moves/Moves.js';

describe('Moves', () => {
  test('renders without crashing', () => {
    const history = [{}, {}]; // mock history for the purposes of this test
    const { getByText } = render(<Moves history={history} jumpTo={() => {}} />);
    
    expect(getByText('Go to game start')).toBeInTheDocument();
    expect(getByText('Go to move #1')).toBeInTheDocument();
  });

  test('calls jumpTo with correct move number when button is clicked', () => {
    const history = [{}, {}, {}];
    const mockJumpTo = jest.fn();
    const { getByText } = render(<Moves history={history} jumpTo={mockJumpTo} />);
    
    const button = getByText('Go to move #2');
    fireEvent.click(button);
    
    expect(mockJumpTo).toHaveBeenCalledWith(2);
  });

  // You can add more test cases here to cover different scenarios
});


