import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { center, col, row } from "style/display";
import Input from "../../common/input";
import Button from "../../common/button";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState({
    topic: "",
    content: "",
  });
  const { topic, content } = questions;
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setQuestions({ ...questions, [name]: value });
  };
  const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <form className={`${col(2, 80)}`} onSubmit={onSubmitHandler}>
        <div className="font-bold">문의사항</div>
        <div className="mt-5 font-bold">제목</div>
        <Input
          className="mt-1 block h-14 w-80 border"
          type="text"
          name="topic"
          value={topic}
          placeholder="제목을 입력해주세요"
          onChange={onChange}
        />
        <div className="mt-2.5 font-bold">내용</div>
        <textarea
          className=" mt-1  block h-28 w-80 resize-none border "
          name="content"
          value={content}
          placeholder="내용을 입력해주세요"
          onChange={onChange}
        />

        <Button className="mt-5 h-14 w-80  bg-black text-white" type="submit">
          문의하기
        </Button>
      </form>
    </div>
  );
}
