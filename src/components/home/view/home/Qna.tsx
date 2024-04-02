import { useEffect, useState } from "react";
import { questionApi } from "connection";
import { Button } from "design";
import { QnaById } from "interface/Qna";
import ReviewCard from "design/card/template/ReviewCard";
import useNavigation from "hook/useNavigation";

interface QnaByIdWithId extends QnaById {
  id: number;
}

export default function Qna() {
  const [questions, setQuestions] = useState<QnaByIdWithId[]>([]);
  const navigate = useNavigation();
  useEffect(() => {
    (async () => {
      try {
        const topQnas = (await questionApi.getAll("latest")).slice(0, 4);
        const qnaPromises = topQnas.map(({ id }) =>
          questionApi.get(id).then((data) => ({ ...data, id })),
        );
        const qnaData = await Promise.all(qnaPromises);
        setQuestions(qnaData);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="w-full flex flex-col items-center pt-8 h-160 gap-8">
      <div className="flex flex-col items-center text-2xl font-bold">
        <div>모든 개발자를 위한</div>
        <div className="flex gap-2">
          <div className="text-blue-500">지식 공유 플랫폼</div>DEVRIDGE!
        </div>
      </div>
      <Button title="질문하러 가기" onClick={() => navigate("/questions")} />
      <div className="grid grid-cols-2 gap-x-5 ">
        {questions.map(
          ({ member: { nickname, introduction }, id, createdAt, title, content }, index) => (
            <ReviewCard
              key={createdAt}
              index={index}
              name={nickname}
              introduction={introduction}
              review={{ title, content }}
              onClick={() => navigate(`/questions/${id}`)}
            />
          ),
        )}
      </div>
    </div>
  );
}
