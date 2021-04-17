import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/Auth';
import { MessageProvider } from './context/Messages';
import { NotificationProvider } from './context/Notification';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <NotificationProvider delay={2000}>
        <MessageProvider>
          <App />
        </MessageProvider>
      </NotificationProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
