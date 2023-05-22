import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding-top: 100px;
    padding-bottom: 50px;
    /* padding: ${(props) => props.theme.mobilePadding}; */
  }
  ${(props) => props.theme.columnCenter}
  position: relative;
  width: 100%;
  padding: ${(props) => props.theme.pagePadding};
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 75%;
`;

const Subtitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 3.5vw;
  }
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  opacity: 0.5;
`;

const Titles = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 5.5vw;
    margin-top: 30px;
  }
  font-size: 42px;
  font-weight: 700;
  margin-top: 50px;
`;

const Title = styled.div`
  :not(:last-child) {
    margin-bottom: 24px;
  }
  @media only screen and (max-width: 900px) {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter};
    width: 85%;
  }
  ${(props) => props.theme.flexBetweenCenter}
  width: 75%;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 15px;
    line-height: 28px;
    width: 100%;
    margin-top: 50px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 3.5vw;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 50%;
  margin-top: 80px;
  word-break: keep-all;
  font-size: 18px;
`;

const TextSection = styled.div`
  @media only screen and (max-width: 900px) {
    width: 95%;
  }
  width: 100%;
  padding: 15px 0;
  line-height: 32px;
  word-break: keep-all;
`;

const TextLine = styled.div``;

const Underline = styled.span`
  border-bottom: 1px solid ${(props) => props.theme.blackColor};
`;

const SloganContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 30px;
  }
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 50%;
  margin-top: 70px;
  opacity: 0.2;
`;

const Slogan = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100px;
`;

const SloganTextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    align-items: flex-start;
  }
  ${(props) => props.theme.columnCenter};
  align-items: flex-end;
  width: 100%;
`;

const SloganText = styled.div`
  font-weight: 900;
`;

const About = ({ aboutRef }) => (
  <Container ref={aboutRef}>
    <TitleContainer>
      <Subtitle>ABOUT</Subtitle>
      <Titles>
        <Title>웹페토는 웹사이트가 아닌</Title>
        <Title>브랜드를 만듭니다.</Title>
      </Titles>
    </TitleContainer>
    <ContentContainer>
      <TextContainer>
        <TextSection>
          <TextLine>귀사의 브랜드를 제대로 파악하지 못한,</TextLine>
          <TextLine>
            예쁘기만 한 사이트는{' '}
            <Underline style={{ marginRight: '5px' }}>
              저렴한 곳에 맡기셔도 좋습니다.
            </Underline>
          </TextLine>
          <TextLine>
            시중에는 공장식으로 찍어내는 저가형 업체가 많습니다.
          </TextLine>
        </TextSection>
        <TextSection>
          <TextLine>
            그러나 웹사이트는 <Underline>회사의 얼굴</Underline>입니다.
          </TextLine>
          <TextLine>단순한 구색이 아닌 진정으로 회사를 나타내는,</TextLine>
          <TextLine>그래서 큰 차이를 만들어낼 수 있는,</TextLine>
          <TextLine>
            <Underline>진짜 웹사이트</Underline>를 만들고 싶으신 클라이언트를
            모십니다.
          </TextLine>
        </TextSection>
      </TextContainer>
      <SloganContainer>
        <Slogan imgUrl='/slogan_black.png' />
        <SloganTextContainer>
          <SloganText>* Zepetto: 피노키오를 만든 목수 할아버지</SloganText>
          {/* <SloganText>~~~~~~~~~~~~~~~~~~~~~</SloganText>
          <SloganText>~~~~~~~~~~~~~~~~~~~~~</SloganText>
          <SloganText>~~~~~~~~~~~~~~~~~~~~~</SloganText> */}
        </SloganTextContainer>
      </SloganContainer>
    </ContentContainer>
  </Container>
);

export default About;
