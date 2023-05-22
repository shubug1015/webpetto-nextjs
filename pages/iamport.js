import Head from 'next/head';

const Test = () => {
  //   function Certification() {
  const onClickCertification = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init('imp11095153');

    /* 2. 본인인증 데이터 정의하기 */
    const data = {
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      company: '아임포트', // 회사명 또는 URL
      carrier: 'SKT', // 통신사
      name: '홍길동', // 이름
      phone: '01012341234', // 전화번호
      popup: true,
    };

    /* 4. 본인인증 창 호출하기 */
    IMP.certification(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  const callback = (response) => {
    const { success, merchant_uid, error_msg } = response;
    console.log('in', response);
    if (success) {
      alert('본인인증 성공');
    } else {
      alert(`본인인증 실패: ${error_msg}`);
    }
  };

  return (
    <>
      <Head>
        {/* Iamport Start */}
        <script
          type='text/javascript'
          src='https://code.jquery.com/jquery-1.12.4.min.js'
        ></script>
        <script
          type='text/javascript'
          src='https://cdn.iamport.kr/js/iamport.payment-1.1.5.js'
        ></script>
        {/* Iamport End */}
      </Head>
      <button onClick={onClickCertification} style={{ marginTop: '200px' }}>
        본인인증 하기
      </button>
    </>
  );
};
// }

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default Test;
