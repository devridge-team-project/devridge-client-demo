const {
  REACT_APP_KAKAO_CLIENT_ID: kakaoClientId,
  REACT_APP_GOOGLE_CLIENT_ID: googleClientId,
  REACT_APP_GITHUB_CLIENT_ID: gitHubClientId,
  REACT_APP_NAVER_CLIENT_ID: naverClientId,
} = process.env;

const origin = process.env.REACT_APP_ORIGIN ?? "http%3A//localhost%3A3000";
const readOnly = "https%3A//www.googleapis.com/auth/drive.metadata.readonly";
const state = "test";

const contents = [
  {
    title: "카카오",
    bgColor: "kakao-yellow",
    textColor: "kakao-brown",
    borderColor: null,
    image: "kakao",
    href: `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${origin}&response_type=code`,
  },
  {
    title: "구글",
    bgColor: "bg-white",
    textColor: "text-black",
    borderColor: "medium-grey",
    image: "google",
    href: `https://accounts.google.com/o/oauth2/v2/auth?scope=${readOnly}&access_type=offline&response_type=code&redirect_uri=${origin}&client_id=${googleClientId}`,
  },
  {
    title: "깃허브",
    bgColor: "near-black",
    textColor: "text-white",
    borderColor: null,
    image: "gitHub",
    href: `https://github.com/login/oauth/authorize?client_id=${gitHubClientId}`,
  },
  {
    title: "네이버",
    bgColor: "naver-green",
    textColor: "text-white",
    borderColor: null,
    image: "naver",
    href: `https://nid.naver.com/oauth2.0/authorize?client_id=${naverClientId}&redirect_uri=${origin}&response_type=code&state=${state}`,
  },
];

export { contents };
