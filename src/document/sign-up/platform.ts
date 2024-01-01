const { REACT_APP_GITHUB_CLIENT_ID: gitHubClientId } = process.env;

const contents = [
  {
    title: "카카오",
    bgColor: "kakao-yellow",
    textColor: "kakao-brown",
    borderColor: null,
    image: "kakao",
    href: "https://kauth.kakao.com/oauth/authorize?client_id=",
  },
  {
    title: "구글",
    bgColor: "bg-white",
    textColor: "text-black",
    borderColor: "medium-grey",
    image: "google",
    href: "https://accounts.google.com/o/oauth2/v2/auth?",
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
    href: "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=",
  },
];

export { contents };
