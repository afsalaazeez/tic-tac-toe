// ********RoostGPT********
// Test generated by RoostGPT for test react-tic using AI Type Open AI and AI Model gpt-4-1106-preview

// ********RoostGPT********
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Moves from "../../../../components/moves/Moves";

describe("Moves Component", () => {
  test("renders without crashing with empty history", () => {
    const { container } = render(<Moves history={[]} jumpTo={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  test("renders the correct number of move buttons", () => {
    const mockHistory = [
      /* ... mock history data ... */
    ];
    const { container } = render(
      <Moves history={mockHistory} jumpTo={() => {}} />
    );
    expect(container.querySelectorAll("button").length).toBe(
      mockHistory.length
    );
  });

  test("calls jumpTo with the right move index on button click", () => {
    const mockJumpTo = jest.fn();
    const mockHistory = Array(5)
      .fill(null)
      .map((_, move) => ({
        /* Mock history objects */
      }));

    const { container } = render(
      <Moves history={mockHistory} jumpTo={mockJumpTo} />
    );

    // Find all buttons with role="button"
    const buttons = container.querySelectorAll("button");

    // Assuming you want to test the first button, which corresponds to the first move
    const firstButton = buttons[0];
    fireEvent.click(firstButton);

    expect(mockJumpTo).toHaveBeenCalledWith(0);
  });
});
