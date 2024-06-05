// ********RoostGPT********
// Test generated by RoostGPT for test react-test-tic using AI Type Open AI and AI Model gpt-4-turbo-2024-04-09



// ********RoostGPT********
// Importing necessary libraries
import { render, screen } from '@testing-library/react';
import GameInfo from '../src/components/GameInfo';

// Test suite for GameInfo component
describe('GameInfo Component Tests', () => {

  // Test case to check if the GameInfo component renders with default props
  test('renders with default props', () => {
    render(<GameInfo />);
    const titleElement = screen.getByText('Default Game');
    const descriptionElement = screen.getByText('No description available');
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  // Test case to check if the GameInfo component renders with provided props
  test('renders with provided props', () => {
    const customProps = {
      title: 'Custom Game Title',
      description: 'Custom game description here.'
    };
    render(<GameInfo {...customProps} />);
    const titleElement = screen.getByText(customProps.title);
    const descriptionElement = screen.getByText(customProps.description);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

});

