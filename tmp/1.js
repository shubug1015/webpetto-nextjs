import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100vw;
  max-width: 100%;
`;

const ContentsContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  ${(props) => props.theme.columnStartCenter};
  width: 50%;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    margin-bottom: 50px;
  }
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Subtitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  font-size: 18px;
  margin-bottom: 10px;
  opacity: 0.7;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 28px;
    line-height: 45px;
  }
  width: 100%;
  font-size: 39px;
  font-weight: 900;
  line-height: 55px;
  word-break: keep-all;
`;

const TextSection = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  width: 100%;
  padding: 30px 0;
  line-height: 30px;
  font-size: 18px;
  font-weight: 400;
  opacity: 0.9;
`;

const Border = styled.span`
  @media only screen and (max-width: 900px) {
    font-size: 17px;
  }
  border-bottom: 2px solid ${(props) => props.theme.blackColor};
  font-weight: 500;
`;

const SectionTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 22px;
  }
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  margin-top: 70px;
`;

const Highlight = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 21px;
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
  font-size: 26px;
  font-weight: 700;
  font-style: oblique;
  line-height: 45px;
  color: ${(props) => props.theme.mainColor};
  margin: 70px 0;
  word-break: keep-all;
`;

const Example = styled.div`
  width: 100%;
  height: 150px;
  background-color: pink;
