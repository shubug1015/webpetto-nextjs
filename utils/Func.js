import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export const useHomeRef = () => {
  const homeRef = {
    mainRef: useRef(null),
    loaderRef: useRef(null),
    aboutRef: useRef(null),
    whatWeDoRef: useRef(null),
    ourWorkRef: useRef(null),
    columnRef: useRef(null),
    contactRef: useRef(null),
  };
  return homeRef;
};

// scroll y값 가져오는 함수
export const useScroll = () => {
  const [scroll, setScroll] = useState({
    y: null,
  });
  const onScroll = () => {
    setScroll({
      y: window.scrollY,
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  return scroll;
};

// scroll direction 가져오는 함수
export const useScrollDir = () => {
  const [scrollDir, setScrollDir] = useState('top');
  const [flag, setFlag] = useState(0);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let test = flag;
    const updateScrollDir = () => {
      if (test === 0) {
        setFlag(1);
      }
      const scrollY = window.pageYOffset;
      setScrollDir(
        window.scrollY === 0
          ? 'top'
          : scrollY > lastScrollY
          ? 'scroll down'
          : 'scroll up'
      );
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, [scrollDir]);
  return { scrollDir, flag };
};

// loading state 가져오는 함수
export const useLoader = (loaderRef) => {
  const location = useRouter().pathname;
  const [loader, setLoader] = useState({
    loading: location === '/' ? true : false,
  });
  const scrollDir = useScrollDir().scrollDir;
  const flag = useScrollDir().flag;
  const onLoad = () => {
    if (loader.loading && scrollDir === 'scroll down') {
      window.scrollTo({
        behavior: 'smooth',
        top: loaderRef.current.offsetTop + 10,
      });
      setTimeout(() => setLoader({ loading: true }), 1500);
    }
  };
  useEffect(() => {
    onLoad();
    // window.addEventListener('scroll', onLoad);
    // return () => window.removeEventListener('scroll', onLoad);
  }, [flag]);
  return loader;
};

// home 위치 가져오는 함수
export const useController = (y, homeRef) => {
  const { mainRef, aboutRef, whatWeDoRef, ourWorkRef, columnRef } = homeRef;

  const [controller, setController] = useState(null);

  const HEADER_HEIGHT = 90;

  const mainHeight = mainRef.current?.offsetHeight - 50;

  const aboutHeight =
    mainRef.current?.offsetHeight +
    aboutRef.current?.offsetHeight +
    HEADER_HEIGHT;

  const whatWeDoHeight = aboutHeight + whatWeDoRef.current?.offsetHeight;

  const ourWorkHeight = whatWeDoHeight + ourWorkRef.current?.offsetHeight;

  const columnHeight = ourWorkHeight + columnRef.current?.offsetHeight;

  const reachAbout = mainHeight < y && y <= aboutHeight;
  const reachWhatWeDo = aboutHeight < y && y <= whatWeDoHeight;
  const reachOurWork = whatWeDoHeight < y && y <= ourWorkHeight;
  const reachColumn = ourWorkHeight < y && y <= columnHeight;
  const reachContact = columnHeight < y;

  useEffect(() => {
    if (reachAbout) {
      setController('About');
    } else if (reachWhatWeDo) {
      setController('What We Do');
    } else if (reachOurWork) {
      setController('Our Work');
    } else if (reachColumn) {
      setController('Column');
    } else if (reachContact) {
      setController('Contact');
    } else {
      setController(null);
    }
  }, [y]);

  return controller;
};
