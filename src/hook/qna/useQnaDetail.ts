import { qna } from "connection/remotes";
import { useEffect } from "react";
export default function useQnaDetail(id: number) {
  useEffect(() => {
    (async () => {
      const response = await qna.getById(id);
    })();
  }, []);
}
