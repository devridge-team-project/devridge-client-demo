import PostBoard from "design/board/PostBoard";
import Board from "design/board/Board";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Input, TextArea } from "design";
import { postCommunity } from "connection/api/community";

export default function CommunityPost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postCommunity"],
    mutationFn: () => postCommunity({ title, content, hashtags }),
  });
  if (isSuccess) {
    alert("커뮤니티 게시글 등록 성공");
    navigate("/community");
  }

  return (
    <Board options={{ gapY: 8 }}>
      <div>
        <div className="text-2xl font-bold">제목</div>
        <Input state={[title, setTitle]} placeholder="제목을 5자 이상 입력해주세요." />
      </div>
      <div>
        <div className="text-2xl font-bold">내용</div>
        <TextArea onChange={[content, setContent]} placeholder="궁금한 것을 작성해보세요." />
      </div>
      <Button title="작성하기" onClick={mutate} options={{ size: "full" }} />
    </Board>
  );
}
