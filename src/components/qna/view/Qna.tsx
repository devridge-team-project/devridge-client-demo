import { useQuery } from "@tanstack/react-query";
import { getQna } from "connection";

export default function Qna() {
  const { data, isLoading, error } = useQuery({ queryKey: ["qna"], queryFn: getQna });
  return (
    <div>
      <div>{}</div>
    </div>
  );
}
