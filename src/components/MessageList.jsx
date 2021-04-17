import { useContext } from "react";
import { messagesContext } from "../context/Messages";
import { UserMessage } from "./UserMessage";

export const MessageList = () => {
  const { messages } = useContext(messagesContext);
  console.log(messages);
  return <div>
    {messages.map(msg => (
      <UserMessage data={msg} key={msg.id} />
    ))}
  </div>
}