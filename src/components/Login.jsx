import { createRef, useContext } from "react";
import styled from "styled-components";
import { authContext } from "../context/Auth";
import { notiificationContext } from "../context/Notification";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 18rem;
`;

export const Login= () => {
  const [user, setUser] = useContext(authContext);
  const sendNotification = useContext(notiificationContext);
  const usernameRef = createRef(null);

  function attemptLogin() {
    const username = usernameRef.current.value;
    if (username.trim() === '') {
      sendNotification('Please enter a valid username!');
    } else {
      setUser(username);
      sendNotification('Success!');
      usernameRef.current.value = '';
    }
  }

  return (<>{
    (user != null) ? (
      <LoginContainer>
        <span>
          Logged in as:
          {' '}
          <b>{user}</b>
        </span>
        <Button onClick={() => {setUser(null)}}>Log out</Button>
      </LoginContainer>
    ) : (
      <LoginContainer>
        <Input type="text" ref={usernameRef} placeholder="Select your username"></Input>
        <Button onClick={attemptLogin}>Log in</Button>
      </LoginContainer>
    )}
  </>)
}