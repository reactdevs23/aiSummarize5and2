import React from "react";

const PieChart = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 38 38"
      fill="none"
    >
      <path
        d="M19 3.16666C21.0793 3.16666 23.1382 3.5762 25.0592 4.3719C26.9801 5.1676 28.7256 6.33387 30.1959 7.80414C31.6661 9.2744 32.8324 11.0199 33.6281 12.9408C34.4238 14.8618 34.8333 16.9207 34.8333 19M19 3.16666V19M19 3.16666C10.2555 3.16666 3.16667 10.2555 3.16667 19C3.16667 27.7445 10.2555 34.8333 19 34.8333C27.7445 34.8333 34.8333 27.7445 34.8333 19M19 3.16666C27.7445 3.16666 34.8333 10.2555 34.8333 19M34.8333 19L19 19M34.8333 19C34.8333 21.4987 34.242 23.9618 33.1076 26.1882C31.9732 28.4145 30.3281 30.3407 28.3066 31.8094L19 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PieChart;
