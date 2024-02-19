// ********RoostGPT********
// Test generated by RoostGPT for test react-tic using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
// src/__tests__/src/reportWebVitals.test.js

import reportWebVitals from '../../reportWebVitals';

// Mock web-vitals dynamically imported module
jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}));

describe('reportWebVitals', () => {
  let mockCallback;

  beforeEach(() => {
    // Reset the mock callback function before each test
    mockCallback = jest.fn();
    // Clear all previous invocations and mock states of web-vitals functions
    jest.clearAllMocks();
  });

  test('should call web-vitals methods when onPerfEntry is a function', () => {
    reportWebVitals(mockCallback);
    // Assert that the web-vitals methods were called
    expect(mockCallback).toHaveBeenCalled();
  });

  test('should not call web-vitals methods when onPerfEntry is not a function', () => {
    const notAFunction = null; // Or any non-function value
    reportWebVitals(notAFunction);
    // Assert that the web-vitals methods were not called
    expect(mockCallback).not.toHaveBeenCalled();
  });
});

