import httpRequest from "./../axios";

const api = {
  naver: httpRequest.naver,
};

function authenticateNaver({}) {
  return api.naver.get(
    `/authorize?response_type=code&client_id=NDaIlH5zYC_WwwacvpXy&redirect_uri=http://localhost:8080/login/oauth2/code/naver`,
  );
}
