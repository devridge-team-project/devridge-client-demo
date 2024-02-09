import { Qna, QnaById, QnaPost } from "interface/Qna";
import httpRequest from "../axios";

function getQna(sortOption: "views" | "latest") {
  return httpRequest.get<Qna[]>("/api/qna", { params: { sortOption } });
}
function getQnaById(id: number) {
  return httpRequest.get<QnaById>(`/api/qna/${id}`);
}

function postQna(data: QnaPost, config: object) {
  return httpRequest.post("/api/qna", data, config);
}

function postComment(id: number, data: object) {
  return httpRequest.post(`/api/qna/${id}/comments`, data);
}

export const qna = {
  get: getQna,
  getById: getQnaById,
  post: postQna,
};

export const comment = {
  post: postComment,
};
