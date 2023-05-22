import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IoPaperPlane } from 'react-icons/io5';
import { FiPaperclip } from 'react-icons/fi';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding: ${(props) => props.theme.mobilePadding};
  }
  ${(props) => props.theme.columnCenter}
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
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 15px;
    line-height: 28px;
    width: 85%;
    margin-top: 50px;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 75%;
  margin-top: 50px;
  word-break: keep-all;
  font-size: 18px;
`;

const Content = styled.div`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ListContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter}
    width: 85%;
  }
  ${(props) => props.theme.flexBetweenCenter}
  width: 75%;
  margin-top: 100px;
  flex-wrap: wrap;
`;

const List = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 50%;
  background-color: pink;
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

const BtnContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
    font-size: 14px;
  }
  ${(props) => props.theme.flexEndCenter}
  width: 75%;
  margin-top: 50px;
  font-size: 20px;
  font-weight: 700;
`;

const Btn = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.blackColor};
  padding-bottom: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    transform: translate(0, -5px);
  }
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const OurWork = ({ ourWorkRef }) => {
  const list = [
    {
      id: 0,
      section: [
        {
          id: 1,
          height: '95vh',
          imgUrl: '/portfolio_1.png',
          url: 'https://webpetto.dhicta2upu5zd.amplifyapp.com',
        },
      ],
    },
    {
      id: 1,
      section: [
        {
          id: 2,
          height: '57vh',
          imgUrl: '/portfolio_2.png',
          url: 'https://webpetto.d2xngy89xbu3gc.amplifyapp.com',
        },
        {
          id: 3,
          height: '38vh',
          imgUrl: '/portfolio_4.png',
          url: 'https://webpetto.d1dc8nw7wsra2l.amplifyapp.com/',
        },
      ],
    },
  ];

  const [imgId, setImgId] = useState(null);

  const onImg = (id) => setImgId(id);

  return (
    <Container ref={ourWorkRef}>
      <TitleContainer>
        <Subtitle>Our Work</Subtitle>
        <Titles>
          <Title>다를 수 밖에 없는 포트폴리오</Title>
        </Titles>
      </TitleContainer>
      <ContentContainer>
        <Content>아무리 입으로 떠들어도 결국 결과입니다.</Content>
        <Content>결과로 보여드립니다.</Content>
        {/* <Content>무엇이, 어떻게 다른지 직접 확인하세요.</Content> */}
      </ContentContainer>
      <ListContainer>
        {list &&
          list.length > 0 &&
          list.map((l) => (
            <List key={l.id}>
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
            </List>
          ))}
      </ListContainer>
      <BtnContainer>
        <Link href='/our_work'>
          <Btn>전체 포트폴리오 보기</Btn>
        </Link>
      </BtnContainer>
    </Container>
  );
};

export default OurWork;
