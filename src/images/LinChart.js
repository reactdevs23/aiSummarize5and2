import React from "react";

const LineChart = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 38 38"
      fill="none"
    >
      <path
        d="M33.25 33.25H7.28333C6.39658 33.25 5.95321 33.25 5.61451 33.0774C5.31659 32.9256 5.07437 32.6834 4.92257 32.3855C4.75 32.0468 4.75 31.6034 4.75 30.7167V4.75M31.6667 12.6667L25.4618 19.2892C25.2266 19.5402 25.1091 19.6657 24.9672 19.7305C24.842 19.7878 24.7041 19.8114 24.5669 19.7991C24.4116 19.7851 24.259 19.7058 23.9537 19.5473L18.7963 16.8693C18.491 16.7109 18.3384 16.6316 18.1831 16.6176C18.0459 16.6053 17.908 16.6289 17.7828 16.6861C17.6409 16.751 17.5234 16.8765 17.2882 17.1275L11.0833 23.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LineChart;
