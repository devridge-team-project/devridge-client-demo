import { Button, Input, TextArea } from "design";
import Board from "./Board";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { qna } from "connection";
import { getCookie } from "util/cookies";
import useNavigation from "hook/useNavigation";

export default function PostBoard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigatior = useNavigation();

  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postQna"],
    mutationFn: () => qna.post({ title, content }),
  });
  if (isSuccess) navigatior("/qna/success");

  return (
    <Board options={{ gapY: 8 }}>
      <div>
        <div className="text-2xl font-bold">제목</div>
        <Input onChange={[title, setTitle]} placeholder="제목을 5자 이상 입력해주세요." />
      </div>
      <div>
        <div className="text-2xl font-bold">내용</div>
        <TextArea onChange={[content, setContent]} placeholder="궁금한 것을 작성해보세요." />
      </div>
      <Button title="작성하기" onClick={mutate} options={{ size: "full" }} />
    </Board>
  );
}
