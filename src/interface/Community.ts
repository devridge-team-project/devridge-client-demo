export interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string | undefined;
  introduction: string;
}
export interface Hashtag {
  id: number;
  word: string;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Issue {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  comments: number;
  member: Member;
  createdAt: string;
  updatedAt: string;
  hashtags: Hashtag[];
  scraps: number;
}

export interface Community {
  content?: Issue[];
  pageable: Pageable;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  size: number;
  empty: boolean;
}

export interface CommunityById {
  id: number;
  member: Member;
  title: string;
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

export interface Issue1 {
  id: number;
  title: string;
  content: string;
  view: number;
  likes: number;
  dislikes: number;
  isRecruiting: boolean;
  skills: string[];
  meeting: string;
}

export interface Content {
  content: string;
}

export interface Project {
  content?: Issue1[];
  pageable: Pageable;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  empty: boolean;
}

export interface ProjectPost {
  title: string;
  content: string;
  skillIds: number[];
  meeting: string;
  roles: string[];
  // images: string[];
}

export interface ProjectById {
  id: number;
  title: string;
  content: string;
  roles: string;
  member: Member;
  views: number;
  createdAt: string;
  updatedAt: string;
  likes: number;
  dislikes: number;
  skills: string[];
  meeting: string;
  isRecruiting: boolean;
}

export interface Issue2 {
  studyId: number;
  category: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  views: number;
  location: string | null;
  totalPeople: number | null;
  currentPeople: number | null;
}

export interface Study {
  content?: Issue2[];
  pageable: Pageable;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  size: number;
  empty: boolean;
}

export interface StudyPost {
  title: string;
  content: string;
  category: string;
  location: string;
  totalPeople: number;
  currentPeople: number;
}

export interface StudyById {
  id: number;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  location: string | null;
  totalPeople: number | null;
  currentPeople: number | null;
  member: Member;
}

export interface CommunityComment {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}

export interface CommunityComments {
  content?: CommunityComment[];
  pageable: Pageable;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  empty: boolean;
}

export interface ProjectComment {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectComments {
  content?: ProjectComment[];
  pageable: Pageable;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  empty: boolean;
}

export interface StudyComment {
  id: number;
  member: Member;
  content: string;
  likeCount: number;
  dislikeCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface StudyComments {
  content?: StudyComment[];
  pageable: Pageable;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  empty: boolean;
}
