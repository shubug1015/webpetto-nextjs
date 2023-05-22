import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  background: linear-gradient(to right, #8e93ac, #7579e7);
  width: 100%;
  height: ${(props) => (props.loadingParam ? '100vh' : 0)};
  overflow: hidden;
  transition: height 0.7s ease-in-out;
  z-index: 1;
`;

// const ImageContainer = styled.div`
//   @media only screen and (max-width: 900px) {
//     width: 90%;
//     height: 11vw;
//     margin-bottom: 50px;
//   }
//   position: relative;
//   width: 75%;
//   height: 9vw;
//   margin-bottom: 100px;
// `;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 22px;
    line-height: 30px;
  }
  color: #ffffff;
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 100px;
  line-height: 48px;
`;

const bounce = keyframes`
  0% {
    transform: translate(0, 0);
  } 
  25% {
    transform: translate(0, -8px)
  }
  50%{
    transform: translate(0, -10px)
  }
  75%{
    transform: translate(0, -8px)
  }
  100%{
    transform: translate(0, 0)
  }
`;

const TextContainer = styled.div`
  ${(props) => props.theme.flexCenter}
`;

const Text = styled.div`
  font-size: 18px;
  color: #fafafa;
  box-shadow: 1px 2px 12px 1px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  padding: 20px 40px;
  :hover {
    box-shadow: 1px 2px 7px 1px rgba(0, 0, 0, 0.4);
  }
  transition: box-shadow 0.3s ease-in-out, padding 0.3s ease-in-out;
  cursor: pointer;
`;

const Logo = styled.div`
  @media only screen and (max-width: 900px) {
    width: 40px;
    height: 40px;
  }
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 60px;
  height: 60px;
  animation: ${bounce} 1s linear infinite;
  margin-bottom: 30px;
`;

const Loader = ({ loaderRef, loading }) => {
  return (
    <Container ref={loaderRef} loadingParam={loading}>
      {/* <ImageContainer>
        <Image src='/slogan.png' alt='웹페토 About 슬로건' layout='fill' />
      </ImageContainer> */}
      <Title>
        현재 홈페이지 리뉴얼 중입니다. <br />
        빠른 시일 내로 찾아뵙겠습니다 :)
      </Title>
      <Logo imgUrl="/loader.png" />
      <TextContainer>
        <Text
          onClick={() => {
            window.open('http://pf.kakao.com/_xbIxnbK/chat');
          }}
        >
          웹페토에게 문의하기
        </Text>
      </TextContainer>
    </Container>
  );
};

export default Loader;
