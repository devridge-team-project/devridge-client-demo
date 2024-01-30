import httpRequest from "./http";

interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
  introduction: string | null;
}

interface Qna {
  id: number;
  title: string;
  likes: number;
  views: number;
  commentCount: number;
}

interface QnaComments {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
}

interface QnaDetail {
  member: Member;
  title: string;
  content: string;
  views: number;
  likes: number;
  dislikes: number;
  createdAt: string;
  commentCount: number;
  comments: QnaComments[];
}

export const getQna = () => {
  return httpRequest.get<Qna[]>("/api/qna?sortOption=views");
};

export const getQnaById = (id: number) => {
  return httpRequest.get<QnaDetail>(`/api/qna/${id}`);
};
