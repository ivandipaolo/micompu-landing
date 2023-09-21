import React from "react"

const Spinner = () => {
  return (
    <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
      <svg
        viewBox="0 0 558 558"
        width="558"
        height="558"
        fill="none"
        aria-hidden="true"
        className="animate-spin-slow"
      >
        <defs>
          <linearGradient
            id=":R1q6:"
            x1="79"
            y1="16"
            x2="105"
            y2="237"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff"></stop>
            <stop offset="1" stop-color="#fff" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        <path
          opacity=".2"
          d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
          stroke="#fff"
        ></path>
        <path
          d="M1 279C1 125.465 125.465 1 279 1"
          stroke="url(#:R1q6:)"
          stroke-linecap="round"
        ></path>
      </svg>
    </div>
  )
}

export default Spinner
