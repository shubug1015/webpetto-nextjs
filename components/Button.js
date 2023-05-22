import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 75%;
`;

const Btn = styled.div`
  @media only screen and (max-width: 900px) {
    width: 170px;
    height: 45px;
    font-size: 14px;
  }
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) =>
    props.colorParam ? props.theme.mainColor : props.theme.blackColor};
  width: 220px;
  height: 55px;
  font-size: 18px;
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  z-index: 1;
  :hover {
    background-color: ${(props) => props.theme.mainColor};
    transition: background-color 0.3s ease-in-out;
  }
`;

const BtnText = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 120px;
`;

const LineContainer = styled.div`
  ${(props) => props.theme.flexStartCenter};
  width: 100px;
`;

const Line = styled.div`
  width: 50px;
`;

const TopLine = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.whiteColor};
  width: ${(props) => (props.line ? '60px' : '30px')};
  transition: width 0.3s ease-in-out;
`;

const BottomLine = styled.div`
  border-top: 1px solid ${(props) => props.theme.whiteColor};
  width: ${(props) => (props.line ? '60px' : '30px')};
  transition: width 0.3s ease-in-out;
`;

const Button = ({ color, url, text }) => {
  const [line, setLine] = useState(false);

  const onLine = () => setLine(true);

  const outLine = () => setLine(false);

  return (
    <Container>
      <Link href={url}>
        <Btn
          onMouseEnter={onLine}
          onMouseLeave={outLine}
          colorParam={color === 'main'}
        >
          <BtnText>{text}</BtnText>
          <LineContainer>
            <Line line={line}>
              <TopLine line={line} />
              <BottomLine line={line} />
            </Line>
            <AiOutlineRight
              size={20}
              style={{
                marginLeft: line ? '-4px' : '-34px',
                transition: 'margin-left 0.3s ease-in-out',
              }}
            />
          </LineContainer>
        </Btn>
      </Link>
    </Container>
  );
};
export default Button;
