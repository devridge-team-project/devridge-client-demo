export interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
  introduction: string | null;
}

export interface Qna {
  id: number;
  title: string;
  likes: number;
  views: number;
  commentCount: number;
}

export interface QnaComments {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
}

export interface QnaById {
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
