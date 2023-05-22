import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

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
    line-height: 25px;
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
    width: 90%;
  }
  ${(props) => props.theme.columnCenter}
  width: 80%;
`;

const Section = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 100%;
  :not(:last-child) {
    margin-bottom: 50px;
  }
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
    transform: translate(0, -10px);
  }
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    border-right: none;
    width: 100%;
    padding-left: 2.5%;
  }
  ${(props) => props.theme.columnStartCenter};
  justify-content: center;
  border-right: 2px solid ${(props) => props.theme.blackColor};
  width: 65%;
  height: 150px;
  padding-left: 2.5%;
  padding-right: 2.5%;
  margin-right: 5%;
  word-break: keep-all;
`;

const SectionTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 17px;
    margin-bottom: 15px;
    line-height: 30px;
  }
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  margin-bottom: 30px;
`;

const SectionContent = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 13px;
    line-height: 22px;
  }
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  opacity: 0.8;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 30%;
  height: 250px;
`;

const Column = () => {
  const list = [
    {
      id: 0,
      title: "웹사이트 어떻게 '제대로' 만들 수 있을까?",
      content: '요약 내용',
      imgUrl: '/column_1.png',
    },
    {
      id: 1,
      title: '웹사이트 제작 업체 선정하는 꿀팁!',
      content: '요약 내용',
      imgUrl: '/column_2.jpg',
    },
  ];
  return (
    <Container>
      <Head>
        <title>Column | 웹사이트 제작 N0.1 Webpetto(웹페토)</title>
        <meta
          name='description'
          content='웹페토만의 칼럼, 직접 읽고 판단해보세요.'
        />
        <link rel='canonical' href='https://webpetto.com/column' />
      </Head>
      <TitleContainer>
        <Title>웹사이트 제작 전문팀의 칼럼</Title>
        <Subtitle>여러분의 사이트입니다.</Subtitle>
        <Subtitle>칼럼을 통해 직접 판단하세요.</Subtitle>
        {/* <Subtitle>속고있지는 않으셨나요?</Subtitle>
        <Subtitle>길게 말하지 않겠습니다. 직접 읽고 판단해보세요.</Subtitle> */}
      </TitleContainer>
      <SectionContainer>
        {list &&
          list.length > 0 &&
          list.map((l) => (
            <Link href={`/column/${l.id + 1}`}>
              <Section key={l.id}>
                <TextContainer>
                  <SectionTitle>{l.title}</SectionTitle>
                  <SectionContent>{l.content}</SectionContent>
                </TextContainer>
                <Image imgUrl={l.imgUrl} />
              </Section>
            </Link>
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

export default Column;
