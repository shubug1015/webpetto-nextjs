import styled from 'styled-components';
import Button from 'components/Button';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding: ${(props) => props.theme.mobilePadding};
  }
  ${(props) => props.theme.columnCenter}
  position: relative;
  width: 100%;
  padding: ${(props) => props.theme.pagePadding};
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
    margin-top: 100px;
    margin-bottom: 50px;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 75%;
  margin-bottom: 80px;
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
  font-size: 30px;
  font-weight: 700;
  margin-top: 50px;
`;

const Title = styled.div`
  line-height: 30px;
  word-break: keep-all;
  :not(:last-child) {
    margin-bottom: 24px;
  }
  @media only screen and (max-width: 900px) {
    :not(:last-child) {
      margin-bottom: 18px;
    }
  }
`;

const BtnContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 75%;
  height: 45px;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    position: static;
    width: 60vw;
    height: 60vw;
    margin-top: 50px;
  }
  position: absolute;
  top: 50%;
  right: 15%;
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 30vw;
  height: 30vw;
`;

const Contact = ({ contactRef }) => (
  <Container ref={contactRef}>
    <TitleContainer>
      <Subtitle>Contact</Subtitle>
      <Titles>
        <Title>준비되신 클라이언트만 문의해주세요.</Title>
        <Title>실패할 프로젝트는 하지 않습니다.</Title>
        <Title>즉, 저희가 하는 프로젝트는 성공합니다.</Title>
      </Titles>
    </TitleContainer>
    <BtnContainer>
      <Button color={'black'} url={'/contact'} text={'문의하기'} />
    </BtnContainer>
    <Image imgUrl='/logo_1.png' />
  </Container>
);

export default Contact;
