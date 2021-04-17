import { useContext } from "react";
import styled from "styled-components";
import { authContext } from "../context/Auth";
import { messagesContext } from "../context/Messages";

const MessageContainer = styled.div`
  border-radius: 4px;
  background-color: #333;
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DeleteMessageButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  background-color: red;
  color: #ffffff;
`;

export const UserMessage = ({data}) => {
  const { remove } = useContext(messagesContext);
  const [user] = useContext(authContext);
  return <MessageContainer>
    {(user === data.owner) && <DeleteMessageButton onClick={() => remove(data.id)}>✖</DeleteMessageButton>}
    <b>{data.owner}</b>
    <p>{data.text}</p>
    <i>{new Date(data.time).toLocaleDateString()}</i>
  </MessageContainer>
}