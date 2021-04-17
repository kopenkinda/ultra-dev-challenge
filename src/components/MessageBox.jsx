import { createRef, useContext } from "react";
import styled from "styled-components";
import { authContext } from "../context/Auth";
import { messagesContext } from "../context/Messages";
import { notiificationContext } from "../context/Notification";
import { Button } from "./ui/Button";

const MessageBoxContainer = styled.div`
  border-radius: 4px;
  background-color: #333;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: vertical;
  min-height: 5rem;
  max-height: 9rem;
  padding: 1rem;
`;

export const MessageBox = () => {

  const textRef = createRef(null);
  const [user] = useContext(authContext);
  const loggedIn = user != null;
  const sendNotification = useContext(notiificationContext);
  const { add } = useContext(messagesContext);


  function sendMessage() {
    if (!loggedIn) {
      return sendNotification("Please log in first");
    }
    const { current } = textRef;
    if (current.value.trim() === '') {
      return sendNotification("Message cannot be empty");
    }
    add(current.value, user);
    current.value = '';
  }

  return <MessageBoxContainer>
    <Textarea ref={textRef}/>
    <Button onClick={sendMessage} style={{marginTop: '1rem'}}>Send Message</Button>
  </MessageBoxContainer>
}