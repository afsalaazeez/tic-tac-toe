// ********RoostGPT********
// Test generated by RoostGPT for test react-tic using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
import reportWebVitals from '../../reportWebVitals';

describe('reportWebVitals', () => {
  // Assuming the reportWebVitals function takes a callback
  test('calls callback with metrics when observed', () => {
    const callback = jest.fn();
    const metric = { name: 'FCP', value: 123 }; // Example metric

    // Mock the onCLS, onFID, etc. functions in web-vitals
    jest.mock('web-vitals', () => ({
      onCLS: jest.fn(),
      onFID: jest.fn(),
      onLCP: jest.fn(),
      onTTFB: jest.fn()
    }));
    
    // Run reportWebVitals with the mock callback
    reportWebVitals(callback);

    // Simulate a metric being observed
    window.__WEB_VITALS_POLYFILL_REPORT_HANDLER__(metric);
    
    // Expect the callback to have been called with the metric
    expect(callback).toHaveBeenCalledWith(metric);
  });
  
  test('does not throw when no callback is provided', () => {
    // This test ensures that reportWebVitals doesn't throw an error when it's called without arguments.
    expect(() => reportWebVitals()).not.toThrow();
  });

  // Additional tests can be written here for other scenarios and edge cases
});

