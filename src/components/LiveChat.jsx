import { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../store/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((state) => state.chat.chatMessages);
  useEffect(() => {
    let timer = setInterval(() => {
      // API polling
      dispatch(
        addChatMessage({
          name: "Karthik",
          message: "Namaste React JS",
        })
      );
    }, 500);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="flex w-11/12 m-auto h-[415px] border border-black mb-2 overflow-scroll flex-col-reverse">
        {chatMessages.map((message, i) => (
          <ChatMessages key={i} name={message.name} message={message.message} />
        ))}
      </div>
      <form
        className="flex w-11/12 m-auto border border-black mb-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          setLiveMessage("");
          dispatch(
            addChatMessage({
              name: "Karthik",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="w-75 border-none m-2 px-2"
          type="text"
          placeholder="Chat Message"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="border-none bg-gray-200 px-2 m-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
