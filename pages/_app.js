import { useEffect, useRef } from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import Theme from 'styles/Theme';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { loadScript, boot } from 'utils/ChannelService';
import { useHomeRef, useScroll, useLoader } from 'utils/Func';
import smoothscroll from 'smoothscroll-polyfill';
import { useRouter } from 'next/router';
import ga from 'utils/ga';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smoothscroll.polyfill();
    loadScript();
    boot({
      pluginKey: '4bccfee5-b825-4425-9a0c-0d3cb30c195b',
    });
  }, []);

  const homeRef = useHomeRef();
  const { y } = useScroll();
  const { loading } = useLoader(homeRef.loaderRef);

  const router = useRouter();

  const isMount = useRef(true);
  useEffect(() => {
    if (isMount.current) {
      ga.initGA();
      isMount.current = false;
    } else {
      ga.logPageView(router.pathname);
    }
  }, [router.pathname]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {/* {loading === false && <Header />} */}
      <Component {...pageProps} homeRef={homeRef} y={y} loading={loading} />
      {/* {loading === false && <Footer />} */}
    </ThemeProvider>
  );
}

export default MyApp;
