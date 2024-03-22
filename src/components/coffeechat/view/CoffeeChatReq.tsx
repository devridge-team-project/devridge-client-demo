import { useLocation } from "react-router-dom";
import { getCoffeeChatReq, patchCoffeeChatReq } from "connection/api/coffeeChat";
import { useQuery, useMutation } from "@tanstack/react-query";
import CoffeeChatLayout from "./CoffeeChatLayout";
import { Button } from "design";
export default function CoffeeChatReq() {
  const { pathname } = useLocation();
  let queryKey = "";
  let viewOption = "";
  if (pathname === "/coffeechat/res") {
    queryKey = "coffee-chat-receive";
    viewOption = "receive";
  } else if (pathname === "/coffeechat/req") {
    queryKey = "coffee-chat-send";
    viewOption = "send";
  }

  const { data } = useQuery({
    queryKey: [`${queryKey}`],
    queryFn: () => getCoffeeChatReq(`${viewOption}` as "send" | "receive"),
  });

  const {
    data: result,
    mutate,
    isSuccess,
  } = useMutation({
    mutationFn: (variables: { id: number; answer: string }) =>
      patchCoffeeChatReq(variables.id, variables.answer),
  });
  if (isSuccess) {
    console.log(result);
  }

  return (
    <CoffeeChatLayout>
      <div>
        {data?.coffeeChatRequests?.map(
          ({ id, member: { nickname, profileImageUrl, introduction }, message, status }) => {
            return (
              <div key={id}>
                <div className="flex py-3.75 border-t border-gray-200">
                  <img
                    src={profileImageUrl as string}
                    className="h-12.5 w-12.5 rounded-full bg-gray-200 "
                    alt="profileImage"
                  />
                  <div className="ml-3.5">
                    <div className="text-1xl font-bold">{nickname}</div>
                    <div className="text-1xl">{introduction}</div>
                  </div>
                </div>
                <div className="mt-6.25 mb-3.75 mx-7.5 flex justify-end">
                  <button
                    type="button"
                    className="w-17.5 h-7.5 rounded bg-blue-grey text-white"
                    onClick={() => mutate({ id, answer: "Y" })}
                  >
                    수락
                  </button>
                  <button
                    type="button"
                    className="w-17.5 h-7.5 rounded border-[1px] border-solid border-white-grey"
                    onClick={() => mutate({ id, answer: "N" })}
                  >
                    거절
                  </button>
                </div>
              </div>
            );
          },
        )}
      </div>
    </CoffeeChatLayout>
  );
}
