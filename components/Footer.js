import styled from 'styled-components';

const Container = styled.header`
  ${(props) => props.theme.flexCenter}
  width: 100vw;
  max-width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  /* height: 300px; */
  z-index: 99;
`;

const Content = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 90%;
`;

// const TopContainer = styled.div`
//   margin-bottom: 50px;
// `;

// const BottomContainer = styled.div`
//   ${(props) => props.theme.flexStartCenter}
// `;

// const Logo = styled.div`
//   font-size: 30px;
// `;

const LeftContainer = styled.div`
  ${(props) => props.theme.columnStartCenter}
  height: 60px;
`;

const LeftText = styled.div``;

const RightContainer = styled.div`
  ${(props) => props.theme.columnStartCenter}
  height: 60px;
  margin-left: 40px;
`;

const RightText = styled.div`
  font-size: 13px;
  line-height: 20px;
  word-break: keep-all;

  :not(:first-child) {
    margin-bottom: 10px;
  }
`;

const Footer = () => (
  <Container>
    <Content>
      <LeftContainer>
        <LeftText>@2020 Webpetto</LeftText>
      </LeftContainer>
      <RightContainer>
        <RightText>
          케이피엘(KPL) | 사업자 등록번호: 665-70-00358 | 대표: 고동섭
        </RightText>
        <RightText>서울시 서대문구 세검정로 61-45, 101호</RightText>
      </RightContainer>
    </Content>
  </Container>
);

export default Footer;
