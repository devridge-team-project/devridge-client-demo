import { Qna, QnaDetail } from "interface/Qna";
import httpRequest from "../axios";

function getQna() {
  return httpRequest.get<Qna[]>("/api/qna?sortOption=views");
}

function getQnaById(id: number) {
  return httpRequest.get<QnaDetail>(`/api/qna/${id}`);
}

export const qna = {
  get: getQna,
  getById: getQnaById,
};
