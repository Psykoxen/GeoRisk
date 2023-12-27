<template>
  <div>
    <svg
      width="960"
      height="540"
      viewBox="0 0 960 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      class="w-full h-full absolute top-0 left-0 -z-10 rotate-180"
    >
      <g clip-path="url(#clip0_187_2)">
        <path d="M960 0H0V540H960V0Z" fill="url(#paint0_linear_187_2)" />
        <path
          d="M0 269L40 249.7C80 230.3 160 191.7 240 171.3C320 151 400 149 480 169.2C560 189.3 640 231.7 720 244C800 256.3 880 238.7 920 229.8L960 221V0H920C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0H0V269Z"
          fill="#f9faff"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_187_2"
          x1="-7.72439e-06"
          y1="371.5"
          x2="960"
          y2="369.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2282A" />
          <stop offset="1" stop-color="#FE4A2B" />
        </linearGradient>
        <clipPath id="clip0_187_2">
          <rect width="960" height="540" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <Navbar />
    <slot />
  </div>
</template>
