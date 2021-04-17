import { createContext, useState } from 'react';
import styled from 'styled-components';

export const notiificationContext = createContext(null);

const NotificationContainer = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 16rem;
`;

const Notification = styled.div`
  margin-bottom: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  padding: 1rem;
`;

export const NotificationProvider = ({ children, delay }) => {
  const [list, setList] = useState([]);
  function send(msg) {
    const id = `${Math.random()}-${Date.now()}`
    setList(list => [...list, {msg, id}]);
    setTimeout(() => {
      setList(list => list.filter(el => el.id !== id));
    }, delay);
  };

  return (
    <notiificationContext.Provider value={send}>
      <NotificationContainer>{
        list.map(({id, msg}) => <Notification key={id}>{msg}</Notification>)
      }</NotificationContainer>
      {children}
    </notiificationContext.Provider>
  );
};
