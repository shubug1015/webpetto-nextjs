import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  align-items: flex-start;
  width: 100vw;
  max-width: 100%;
  padding-top: 200px;
  padding-left: 200px;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 1000px;
  height: 500px;
`;

const Test = () => {
  return (
    <Container>
      <ImageWrap>
        <Image
          src='https://sgf-test.s3.ap-northeast-2.amazonaws.com/1.png'
          alt='Img'
          layout='fill'
          objectFit='cover'
        />
      </ImageWrap>
      <ImageWrap>
        <Image
          src='https://sgf-test.s3.ap-northeast-2.amazonaws.com/3.png'
          alt='Img'
          layout='fill'
          objectFit='cover'
        />
      </ImageWrap>
    </Container>
  );
};

// export const getServerSideProps = () => {
//   return {
//     redirect: {
//       destination: '/',
//       permanent: false,
//     },
//   };
// };

export default Test;
