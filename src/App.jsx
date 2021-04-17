import styled from 'styled-components';
import { Header } from "./components/Header";
import { MessageBox } from './components/MessageBox';
import { MessageList } from './components/MessageList';

const ContentArea = styled.div`
  width: clamp(300px, 60vw, 1170px);
  margin: 0 auto;

`;

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  margin-top: auto;
  text-align: center;
  padding: 2rem;
  background-color: #111;
`;

function App() {
  return (
    <Root>
      <Header brandName="Twatter" />
      <ContentArea>
        <MessageBox />
        <MessageList />
      </ContentArea>
      <Footer>
        Made with ♥️
        {' | '}
        &copy;
        {' '}
        <a style={{color: '#fff'}} href="https://github.com/kopenkinda">kopenkinda</a></Footer>
    </Root>
  );
}

export default App;
