import httpRequest from "../axios";
import { Qna, QnaById, QnaComment, QnaPost } from "interface/Qna";

const api = httpRequest.server;

function getQna(sortOption: "views" | "latest") {
  return api.get<Qna[]>("/api/qna", { params: { sortOption } });
}

function getQnaById(id: number) {
  return api.get<QnaById>(`/api/qna/${id}`);
}

function postQna(data: QnaPost) {
  return api.post("/api/qna", data);
}

function getComments(id: number) {
  return api.get<QnaComment[]>(`/api/qna/${id}/comments`);
}

function postComments(id: number, data: object) {
  return api.post(`/api/qna/${id}/comments`, data);
}

export const qna = {
  get: getQna,
  getById: getQnaById,
  post: postQna,
  comments: {
    get: getComments,
    post: postComments,
  },
};
