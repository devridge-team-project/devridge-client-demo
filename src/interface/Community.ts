export interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
  introduction: string;
}
export interface Community {
  id: number;
  title: string;
  views: number;
  likeCount: number;
  commentCount: number;
}

export interface CommunityById {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}

export interface CommunityComments {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}

export interface CommunityPost {
  title: string;
  content: string;
  hashtags: string[];
}

export interface Content {
  content: string;
}

export interface Project {
  title: string;
  content: string;
  category: string;
  images: string[];
}
