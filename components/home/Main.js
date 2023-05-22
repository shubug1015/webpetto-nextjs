import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 100%;
  height: calc(100vh - 90px);
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.columnStartCenter}
  justify-content: center;
  width: 75%;
  height: 100%;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.columnStartCenter}
  justify-content: center;
  width: 80%;
  height: 85%;
`;

const Text = styled.div`
  ${(props) => props.theme.flexStartCenter};
  font-size: 3vw;
  font-weight: 500;
  word-break: keep-all;
  letter-spacing: -2px;
  :not(:last-child) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 30px;
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

const Text2 = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
  ${(props) => props.theme.flexStartCenter};
  font-size: 2.5vw;
  font-weight: 300;
  line-height: 40px;
  margin-bottom: 70px;
  word-break: keep-all;
  letter-spacing: -2px;
`;

const Highlight = styled.div`
  color: ${(props) => props.theme.mainColor};
`;

const ClickContainer = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  ${(props) => props.theme.columnCenter};
  width: 100%;
  height: 5%;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  word-break: keep-all;
`;

const ClickText = styled.div``;

const Scroll = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 10%;
  font-size: 25px;
  opacity: 0.9;
`;

const Mouse = styled.div`
  ${(props) => props.theme.flexCenter}
  border: 2px solid ${(props) => props.theme.blackColor};
  border-radius: 20px;
  width: 25px;
  height: 40px;
`;

const bounce = keyframes`
  0% {
    transform: translate(0, -8px);
  }
  /* 50% {
    transform: translate(0, -10px);
  } */
  100% {
    transform: translate(0, -2px);
  }
`;

const Icon = styled.div`
  animation: ${bounce} 1.5s infinite;
  background-color: ${(props) => props.theme.blackColor};
  border-radius: 15px;
  width: 3px;
  height: 6px;
  color: ${(props) => props.theme.blackColor};
  font-size: 20px;
`;

const Main = ({ mainRef }) => (
  <Container ref={mainRef}>
    <Content>
      <TextContainer>
        <Text2>평범한 사이트를 만들 분들은 돌아가주세요.</Text2>
        <Text>웹페토는</Text>
        <Text>
          <Highlight>가치를 알아 볼 수 있는 똑똑한</Highlight>
        </Text>
        <Text>클라이언트와 함께합니다.</Text>
      </TextContainer>
      <ClickContainer>
        {/* <ClickText>위 조건에 해당한다고 생각하는 클라이언트 분들은</ClickText> */}
        <ClickText>왜 웹페토일까요?</ClickText>
      </ClickContainer>
      <Scroll>
        {/* <BsChevronDoubleDown /> */}
        <Mouse>
          <Icon />
        </Mouse>
      </Scroll>
    </Content>
  </Container>
);

export default Main;