`;

const Column1 = () => {
  return (
    <Container>
      <ContentsContainer>
        <TitleContainer>
          <Subtitle>전문가 칼럼 1</Subtitle>
          <Title>웹사이트 어떻게 '제대로' 만들 수 있을까?</Title>
        </TitleContainer>
        <TextSection>
          여기까지 오신 분들이라면 제대로 된 웹사이트를 만들고 싶어하시는 분들
          일겁니다. 잘 찾아오셨습니다. 이 글을 끝까지 읽어보시면 제대로 된
          웹사이트를 만드는데에 도움이 될 수 있을 겁니다.
        </TextSection>
        <TextSection>
          웹사이트를 만들기 전 선행되어야하는 '질문'이 있습니다.
        </TextSection>
        <Highlight>"고객님께서는 왜 웹사이트를 만드시나요?"</Highlight>
        <TextSection>
          이 질문에 대한 답은 여러가지 일 수 있습니다. 그러나 이 질문에 대한
          답을 하지 않고 웹사이트를 제작하게 된다면 모래성을 쌓게 되는 것입니다.
        </TextSection>
        <TextSection>
          웹사이트를 만드는 이유는 여러가지가 있습니다. 내 회사를 매력있게
          소개하기 위해, 구매전환을 일으키기 위해, 잘 팔리는 쇼핑몰을 만들기
          위해 등 많은 이유가 있습니다.
        </TextSection>
        <TextSection>
          그러나 자신이 웹사이트를 왜 만드는지 분명한 목적 없이 남들 다 하니까,
          주변에서 만들라고 하더라와 같은 이유로 만드시려는 분들은 제대로 된
          이유라고 할 수 없습니다.
        </TextSection>
        <TextSection>
          내가 왜 웹사이트를 만들려고하는지 확실한 목적, 방향성을 정해야 제대로
          된 웹사이트를 만들 수 있습니다. 목적을 분명히 하지 않고 웹사이트를
          만든다면 애매하게 제작되어 오래가지 못합니다.
        </TextSection>
        <TextSection>
          위 질문에 대한 답을 생각해보신 후 글을 마저 읽어주세요.
        </TextSection>
        <TextSection>
          왜 만드는지에 대한 질문에 답을 했다면 이제 본격적으로 웹사이트를
          만드는 작업에 들어갑니다.
        </TextSection>
        <TextSection>
          웹사이트를 만드는 작업은 크게 <Border>기획</Border>,{' '}
          <Border>디자인</Border>, <Border>개발 및 런칭</Border> 3가지로
          나누어집니다.
        </TextSection>
        <SectionTitle>1. 사이트 기획</SectionTitle>
        <TextSection>
          기획단계는 웹사이트의 목적정의, 타켓설정및 브랜딩, 요구사항 분석을
          하는 단계입니다. 기획은 하나의 목표를 위하여 합니다.
        </TextSection>
        <Highlight>"고객님께서 사이트를 만드시는 이유를 성취하도록"</Highlight>
        <TextSection>
          위에서 답한 질문에 대한 구체적인 방안이라고 이해하시면 됩니다.
          소요되는 시간에 실제 눈으로 보이는 것은 별로 없는 단계이지만
          웹사이트를 제작하기 위해 가장 중요한 과정입니다.
        </TextSection>
        <TextSection>
          기획을 탄탄하게 하지 않고 웹사이트를 제작하는 것은 밑빠진 독에
          물붓기라고 할 수 있습니다.
        </TextSection>
        <TextSection>
          체형마다 어울리는 옷이 다릅니다. 고객님께 가장 잘 어울리는 옷을
          찾아야겠죠.
        </TextSection>
        <TextSection>
          마찬가지로 고객님마다 사이트를 제작하는 이유가 다르기 때문에 맞춤형
          기획을 해야합니다.
        </TextSection>
        <TextSection>
          저희 웹페토에는 수많은 프로젝트를 성공시킨 훌륭한 기획전략팀이
          있습니다. 고객님께서 원하시던 사이트보다 더 마음에 드는 사이트를
          기획해드립니다.
        </TextSection>
        <SectionTitle>2. 디자인 작업</SectionTitle>
        <TextSection>
          이 단계에서는 레이아웃 선정, 브랜드 이미지 기반 UI/UX 제작, 사이트에
          필요한 디자인 요소(이미지, 동영상) 제작을 합니다.
        </TextSection>
        <TextSection>
          레이아웃 선정 및 UI/UX를 제작하기 위해서는 기준이 필요합니다.
        </TextSection>
        <TextSection>
          그 기준은 바로 처음 질문과 연관됩니다. 처음에 고객님께서 답합
          '웹사이트를 만드는 이유' 즉 기획에 의해 기준이 정해져야합니다.
        </TextSection>
        <TextSection>
          예를들어 기획에서 설정한 타켓군이 모바일 유저들이라면, 레이아웃 선정시
          모바일 친화적인 레이아웃으로 구성해야 할 것입니다.
        </TextSection>
        <TextSection>
          UI/UX 같은 경우 메뉴바의 위치 또한 모바일 사용자들이 사용하기 편하도록
          오른쪽 상단에 배치한다든지와 같이 기획에 의하여 디자인이 결정되어야
          합니다.
        </TextSection>
        <TextSection>
          단순히 괜찮아보여서, 추가하면 이쁠거같아서와 같은 이유로 웹사이트를
          제작하는 경우를 많이 보았습니다.
        </TextSection>
        <TextSection>
          애매하게 제작되어 모두 하나같이 오래가지 못했습니다. 철저히 목적에
          부합하는 디자인을 해야 웹사이트는 최고의 효율을 낼 수 있습니다.
        </TextSection>
        <SectionTitle>3. 개발 및 런칭</SectionTitle>
        <TextSection>
          기획과 디자인이 결정됐다면 이제 실제 웹사이트를 구현하는 일이
          남았습니다.
        </TextSection>
        <TextSection>
          많은 고객님들께서 이 단계의 진입장벽 때문에 사이트 제작문의를
          주십니다.
        </TextSection>
        <TextSection>
          기획이나 디자인같은 경우 고객님들께서 적극적으로 소통하시는거에 비해
          코드작업에 대해서는 전적으로 업체에 맡기는 경우가 많습니다.
        </TextSection>
        <TextSection>
          하지만 이런점 때문에 덤탱이를 쓰게 되는 경우를 많이 봤습니다.
        </TextSection>
        <TextSection>
          고객님께서 개발 지식이 없는 점을 악용하여 간단한 제작툴로 제작하고서는
          가격을 비싸게 받는 업체가 간혹 있습니다. 이런 업체에 속지 않을 수 있는
          방법에 대해 정리한 글이 있는데 참고하시면 도움이 되실겁니다.
        </TextSection>
        <TextSection style={{ color: 'blue' }}>
          <Link href='/column/2'>업체에 속지 않는 법</Link>
        </TextSection>
        <TextSection>
          이 부분은 웹페토를 시작하게 된 이유와도 관련돼 있습니다.
        </TextSection>
        <TextSection>
          웹사이트 개발업체는 많이 있습니다. 하지만 가격대에 맞는 퀼리티로
          제대로 제작해주는 곳은 찾기 힘들었습니다. 아무래도 제대로 만들려면
          고급인력이 필요하다보니, 수익률을 높이기 위하여 눈감고 아웅하기 식으로
          제작은 저렴하게 하고 가격만 비싸게 받아 고객님들을 기만하는 업체들에
          환멸이 났습니다.
        </TextSection>
        <TextSection>
          웹페토는 이러한 불량업체들이 업계에서 퇴출되고 고객님께서 합당한
          서비스를 받으실 수 있도록 시작했습니다.
        </TextSection>
        <TextSection>
          물론 저희말고도 양심적으로 사이트를 제작하는 곳도 있습니다. 이러한
          업체를 잘 물색하셔서 제대로 된 웹사이트를 제작하시면 좋겠습니다.
        </TextSection>
        <TextSection>
          여기까지 제대로 된 웹사이트를 만들 수 있는 방법에 대해
          소개해드렸습니다. 저희에게 제작 의뢰를 맡기지않으시더라도, 웹사이트를
          제작하시는데에 조금이나마 도움이 되셨으면 좋겠습니다.
        </TextSection>
        <TextSection>
          웹사이트 제작에 관하여 궁금하신 점 있으시다면 편하게 문의주세요 : )
        </TextSection>
      </ContentsContainer>
    </Container>
  );
};

export default Column1;
