import { useState, useEffect } from "react";
import { Client } from "@stomp/stompjs";
import { getCookie } from "util/cookies";
import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import { getCoffeeChatMessageById } from "connection/api/coffeeChat";
import { center } from "style/display";
const { REACT_APP_CHAT_URL } = process.env;
function CoffeeChatMessageById() {
  const [inputMessage, setInputMessage] = useState("");
  const { id } = useParams();
  const {
    state: { nickname },
  } = useLocation();
  const { data: messages } = useQuery({
    queryKey: [`coffee-chat-message${id}`],
    queryFn: () => getCoffeeChatMessageById(Number(id)),
  });
  // const [Messages,setMessages]=useState<string[]>(messages);
  console.log(messages);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  useEffect(() => {
    const stomp = new Client({
      brokerURL: `${REACT_APP_CHAT_URL}/api/ws`,
      connectHeaders: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
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
          console.log(parsedMessage);
          // setMessages((prevMessages) => [...prevMessages, parsedMessage])
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
    if (stompClient && stompClient.connected) {
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
        <div>
          {messages?.map(({ id, member, message }) => {
            return (
              <div key={id} className={`${nickname !== member?.nickname ? "justify-end" : ""}`}>
                <div>{member?.nickname}</div>
                <div>{message}</div>
              </div>
            );
          })}
        </div>
        <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
        <button type="button" onClick={sendMessage}>
          클릭
        </button>
      </div>
    </div>
  );
}

export default CoffeeChatMessageById;
