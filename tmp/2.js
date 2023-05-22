import styled from 'styled-components';

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
          <Subtitle>전문가 칼럼 2</Subtitle>
          <Title>웹사이트 제작 업체 선정하는 꿀팁!</Title>
        </TitleContainer>
        <TextSection>안녕하세요 웹페토입니다.</TextSection>
        <TextSection>
          여기까지 오신 분들은 웹사이트를 제작하기로 마음 먹으신 분들일 것으로
          예상됩니다.
        </TextSection>
        <TextSection>
          조금 더 전문성 있는 웹사이트를 제작하기 위해 업체를 통해 사이트 제작을
          결심하셨다면, 이제 좋은 업체를 선정하셔야합니다.
        </TextSection>
        <TextSection>
          업체 선정은 중요합니다. 잘못된 선택으로 인한 비용과 시간의 리스크는
          매우 크기 때문입니다.
        </TextSection>
        <TextSection>그러나 웹사이트 제작 업체가 너무 많습니다.</TextSection>
        <TextSection>
          업체를 통한 웹사이트를 제작을 진행 경험이 있다면 어느정도 선택기준이
          생겨 선택에 큰 어려움이 없습니다. 하지만 경험이 부족하거나
          처음이시라면 분명 업체 선정에 어려움을 겪습니다. 리스크가 클 뿐더러
          선택지가 많아 혼란스럽습니다.
        </TextSection>
        <TextSection>
          이런 분들을 위해 업체 선정을 위한 꿀팁을 알려드리겠습니다!
        </TextSection>
        <TextSection>
          <Border>
            우선 저가형 업체와 가격대가 있는 업체의 차이를 아셔야 합니다.
          </Border>
        </TextSection>
        <SectionTitle>저가형 업체</SectionTitle>
        <TextSection>
          보통 저가형 업체는 wix, 워드프레스 와 같은 사이트 제작툴​을 사용하여
          사이트를 제작합니다.
        </TextSection>
        <TextSection>
          이러한 제작툴로 정해진 템플릿으로 정해진 디자인으로만 제작합니다.
          일종의 사이트를 찍어내는 공장이라고 비유할 수 있습니다.
        </TextSection>
        <TextSection>
          이런 업체들은 이미 정해진 레이아웃, 디자인을 사용하다보니 고객님
          사이트에 개성과 특색을 부각시키기 어렵습니다.
        </TextSection>
        <TextSection>
          각자가 어울리는 옷이 다른데, 정해진 옷만 입을 수 있는 것입니다. 이
          중에 사이트에게 맞는 옷이 있다면 다행이지만, 맞지 않는 옷을 입어야
          한다면 사이트는 매력있게 보이기는 힘듭니다.
        </TextSection>
        <TextSection>
          또한 이런 저가형 업체들은 개발 가능한 기능들이 많이 제한되어 있습니다.
        </TextSection>
        <TextSection>
          많은 고객님께서 시중에 여러 저가형 업체들에게 필요한 기능들을 추가하여
          사이트 제작 문의 후, 힘들다는 답변에 지쳐 저희 웹페토에 찾아오시는
          경우가 많습니다.
        </TextSection>
        <TextSection>
          가격때문에 본인의 사이트에 필요한 기능을 타협하는 것은 장기적으로 볼
          때 잘못된 선택입니다. 필요한 기능이 안된다고 하면 주저없이 다른 업체를
          알아보시는 것을 추천합니다.
        </TextSection>
        <TextSection>
          저가형 업체들은 정해진 템플릿으로 작업을 하다보니 작업량은 적습니다.
          따라서 저렴한 비용으로 빠르게 사이트를 제작하실 수 있는 장점이
          있습니다.
        </TextSection>
        <TextSection>
          아직 본격적으로 사업을 운영하기 전이신 분들이나, 개인적인 용도로
          사이트를 제작하시는 분들께 추천드리는 업체입니다.
        </TextSection>
        <TextSection>
          보통 이런 저가형 업체는 크몽과 같은 재능기부 플랫폼에서 많이 찾아보실
          수 있습니다.
        </TextSection>
        <SectionTitle>가격대가 있는 업체</SectionTitle>
        <TextSection>
          다음은 어느 정도 가격대가 있는 업체입니다. 이런 업체들은 보통
          프레임워크와 코드작업을 통해 사이트를 제작합니다.
        </TextSection>
        <TextSection>
          그래서 템플릿을 사용하여 제작하는 저가형 업체보다 고급인력이 사용되고,
          작업량도 많아 가격대가 있습니다.
        </TextSection>
        <TextSection>
          그러나 이런 가격대가 있는 업체들은 타당한 가격인지 살펴보아야 합니다.
        </TextSection>
        <TextSection>
          간혹 가격만 비싸게 받고 실상은 저가형 업체와 똑같은 솔루션을 사용하는
          불량업체도 있습니다. 이런 불량업체들의 수법에 개발 지식이 없으신
          고객님들께서는 당하기 쉬워 조심하셔야 합니다.
        </TextSection>
        <TextSection>
          이런 불량업체들의 특징은 저가형 업체와 유사한 프로세스를 가지고 있다는
          점입니다.
        </TextSection>
        <TextSection>
          웹사이트 제작 경험이 많지 않으신 고객님들은 저가형 업체와 가격대가
          있는 업체들의 프로세스 차이를 알기 어렵습니다.
        </TextSection>
        <TextSection>
          이런 점을 노리고 저가형 업체에서 작업을 해주는 방식, 즉 정해진 디자인
          시안으로 웹사이트를 제작해주는 방식으로 웹사이트를 제작합니다. 따라서
          가격대가 있는 업체인데, 정해진 디자인 시안 중에 고르라고 한다면
          의심해봐야 합니다.
        </TextSection>
        <TextSection>
          이런 업체들을 거르는 다른 방법으로는 난이도가 있는 기능 제작을
          문의하는 방법입니다.
        </TextSection>
        <TextSection>
          개발자의 세계에는 농담처럼 하는 말이 있습니다.
        </TextSection>
        <Highlight>"돈과 시간만 있으면 무엇이든 만들 수 있다."</Highlight>
        <TextSection>
          다소 과장된 면이 있지만 어느정도 사실에 기반된 농담입니다. 고객님께서
          문의하시는 기능들은 견적이 맞지 않아 제작이 불가할 수는 있으나
          업체에서 못한다고 다른 업체를 알아보라고 한다면 업체의 실력을
          의심해봐야 합니다.
        </TextSection>
        <TextSection>
          불량업체들을 제외한 업체중 내 사이트를 잘 만들 수 있는 업체를 판별하는
          것도 쉽지 않습니다.
        </TextSection>
        <SectionTitle>불량업체 판별법</SectionTitle>
        <TextSection>
          저희가 추천드리는 방법은 우선 제작 업체의 사이트​를 보시는 것 입니다.
        </TextSection>
        <TextSection>
          고객님들의 웹사이트를 만들어주는 업체의 사이트가 매력적으로 다가오지
          않는다면 다른 업체를 알아보시는 것을 추천합니다.
        </TextSection>
        <TextSection>
          본인들의 웹사이트도 매력적으로 만들지 못하면서 남들 웹사이트를
          매력적으로 만들어준다는 것은 믿기 힘드네요.
        </TextSection>
        <TextSection>
          알아본 업체의 사이트가 어느정도 괜찮다면, 이제 포트폴리오를 확인해보면
          좋습니다.
        </TextSection>
        <TextSection>
          고객님께서 원하시는 사이트의 느낌과 유사한 사이트가 있다면 그 업체에
          맡기시면 만족스러운 결과를 얻으실 수 있을 것입니다.
        </TextSection>
        <TextSection>
          유사한 느낌의 사이트는 없어도 매력적인 사이트가 여럿 있다면 어느 정도
          결과물이 보증되니, 업체와의 소통을 통해 고객님께서 원하시는 사이트를
          도출하시는 것도 좋은 방법입니다.
        </TextSection>
        <TextSection>
          웹사이트 제작 업체 선정에 조금이나마 도움되셨으면 좋겠습니다.
        </TextSection>
        <TextSection>이상 웹페토였습니다.</TextSection>
      </ContentsContainer>
    </Container>
  );
};

export default Column1;
