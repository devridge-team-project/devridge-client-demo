export interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
  introduction: string;
}
export interface Hashtag {
  id: number;
  word: string;
  count: number;
}
export interface Community {
  id: number;
  title: string;
  views: number;
  likeCount: number;
  comments: number;
  member: Member;
  createdAt: string;
  updatedAt: string;
  hashtags: Hashtag[];
  scraps: number;
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

export interface ProjectPost {
  title: string;
  content: string;
  role: string;
  onoff: string;
  category: string;
  images: string[];
}
