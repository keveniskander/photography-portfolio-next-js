export function reportWebVitals(metric) {
    if (metric.label === 'web-vital') {
      console.log(`[Web Vitals] ${metric.name}: ${metric.value}`);
    }
  
    // Example: Send metrics to an analytics service
    // Replace the fetch URL with your own analytics endpoint
    fetch('/analytics', {
      method: 'POST',
      body: JSON.stringify(metric),
      headers: { 'Content-Type': 'application/json' },
    });
  }
  