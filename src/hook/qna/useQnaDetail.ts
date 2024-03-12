import { qna } from "connection";
import { useEffect } from "react";
export default function useQnaDetail(id: number) {
  useEffect(() => {
    (async () => {
      const response = await qna.get(id);
    })();
  }, []);
}
