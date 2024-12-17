import * as React from "react";

export const LinkedinIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const InstagramIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <radialGradient
      id="instagramGradient"
      cx={19.38}
      cy={42.035}
      r={44.899}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fd5" />
      <stop offset={0.328} stopColor="#ff543f" />
      <stop offset={0.348} stopColor="#fc5245" />
      <stop offset={0.504} stopColor="#e64771" />
      <stop offset={0.643} stopColor="#d53e91" />
      <stop offset={0.761} stopColor="#cc39a4" />
      <stop offset={0.841} stopColor="#c837ab" />
    </radialGradient>
    <path
      fill="url(#instagramGradient)"
      d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
    />
    <path
      fill="#fff"
      d="M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
    />
    <circle cx={31.5} cy={16.5} r={1.5} fill="#fff" />
    <path
      fill="#fff"
      d="M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7zM18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5H18z"
    />
  </svg>
);

export const YouTubeIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <path
        fill="#FF0000"
        d="M43.6 14.8c-.5-2-2-3.5-4-4-3.5-.9-17.6-.9-17.6-.9s-14.1 0-17.6.9c-2 .5-3.5 2-4 4-.9 3.5-.9 10.9-.9 10.9s0 7.4.9 10.9c.5 2 2 3.5 4 4 3.5.9 17.6.9 17.6.9s14.1 0 17.6-.9c2-.5 3.5-2 4-4 .9-3.5.9-10.9.9-10.9s0-7.4-.9-10.9z"
      />
      <path
        fill="#FFF"
        d="M20 29.2l10.4-6.3L20 16.6v12.6z"
      />
    </svg>
  );
  

export const FacebookIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <linearGradient
      id="facebookGradient"
      x1={9.993}
      x2={40.615}
      y1={9.993}
      y2={40.615}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#2aa4f4" />
      <stop offset={1} stopColor="#007ad9" />
    </linearGradient>
    <path
      fill="url(#facebookGradient)"
      d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
    />
    <path
      fill="#fff"
      d="M26.707 29.301h5.176l.813-5.258h-5.989v-2.874c0-2.184.714-4.121 2.757-4.121h3.283V12.46c-.577-.078-1.797-.248-4.102-.248-4.814 0-7.636 2.542-7.636 8.334v3.498H16.06v5.258h4.948v14.452c.98.146 1.973.246 2.992.246.921 0 1.82-.084 2.707-.204V29.301z"
    />
  </svg>
);
