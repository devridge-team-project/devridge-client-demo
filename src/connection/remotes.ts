import { http } from "./http";
export const getQna = () => {
  return http.get("/api/qna?sortOption=views");
};
