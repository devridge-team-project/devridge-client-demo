export interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
  introduction: string;
}

export interface Qna {
  id: number;
  nickname: string;
  title: string;
  content: string;
  likes: number;
  views: number;
  commentCount: number;
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
}

export interface QnaComment {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
}

export interface QnaPost {
  title: string;
  content: string;
  // imageUrl: string[] | undefined;
}
