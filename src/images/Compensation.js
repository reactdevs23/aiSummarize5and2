import React from "react";

const Compensation = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        d="M10.7108 6.61189C10.2577 6.93496 9.7031 7.125 9.10415 7.125C7.57386 7.125 6.33331 5.88445 6.33331 4.35417C6.33331 2.82388 7.57386 1.58333 9.10415 1.58333C10.0961 1.58333 10.9663 2.10458 11.4558 2.88811M4.74998 15.9023H6.81646C7.08589 15.9023 7.35368 15.9344 7.61487 15.9985L9.79835 16.5291C10.2721 16.6445 10.7657 16.6558 11.2444 16.5628L13.6586 16.0931C14.2963 15.9689 14.883 15.6635 15.3427 15.2162L17.0508 13.5547C17.5386 13.081 17.5386 12.3123 17.0508 11.8378C16.6116 11.4106 15.9162 11.3625 15.4194 11.7248L13.4287 13.1772C13.1436 13.3856 12.7967 13.4978 12.44 13.4978H10.5177L11.7412 13.4977C12.4309 13.4977 12.9895 12.9543 12.9895 12.2834V12.0406C12.9895 11.4835 12.5998 10.9978 12.0445 10.8631L10.1559 10.4039C9.84861 10.3293 9.53386 10.2917 9.21746 10.2917C8.45366 10.2917 7.07106 10.9241 7.07106 10.9241L4.74998 11.8947M15.8333 5.14583C15.8333 6.67612 14.5928 7.91667 13.0625 7.91667C11.5322 7.91667 10.2916 6.67612 10.2916 5.14583C10.2916 3.61554 11.5322 2.375 13.0625 2.375C14.5928 2.375 15.8333 3.61554 15.8333 5.14583ZM1.58331 11.5583L1.58331 16.15C1.58331 16.5934 1.58331 16.8151 1.6696 16.9844C1.7455 17.1334 1.86661 17.2545 2.01557 17.3304C2.18492 17.4167 2.4066 17.4167 2.84998 17.4167H3.48331C3.92669 17.4167 4.14837 17.4167 4.31772 17.3304C4.46668 17.2545 4.58779 17.1334 4.66369 16.9844C4.74998 16.8151 4.74998 16.5934 4.74998 16.15V11.5583C4.74998 11.115 4.74998 10.8933 4.66369 10.7239C4.58779 10.575 4.46668 10.4539 4.31772 10.378C4.14838 10.2917 3.92669 10.2917 3.48331 10.2917L2.84998 10.2917C2.4066 10.2917 2.18492 10.2917 2.01557 10.378C1.86661 10.4539 1.7455 10.575 1.6696 10.7239C1.58331 10.8933 1.58331 11.115 1.58331 11.5583Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Compensation;