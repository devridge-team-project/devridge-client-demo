import httpRequest from "../axios";
import { Qna, QnaById, QnaComment, QnaPost } from "interface/Qna";

function getQna(sortOption: "views" | "latest") {
  return httpRequest.get<Qna[]>("/api/qna", { params: { sortOption } });
}

function getQnaById(id: number) {
  return httpRequest.get<QnaById>(`/api/qna/${id}`);
}

function postQna(data: QnaPost) {
  return httpRequest.post("/api/qna", data);
}

function getComments(id: number) {
  return httpRequest.get<QnaComment[]>(`/api/qna/${id}/comments`);
}

function postComments(id: number, data: object) {
  return httpRequest.post(`/api/qna/${id}/comments`, data);
}

export const qna = {
  get: getQna,
  getById: getQnaById,
  post: postQna,
};

export const comment = {
  get: getComments,
  post: postComments,
};
