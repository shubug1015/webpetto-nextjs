import styled from 'styled-components';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

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
    margin-top: 100px;
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
    width: 85%;
    height: 350px;
  }
  ${(props) => props.theme.flexCenter}
  width: 76%;
  height: 550px;
  margin-top: 100px;
  flex-wrap: wrap;
  cursor: grab;
`;

const List = styled.div`
  @media only screen and (max-width: 900px) {
    height: 320px;
  }
  height: 520px;
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.3);
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 50px;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 50%;
`;

const ListTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
    line-height: 30px;
  }
  ${(props) => props.theme.flexStartCenter};
  height: 50%;
  font-size: 22px;
  font-weight: 700;
  word-break: keep-all;
  line-height: 40px;
  padding: 0 10px;
`;

// const ListContent = styled.div`
//   @media only screen and (max-width: 900px) {
//     font-size: 2.5vw;
//   }
//   font-size: 1.2vw;
//   width: 90%;
//   font-weight: 500;
//   line-height: 28px;
//   word-break: keep-all;
//   opacity: 0.9;
// `;

const BtnContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 85%;
    font-size: 14px;
  }
  ${(props) => props.theme.flexEndCenter}
  width: 75%;
  margin-top: 80px;
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

const Column = ({ columnRef }) => {
  const list = [
    {
      id: 0,
      title: `웹사이트 어떻게 '제대로' 만들 수 있을까?`,
      content:
        "'홍보를 원하는 그 무엇이든' 180만원대 저렴한 비용으로 홍보를 해 주는 마케팅 방식. '웹페토'에만 존재하는 기술을 알려드립니다.",
      img: '/column_1.png',
    },
    {
      id: 1,
      title: '왜 나는 웹사이트 제작 업체에게 항상 속는 걸까?',
      content:
        '왜 웹사이트 제작 업체에게 당한 피해자가 많을까요? 피해자가 되지 않는 비법을 알려드립니다.',
      img: '/column_2.jpg',
    },
    // {
    //   id: 2,
    //   title: '검색엔진 최적화, 네이버가 망하는 시기 예언!',
    //   content:
    //     '이제는 네이버도 예전처럼 네이버 컨텐츠만 노출하면서 독점체제를 유지하는 것이 아닌, 구글처럼 검색 알고리즘이 변화하고 있습니다.',
    //   img: '/column_1.png',
    // },
    // {
    //   id: 3,
    //   title: '검색엔진 최적화, 네이버가 망하는 시기 예언!',
    //   content:
    //     '이제는 네이버도 예전처럼 네이버 컨텐츠만 노출하면서 독점체제를 유지하는 것이 아닌, 구글처럼 검색 알고리즘이 변화하고 있습니다.',
    //   img: '/column_1.png',
    // },
  ];

  return (
    <Container ref={columnRef}>
      <TitleContainer>
        <Subtitle>Column</Subtitle>
        <Titles>
          <Title>웹사이트 제작 전문팀의 칼럼</Title>
          {/* <Title>직접 읽고 판단해보세요.</Title> */}
        </Titles>
      </TitleContainer>
      <ContentContainer>
        {/* <Content>속고있지는 않으셨나요?</Content> */}
        <Content>업체에게 휘둘리지 마세요.</Content>
        <Content>직접 읽고 판단하세요.</Content>
      </ContentContainer>
      <ListContainer>
        <Swiper
          style={{
            width: '100%',
            height: '110%',
          }}
          breakpoints={{
            100: {
              slidesPerView: 1.1,
            },
            1200: {
              slidesPerView: 3.1,
            },
          }}
          scrollbar={{ draggable: true }}
        >
          {list &&
            list.length > 0 &&
            list.map((l) => (
              <SwiperSlide key={l.id}>
                <Link href={`/column/${l.id + 1}`}>
                  <List>
                    <Image imgUrl={l.img} />
                    <ListTitle>{l.title}</ListTitle>
                  </List>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </ListContainer>
      <BtnContainer>
        <Link href='/column'>
          <Btn>전체 칼럼 보기</Btn>
        </Link>
      </BtnContainer>
    </Container>
  );
};

export default Column;
