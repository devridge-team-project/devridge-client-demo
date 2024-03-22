/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "pretendard-medium": ["pretendard-medium"],
    },
    extend: {
      fontSize: {
        xxxxs: "0.225rem",
        xxxs: "0.5rem",
        xxs: "0.625rem",
        xm: "0.875rem",
        "1xl": "1rem",
      },
      inset: {
        300: "75rem",
      },
      spacing: {
        2: "0.5rem",
        3: "0.75rem",
        3.75: "0.9375rem",
        6: "1.5rem",
        6.25: "1.5625rem",
        7: "1.75rem",
        7.5: "1.875rem",
        8: "2rem",
        8.75: "2.1875rem",
        9: "2.25rem",
        12: "3rem",
        12.5: "3.125rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        17.5: "4.375rem",
        20: "5rem",
        22.5: "6.25rem",
        23: "5.75rem",
        25: "6.25rem",
        30: "7.5rem",
        34: "8.5rem",
        35: "8.75rem",
        44: "11rem",
        50: "12.5rem",
        55: "13.75rem",
        62.5: "15.625rem",
        70: "17.5rem",
        76: "19rem",
        78: "19.5rem",
        80: "20rem",
        84: "21rem",
        92: "23rem",
        96: "24rem",
        120: "30rem",
        128: "32rem",
        150: "37.5rem",
        152: "38rem",
        160: "40rem",
        188: "47rem",
        300: "75rem",
        400: "100rem",
        500: "125rem",
        800: "200rem",
      },
      width: {
        "3/10": "30%",
        "9/10": "90%",
      },
      minWidth: {
        72: "18rem",
        80: "20rem",
        120: "30rem",
        160: "40rem",
      },
      minHeight: {
        60: "15rem",
      },
      colors: {
        "kakao-yellow": "#FEE500",
        "kakao-brown": "#3C1E1E",
        "naver-green": "#03C75A",
        "charcoal-grey": "#242424",
        "near-black": "#0C0E0F",
        "white-grey": "#D9D9D9",
        "medium-grey": "#AFAFAF",
        "blue-grey": "#4F26F4",
        "dark-grey": "#464646",
        "white-purple": "rgba(79, 38, 244, 0.25)",
      },
      opacity: {
        35: "0.35",
      },
      transitionDuration: {
        500: "500ms",
        1000: "1000ms",
      },
      transitionDelay: {
        500: "500ms",
      },
      backgroundImage: {
        "image-bubble": "url('/public/images/home/bubble.png')",
        "image-developer-man": "url('/public/images/home/developer-man.png')",
      },
    },
  },
  safelist: [
    {
      pattern: /col-.*/,
    },
    {
      pattern: /row-.*/,
    },
    {
      pattern: /flex/,
    },
    {
      pattern: /flex-.*/,
    },
    {
      pattern: /justify-.*/,
    },
    {
      pattern: /items-.*/,
    },
    {
      pattern: /grid-.*/,
    },
    {
      pattern: /gap-.*/,
    },
    {
      pattern: /border-.*/,
    },
    { pattern: /w-.*/ },
    { pattern: /h-.*/ },
    {
      pattern: /top*.*/,
    },
    {
      pattern: /bottom*.*/,
    },
    {
      pattern: /left*.*/,
    },
    {
      pattern: /right*.*/,
    },
    { pattern: /bg-.*/ },
    { pattern: /text-.*/ },
    {
      pattern: /p-.*/,
    },
    {
      pattern: /scrollbar-.*/,
    },
  ],
  plugins: [require("tailwind-scrollbar-hide")],
};
