// ********RoostGPT********
// Test generated by RoostGPT for test react-test-tic using AI Type Open AI and AI Model gpt-4-turbo-2024-04-09



// ********RoostGPT********
import React from 'react';
import { render, screen } from '@testing-library/react';
import GameInfo from '../../../components/game-info/GameInfo'; // Path adjusted for test directory

describe('GameInfo Component', () => {
  test('displays the correct message when it is player X’s turn and no winner', () => {
    render(<GameInfo xIsNext={true} winner={null} />);
    expect(screen.getByText("It's your turn, player X")).toBeInTheDocument();
  });
  
  test('displays the correct message when it is player O’s turn and no winner', () => {
    render(<GameInfo xIsNext={false} winner={null} />);
    expect(screen.getByText("Now you, player O!")).toBeInTheDocument();
  });

  test('displays winning message for player X', () => {
    render(<GameInfo status="Winner: X" winner={true} xIsNext={false} />);
    expect(screen.getByText("Nice! I won!")).toBeInTheDocument();
  });

  test('displays winning message for player O', () => {
    render(<GameInfo winner={true} xIsNext={true} />);
    expect(screen.getByText("Wohoo! I made it!")).toBeInTheDocument();
  });

  test('renders the correct image for players', () => {
    render(<GameInfo />);
    const playerImage = screen.getByAltText("Player X and Player O");
    expect(playerImage).toBeInTheDocument();
  });
});

