import Head from 'next/head';
import styled from 'styled-components';
import { ourWorkList, ourWorkPaths } from 'components/OurWorkList';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  max-width: 100%;
  padding: 50px 0;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter}
    width: 85%;
  }
  ${(props) => props.theme.columnStartCenter};
  width: 75%;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 58px;
  font-weight: 700;
`;

const TitleType = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 30px;
  padding-left: 5px;
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter}
    width: 85%;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 75%;
`;

const Img = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 55vw;
  }
  /* background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover; */
  border: 1px solid ${(props) => props.theme.blackColor};
  width: 50%;
  height: 30vw;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
    margin-top: 50px;
    margin-left: 0;
  }
  ${(props) => props.theme.columnStartCenter};
  width: 35%;
  /* height: 50vw; */
  margin-left: 50px;
`;

const TextSection = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const TextTitle = styled.div`
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const TextContent = styled.div`
  ${(props) => props.theme.flexStartCenter};
  font-size: 16px;
  line-height: 24px;

  word-break: keep-all;
`;

const ColorBox = styled.div`
  border: 1px solid #9e9e9e;
  width: 40px;
  height: 40px;
  :not(:last-child) {
    margin-right: 5px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 15%;
  height: 100%;
  padding: 30px 0;
`;

const LinkBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  :hover {
    opacity: 0.7;
  }
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
`;

const OurWork = (props) => {
  const { title, type, img, duration, keywords, purpose, url } =
    props.detail[0];

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
        <Title>{title}</Title>
        <TitleType>{type}</TitleType>
      </TitleContainer>
      <ContentContainer>
        <Img imgUrl={img} />
        <TextContainer>
          <TextSection>
            <TextTitle>제작기간</TextTitle>
            <TextContent>{duration}</TextContent>
          </TextSection>
          <TextSection>
            <TextTitle>키워드</TextTitle>
            <TextContent>{keywords}</TextContent>
          </TextSection>
          <TextSection>
            <TextTitle>COLOR</TextTitle>
            <TextContent>
              <ColorBox style={{ backgroundColor: '#ff8570' }} />
              <ColorBox style={{ backgroundColor: '#fafafa' }} />
              <ColorBox style={{ backgroundColor: '#333333' }} />
            </TextContent>
          </TextSection>
          <TextSection>
            <TextTitle>기획의도</TextTitle>
            <TextContent>{purpose}</TextContent>
          </TextSection>
        </TextContainer>
        <LinkContainer>
          <LinkBtn onClick={() => window.open(url)}>사이트 바로보기</LinkBtn>
        </LinkContainer>
      </ContentContainer>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const paths = await ourWorkPaths;

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const res = await ourWorkList;
  const detail = res.filter((r) => r.id === id);

  return {
    props: { detail },
  };
};

export default OurWork;
