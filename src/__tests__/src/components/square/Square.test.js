// ********RoostGPT********
// Test generated by RoostGPT for test react-tic using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Square from '../../../src/components/square/Square';

describe('Square component tests', () => {
  test('renders the Square component with a number value', () => {
    // Setup: The props to be passed to Square component
    const value = 'X';
    const mockOnClick = jest.fn();

    // Action: Render the Square component with the passed props
    render(<Square value={value} onClick={mockOnClick} />);

    // Assertion: The button should have the 'square' class and display the value
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('square');
    expect(buttonElement).toHaveTextContent(value);
  });

  test('calls the onClick callback when the Square component is clicked', () => {
    // Setup
    const value = 'X';
    const mockOnClick = jest.fn();
    render(<Square value={value} onClick={mockOnClick} />);

    // Action: Simulate a user clicking the button
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    // Assertion: The mockOnClick function should be called once
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

