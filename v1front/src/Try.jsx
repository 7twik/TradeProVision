import React, { useState } from 'react';
import { createChart } from 'lightweight-charts';

const ChartComponent = () => {
  const [showCandlestick, setShowCandlestick] = useState(false);
  const [showBar, setShowBar] = useState(false);

  const containerRef = React.useRef(null);

  // Function to create and render the chart based on state
  const renderChart = () => {
    const chart = createChart(containerRef.current, { width: 800, height: 400 });

    if (showCandlestick) {
      const candlestickSeries = chart.addCandlestickSeries();
      // Add candlestick data to the series
      // Replace this with your actual candlestick data
      candlestickSeries.setData([
        { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
        { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
        { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
        { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
        { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
        { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
        { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
        { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
        { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
        { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
    ]);
    }

    if (showBar) {
      const barSeries = chart.addBarSeries();
      // Add bar data to the series
      // Replace this with your actual bar data
      const data = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];

        barSeries.setData(data);
    }
  };

  // Handle toggle for Candlestick chart
  const handleToggleCandlestick = () => {
    setShowCandlestick(!showCandlestick);
  };

  // Handle toggle for Bar chart
  const handleToggleBar = () => {
    setShowBar(!showBar);
  };

  // useEffect to re-render the chart when state changes
  React.useEffect(() => {
    if (containerRef.current) {
      // Clear the container before re-rendering
      containerRef.current.innerHTML = '';
      renderChart();
    }
  }, [showCandlestick, showBar]);

  return (
    <div>
      <div>
        <button onClick={handleToggleCandlestick}>
          {showCandlestick ? 'Hide Candlestick Chart' : 'Show Candlestick Chart'}
        </button>
        <button onClick={handleToggleBar}>
          {showBar ? 'Hide Bar Chart' : 'Show Bar Chart'}
        </button>
      </div>
      <div ref={containerRef}></div>
    </div>
  );
};

export default ChartComponent;
