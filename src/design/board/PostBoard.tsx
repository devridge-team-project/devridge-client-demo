import { Button, Input, TextArea } from "design";
import Board from "./Board";
import { useState } from "react";

export default function PostBoard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Board options={{ gapY: 6 }}>
      <div>
        <div className="text-2xl font-bold">제목</div>
        <Input onChange={[title, setTitle]} placeholder="제목을 5자 이상 입력해주세요." />
      </div>
      <div>
        <div className="text-2xl font-bold">내용</div>
        <TextArea onChange={[content, setContent]} placeholder="궁금한 것을 작성해보세요." />
      </div>
      <Button title="작성하기" onClick={() => {}} options={{ size: "full" }} />
    </Board>
  );
}
