import { Button, Input, TextArea } from "design";
import Board from "./Board";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { questionApi } from "connection";
import useNavigation from "hook/useNavigation";

export default function PostBoard() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState("");

  const navigatior = useNavigation();

  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postQna"],
    mutationFn: () => questionApi.post({ title, content }),
  });
  if (isSuccess) navigatior("/questions/success");

  return (
    <Board options={{ gapY: 8 }}>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">제목</div>
        <Input state={[title, setTitle]} placeholder="제목을 5자 이상 입력해주세요." />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">내용</div>
        <TextArea state={[content, setContent]} placeholder="궁금한 것을 작성해보세요." />
      </div>
      <Button title="작성하기" onClick={mutate} options={{ size: "full" }} />
    </Board>
  );
}
