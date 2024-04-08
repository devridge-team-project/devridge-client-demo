import { useState, useRef, useEffect } from "react";
import { Client } from "@stomp/stompjs";
import { getCookie } from "util/cookies";
import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import { getCoffeeChatMessageById } from "connection/api/coffeeChat";
import { CoffeeChatMessage } from "interface/CoffeeChat";
import { center } from "style/display";
const { REACT_APP_CHAT_URL } = process.env;
function CoffeeChatMessageById() {
  const [inputMessage, setInputMessage] = useState("");
  const [stompClient, setStompClient] = useState<Client | null>(null);

  const { id } = useParams();
  const {
    state: { nickname },
  } = useLocation();
  const { data: messages, isLoading } = useQuery({
    queryKey: [`coffee-chat-message,${id}`],
    queryFn: () => getCoffeeChatMessageById(Number(id)),
  });

  const [Messages, setMessages] = useState<CoffeeChatMessage[]>(messages as CoffeeChatMessage[]);

  /* useEffect(() => {
    if (messages) {
      setMessages(messages);
    }
  }, [messages]); */

  useEffect(() => {
    const stomp = new Client({
      brokerURL: `${REACT_APP_CHAT_URL}/api/ws`,
      connectHeaders: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
        "Content-Type": "application/json",
      },
      debug: (str: string) => {
        console.log(str);
      },
    });

    setStompClient(stomp);
    stomp.activate();
    stomp.onConnect = () => {
      console.log("WebSocket 연결이 열렸습니다.");
      const subDestination = `/api/sub/${id}`;

      stomp.subscribe(subDestination, (frame) => {
        try {
          const parsedMessage = JSON.parse(frame.body);
          console.log(Messages);
          console.log(parsedMessage);

          setMessages([...(Messages as CoffeeChatMessage[]), parsedMessage]);
        } catch (error) {
          console.error("오류가 발생했습니다:", error);
        }
      });
    };
    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.deactivate();
      }
    };
  }, []);

  const sendMessage = () => {
    // 메시지 전송
    if (stompClient && stompClient.connected && inputMessage) {
      const destination = `/api/pub/${id}`;
      stompClient.publish({
        destination,
        body: JSON.stringify({
          message: inputMessage,
        }),
      });
    }

    setInputMessage("");
  };

  return (
    <div className={`${center.colO(0)}`}>
      <div className="w-[390px] ">
        <div className="h-[63px] flex items-center border-y border-gray-200">
          <span className="text-xl ml-[27px]">{nickname}님 과의 대화</span>
        </div>
        <div className="min-h-screen overflow-y-auto">
          {Messages?.map(({ id, member, message }) => {
            return (
              <div
                key={id}
                className={`my-7.5 ${nickname === member?.nickname ? "" : "flex justify-end"}`}
              >
                {nickname === member?.nickname && (
                  <div className="text-xs font-bold mb-2.5">{member?.nickname}</div>
                )}
                <div
                  className={`w-[230px] min-h-[45px] text-xs flex justify-center items-center rounded-tr-[15px] rounded-b-[15px] ${
                    nickname === member?.nickname ? "bg-blue-grey text-white" : "bg-white-grey "
                  }`}
                >
                  <span>{message}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="메시지를 입력해주세요"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="border pl-[26px]  box-border border-white-grey w-[340px] h-12.5"
          />
          <img
            src="/images/arrow.png"
            alt="arrow"
            className="p-[12.5px] bg-blue-grey"
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default CoffeeChatMessageById;
