import PostBoard from "design/board/PostBoard";
import useSignIn from "hook/useSignIn";

export default function QnaPost() {
  useSignIn();
  return <PostBoard />;
}
