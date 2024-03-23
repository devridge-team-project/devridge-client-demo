const {
  REACT_APP_AUTH_NAVER_ORIGIN: naver,
  REACT_APP_AUTH_KAKAO_ORIGIN: kakao,
  REACT_APP_AUTH_GITHUB_ORIGIN: gitHub,
  REACT_APP_AUTH_GOOGLE_ORIGIN: google,
  REACT_APP_AUTH_KAKAO_CLIENT_ID: kakaoClientId,
  REACT_APP_AUTH_GOOGLE_CLIENT_ID: googleClientId,
  REACT_APP_AUTH_GITHUB_CLIENT_ID: gitHubClientId,
  REACT_APP_AUTH_NAVER_CLIENT_ID: naverClientId,
} = process.env;

const redirectUri = "http://localhost:3000/login/oauth2/code";
const readOnly = "https%3A//www.googleapis.com/auth/drive.metadata.readonly";
const state = "test";

export const contents = [
  {
    title: "카카오",
    bgColor: "kakao-yellow",
    textColor: "kakao-brown",
    borderColor: null,
    image: "kakao",
    href: `${kakao}?client_id=${kakaoClientId}&redirect_uri=${redirectUri}/kakao&response_type=code`,
  },
  {
    title: "구글",
    bgColor: "bg-white",
    textColor: "text-black",
    borderColor: "medium-grey",
    image: "google",
    href: `${google}?redirect_uri=${redirectUri}/google&client_id=${googleClientId}&response_type=code&scope=email`,
  },
  {
    title: "깃허브",
    bgColor: "near-black",
    textColor: "text-white",
    borderColor: null,
    image: "gitHub",
    href: `${gitHub}?client_id=${gitHubClientId}`,
  },
  {
    title: "네이버",
    bgColor: "naver-green",
    textColor: "text-white",
    borderColor: null,
    image: "naver",
    href: `${naver}?response_type=code&client_id=${naverClientId}&redirect_uri=${redirectUri}/naver`,
  },
];
// "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=NDaIlH5zYC_WwwacvpXy&redirect_uri=http://localhost:3000/login/oauth2/code/naver"
