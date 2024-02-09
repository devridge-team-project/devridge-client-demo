import { Qna, QnaById, QnaPost } from "interface/Qna";
import httpRequest from "../axios";

function getQna() {
  return httpRequest.get<Qna[]>("/api/qna?sortOption=views");
}

function getQnaById(id: number) {
  return httpRequest.get<QnaById>(`/api/qna/${id}`);
}

function postQna(data: QnaPost) {
  return httpRequest.post("/api/qna", data);
}

export const qna = {
  get: getQna,
  getById: getQnaById,
  post: postQna,
};
