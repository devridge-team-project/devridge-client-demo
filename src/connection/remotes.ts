import { Qna, QnaDetail } from "interface/Qna";
import httpRequest from "./http";

const { REACT_APP_SERVER_URL: origin } = process.env;

function getQna() {
  return httpRequest.get<Qna[]>(`${origin}/api/qna?sortOption=views`);
}

function getQnaById(id: number) {
  return httpRequest.get<QnaDetail>(`${origin}/api/qna/${id}`);
}

export const qna = {
  get: getQna,
  getById: getQnaById,
};
