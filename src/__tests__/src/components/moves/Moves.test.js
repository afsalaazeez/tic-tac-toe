// ********RoostGPT********
// Test generated by RoostGPT for test react-tic using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Moves from '../../../../components/moves/Moves';

describe('Moves Component', () => {
  test('renders without crashing with empty history', () => {
    const { container } = render(<Moves history={[]} jumpTo={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders the correct number of move buttons', () => {
    const mockHistory = [/* ... mock history data ... */];
    const { getAllByRole } = render(<Moves history={mockHistory} jumpTo={() => {}} />);
    expect(getAllByRole('button').length).toBe(mockHistory.length);
  });

  test('calls jumpTo with the right move index on button click', () => {
    const mockJumpTo = jest.fn();
    const mockHistory = [/* ... mock history data ... */];
    const { getAllByRole } = render(<Moves history={mockHistory} jumpTo={mockJumpTo} />);
    const buttons = getAllByRole('button');

    fireEvent.click(buttons[1]); // Assuming that buttons[1] corresponds to 'Go to move #1'
    expect(mockJumpTo).toHaveBeenCalledWith(1);
  });
});

