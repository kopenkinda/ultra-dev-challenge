import { createContext, useEffect, useState } from 'react';

export const messagesContext = createContext([]);

const MSGS_STRING = 'app-messages';

export const MessageProvider = ({ children }) => {
  const [msgs, setMsgs] = useState([]);

  function persist(msgs) {
    localStorage.setItem(MSGS_STRING, JSON.stringify(msgs));
  }

  useEffect(() => {
    setMsgs(JSON.parse(localStorage.getItem(MSGS_STRING)) || []);
  }, []);

  useEffect(() => {
    persist(msgs);
  }, [msgs]);

  function add(msg, owner) {
    const msgToAdd = {
      id: `${Math.random()}-${Date.now()}`,
      text: msg,
      owner,
      time: Date.now(),
    };
    setMsgs(msgs => [...msgs, msgToAdd]);
  }

  function remove(id) {
    setMsgs(msgs => msgs.filter(x => x.id !== id))
  }

  return (
    <messagesContext.Provider value={{ add, remove, messages: msgs }}>
      {children}
    </messagesContext.Provider>
  );
};
