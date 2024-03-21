import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import CoffeeChatLayout from "./CoffeeChatLayout";
import { getCoffeeChatMessage } from "connection/api/coffeeChat";

export default function CoffeeChatMessage() {
  const { data: messages } = useQuery({
    queryKey: ["coffee-chat-message"],
    queryFn: () => getCoffeeChatMessage(),
  });
  console.log(messages);
  return (
    <CoffeeChatLayout>
      <div>
        {messages?.map(({ id, member, lastMessage }) => {
          return (
            <Link key={id} to={`${id}`} state={{ nickname: member?.nickname }}>
              <div className="flex py-6.25 border-y border-gray-200">
                <img
                  src={member?.profileImageUrl as string}
                  className="h-17.5 w-17.5 rounded-full bg-gray-200 "
                  alt="profileImage"
                />
                <div className="ml-3.5">
                  <div className="text-1xl font-bold">{member?.nickname}</div>
                  <div className="text-1xl">{member?.introduction}</div>
                  <div className="text-1xl">{lastMessage?.message}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </CoffeeChatLayout>
  );
}
