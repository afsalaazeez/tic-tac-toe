// ********RoostGPT********
// Test generated by RoostGPT for test react using AI Type Open AI and AI Model gpt-4o



// ********RoostGPT********
// __tests__/src/reportWebVitals.test.js

import reportWebVitals from '../../src/reportWebVitals';

describe('reportWebVitals', () => {
  beforeAll(() => {
    // Mock the dynamic import
    jest.mock('web-vitals', () => ({
      getCLS: jest.fn(),
      getFID: jest.fn(),
      getFCP: jest.fn(),
      getLCP: jest.fn(),
      getTTFB: jest.fn(),
    }));
  });

  afterAll(() => {
    jest.unmock('web-vitals');
  });

  test('calls web vitals metrics when onPerfEntry is a function', async () => {
    const onPerfEntry = jest.fn();
    await reportWebVitals(onPerfEntry);

    const webVitals = await import('web-vitals');
    expect(webVitals.getCLS).toHaveBeenCalledWith(onPerfEntry);
    expect(webVitals.getFID).toHaveBeenCalledWith(onPerfEntry);
    expect(webVitals.getFCP).toHaveBeenCalledWith(onPerfEntry);
    expect(webVitals.getLCP).toHaveBeenCalledWith(onPerfEntry);
    expect(webVitals.getTTFB).toHaveBeenCalledWith(onPerfEntry);
  });

  test('does not call web vitals metrics when onPerfEntry is not a function', async () => {
    const webVitals = await import('web-vitals');

    reportWebVitals(null);
    expect(webVitals.getCLS).not.toHaveBeenCalled();
    expect(webVitals.getFID).not.toHaveBeenCalled();
    expect(webVitals.getFCP).not.toHaveBeenCalled();
    expect(webVitals.getLCP).not.toHaveBeenCalled();
    expect(webVitals.getTTFB).not.toHaveBeenCalled();
  });
});

