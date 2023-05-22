import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { IoPaperPlane } from 'react-icons/io5';
import { FiPaperclip } from 'react-icons/fi';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 70px 0;
  }
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  max-width: 100%;
  padding: 150px 0;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 75%;
  margin-bottom: 100px;
  word-break: keep-all;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 28px;
    line-height: 40px;
  }
  font-size: 55px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Subtitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  font-size: 20px;
  font-weight: 400;
  padding-left: 5px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const SectionContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
  }
  ${(props) => props.theme.flexBetweenCenter}
  width: 75%;
  flex-wrap: wrap;
`;

const Section = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter}
    width: 100%;
  }
  ${(props) =>
    props.display ? props.theme.columnStartCenter : props.theme.flexCenter}
  width: ${(props) => props.width};
`;

const Box = styled.div`
  @media only screen and (max-width: 900px) {
    height: 60vw;
    box-shadow: 1px 1px 12px 1px rgba(0, 0, 0, 0.1);
  }
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: ${(props) => props.height};
`;

const Icon = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color:  ${(props) =>
    props.imgHover ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
  width: 100%;
  height: 100%;
  visibility: ${(props) => (props.imgHover ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.imgHover ? 1 : 0)};
  transition: background-color 0.3s ease-in-out, visibility 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
`;

const IconBox = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.blackColor};
  border: 1px solid #dbdbdb;
  border-radius: 27px;
  width: 55px;
  height: 55px;
  color: ${(props) => props.theme.whiteColor};
  font-size: 18px;
  cursor: pointer;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  transition: opacity 0.3s ease-in-out;
  /* :not(:last-child) {
    margin-right: 15px;
  } */
`;

const OurWork = () => {
  const list = [
    {
      id: 0,
      display: 'column',
      width: '33%',
      section: [
        {
          id: 1,
          width: '100%',
          height: '70vh',
          imgUrl: '/portfolio_1.png',
          url: 'https://webpetto.dhicta2upu5zd.amplifyapp.com',
        },
      ],
    },
    {
      id: 1,
      display: 'column',
      width: '33%',
      section: [
        {
          id: 2,
          width: '100%',
          height: '42vh',
          imgUrl: '/portfolio_2.png',
          url: 'https://webpetto.d2xngy89xbu3gc.amplifyapp.com',
        },
        {
          id: 3,
          width: '100%',
          height: '28vh',
          imgUrl: '/portfolio_3.png',
          url: 'https://webpetto.d2cpkqwx3bl9jj.amplifyapp.com',
        },
      ],
    },
    {
      id: 2,
      display: 'column',
      width: '33%',
      section: [
        {
          id: 4,
          width: '100%',
          height: '21vh',
          imgUrl: '/portfolio_4.png',
          url: 'https://webpetto.d1dc8nw7wsra2l.amplifyapp.com',
        },
        {
          id: 5,
          width: '100%',
          height: '49vh',
          imgUrl: '/portfolio_5.png',
          url: 'https://webpetto.d1u6bv97w93hxr.amplifyapp.com',
        },
      ],
    },
    {
      id: 3,
      display: 'flex',
      width: '100%',
      section: [
        {
          id: 6,
          width: '50%',
          height: '28vh',
          imgUrl: '/portfolio_6.png',
          url: 'https://webpetto.d3019aesm5q6ca.amplifyapp.com',
        },
        {
          id: 7,
          width: '50%',
          height: '28vh',
          imgUrl: '/portfolio_7.png',
          url: 'https://webpetto.d3p1ights4yfem.amplifyapp.com',
        },
      ],
    },
  ];

  const [imgId, setImgId] = useState(null);

  const onImg = (id) => setImgId(id);

  return (
    <Container>
      <Head>
        <title>Our Work | 웹사이트 제작 N0.1 Webpetto(웹페토)</title>
        <meta
          name='description'
          content='웹페토의 다양한 포트폴리오를 보고 차이를 느껴보세요.'
        />
        <link rel='canonical' href='https://webpetto.com/our_work' />
      </Head>
      <TitleContainer>
        <Title>다를 수 밖에 없는 포트폴리오</Title>
        <Subtitle>자신 없으면 시작하지 않았습니다.</Subtitle>
        <Subtitle>직접 판단해보세요.</Subtitle>
        {/* <Subtitle>결과로 말하겠습니다.</Subtitle>
        <Subtitle>무엇이, 어떻게 다른지 직접 확인하세요.</Subtitle> */}
      </TitleContainer>
      <SectionContainer>
        {list &&
          list.length > 0 &&
          list.map((l) => (
            <Section
              key={l.id}
              display={l.display === 'column'}
              width={l.width}
            >
              {l.section.map((s) => (
                <Box
                  key={`section${s.id}`}
                  height={s.height}
                  imgUrl={s.imgUrl}
                  onMouseEnter={() => onImg(s.id)}
                  onMouseLeave={() => onImg(null)}
                >
                  <Icon imgHover={s.id === imgId}>
                    <IconBox onClick={() => window.open(s.url)}>
                      <IoPaperPlane />
                    </IconBox>
                    {/* <Link href='/our_work/[id]' as={`/our_work/${s.id}`}>
                      <IconBox>
                        <FiPaperclip />
                      </IconBox>
                    </Link> */}
                  </Icon>
                </Box>
              ))}
            </Section>
          ))}
      </SectionContainer>
    </Container>
  );
};

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default OurWork;
