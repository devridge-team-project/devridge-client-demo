import httpRequest from "../axios";
import { Qna, QnaById, QnaComment, QnaPost } from "interface/Qna";

const api = httpRequest.server;

function getQuestionsAll(sortOption: "views" | "latest") {
  return api.get<Qna[]>("/api/questions", { params: { sortOption } });
}

function getQuestion(id: number) {
  return api.get<QnaById>(`/api/questions/${id}`);
}

function postQuestion(data: QnaPost) {
  return api.post("/api/questions", data);
}

function getAnswersAll(id: number) {
  return api.get<QnaComment[]>(`/api/questions/${id}/answers`);
}

function postAnswer(id: number, data: object) {
  return api.post(`/api/questions/${id}/answers`, data);
}

const question = {
  getAll: getQuestionsAll,
  get: getQuestion,
  post: postQuestion,
  answer: {
    get: getAnswersAll,
    post: postAnswer,
  },
};
export default question;
