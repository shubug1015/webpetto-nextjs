import Head from 'next/head';
import styled from 'styled-components';
import Controller from 'components/Controller';
import Main from 'components/home/Main';
import Loader from 'components/Loader';
import About from 'components/home/About';
import WhatWeDo from 'components/home/WhatWeDo';
import OurWork from 'components/home/OurWork';
import Column from 'components/home/Column';
import Contact from 'components/home/Contact';
import { useController } from 'utils/Func';

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
`;

export default function Home({ homeRef, y, loading }) {
  return (
    <Container>
      <Head>
        <title>홈페이지 제작은 결국 웹페토</title>
        <meta
          name="description"
          content="기획, 디자인, 개발이 모여 홈페이지가 아닌 브랜드를 만듭니다. 저희는 영업 하지 않습니다. 들어오셔서 직접 보고 판단하세요. 불만족시 100% 환불."
        />
        <link rel="canonical" href="https://webpetto.com" />
      </Head>
      {/* <Controller
        {...homeRef}
        controllerRef={useController(y, homeRef)}
        loading={loading}
      />
      <Main mainRef={homeRef.mainRef} />
      <Loader loaderRef={homeRef.loaderRef} loading={loading} />
      {loading === false && (
        <>
          <About aboutRef={homeRef.aboutRef} />
          <WhatWeDo whatWeDoRef={homeRef.whatWeDoRef} />
          <OurWork ourWorkRef={homeRef.ourWorkRef} />
          <Column columnRef={homeRef.columnRef} />
          <Contact contactRef={homeRef.contactRef} />
        </>
      )} */}
      <Loader loaderRef={homeRef.loaderRef} loading={loading} />
    </Container>
  );
}
