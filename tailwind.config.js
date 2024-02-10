import tailwindScrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "pretendard-medium": ["pretendard-medium"],
    },
    extend: {
      fontSize: {
        xxs: "0.625rem",
        "1xl": "0.875rem",
      },
      inset: {
        300: "75rem",
      },
      spacing: {
        6: "1.5rem",
        7: "1.75rem",
        7.5: "1.875rem",
        8: "2rem",
        9: "2.25rem",
        12.5: "3.125rem",
        14: "3.5rem",
        15: "3.75rem",
        20: "5rem",
        23: "5.75rem",
        25: "6.25rem",
        30: "7.5rem",
        34: "8.5rem",
        44: "11rem",
        50: "12.5rem",
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
        "medium-grey": "#AFAFAF",
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
  ],
  plugins: [tailwindScrollbarHide],
};
