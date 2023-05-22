import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuBar from 'components/MenuBar';
import { useScrollDir } from 'utils/Func';
import { HiMenuAlt3 } from 'react-icons/hi';

const Container = styled.header`
  @media only screen and (max-width: 900px) {
    top: ${(props) => (props.scrollDir ? 0 : '-90px')};
    height: 70px;
  }
  ${(props) => props.theme.flexBetweenCenter}
  position: fixed;
  top: ${(props) => (props.scrollDir ? 0 : '-90px')};
  left: 0;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 1px 2px 12px 1px rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 99;
  transition: top 0.3s ease-in-out;
`;

const Logo = styled.div`
  @media only screen and (max-width: 900px) {
    width: 70px;
    height: 70px;
    margin-left: 3%;
  }
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 90px;
  height: 90px;
  margin-left: 12%;
  cursor: pointer;
`;

const List = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  display: flex;
  margin-right: 13%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`;

const Item = styled.div`
  :not(:last-child) {
    margin-right: 30px;
  }
  /* background-color: ${(props) => props.locationParam && '#eff0fc'}; */
  padding: 8px 20px;
  color: ${(props) => props.locationParam && props.theme.mainColor};
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: #eff0fc;
    border-radius: 4px;
    color: ${(props) => props.theme.mainColor};
    transform: translate(0, -3px);
  }
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
`;

const Icon = styled.div`
  @media only screen and (max-width: 900px) {
    display: flex;
    font-size: 30px;
  }
  display: none;
  margin-right: 5%;
  font-size: 36px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const list = [
  {
    id: 0,
    url: '/',
    name: 'Main',
  },
  {
    id: 1,
    url: '/our_work',
    name: 'Our Work',
  },
  {
    id: 2,
    url: '/column',
    name: 'Column',
  },
  {
    id: 3,
    url: '/contact',
    name: 'Contact',
  },
];

const Header = () => {
  const location = useRouter().pathname;

  const [menuBar, setMenuBar] = useState(false);

  const openMenuBar = () => setMenuBar(true);

  const closeMenuBar = () => setMenuBar(false);

  const scrollDir = useScrollDir().scrollDir;

  useEffect(() => {
    const body = document.body;
    const scrollPosition = window.pageYOffset;
    if (menuBar) {
      body.style.overflow = 'hidden';
      // body.style.pointerEvents = 'none';
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition}px`;
      body.style.left = '0';
      body.style.right = '0';
    } else {
      // body.style.removeProperty('overflow');
      // body.style.removeProperty('pointer-events');
      // body.style.removeProperty('position');
      // body.style.removeProperty('top');
      // body.style.removeProperty('left');
      // body.style.removeProperty('right');
      body.style.overflow = '';
      body.style.pointerEvents = '';
      body.style.position = '';
      body.style.top = `-${scrollPosition}px`;
      body.style.left = '';
      body.style.right = '';

      window.scrollTo(0, scrollPosition);
    }
  }, [menuBar]);

  return (
    <Container scrollDir={scrollDir === 'scroll down' || scrollDir === 'top'}>
      <Link href='/'>
        <Logo imgUrl='/logo.png' />
      </Link>
      <List>
        {list &&
          list.length > 0 &&
          list.map((l) => (
            <Link href={l.url} key={l.id}>
              <Item locationParam={location === l.url}>{l.name}</Item>
            </Link>
          ))}
      </List>
      <Icon onClick={openMenuBar}>
        <HiMenuAlt3 />
      </Icon>
      <MenuBar menuBar={menuBar} closeMenuBar={closeMenuBar} />
    </Container>
  );
};

export default Header;
