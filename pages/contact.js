import { useState, Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

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
    margin-bottom: 0;
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

const FormContainer = styled.form`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter}
    width: 85%;
    padding: 0;
  }
  ${(props) => props.theme.columnCenter}
  width: 85%;
  padding: 5%;
`;

const FormTitle = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
    font-size: 25px;
    margin-bottom: 70px;
    margin-top: 100px;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 100%;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 100px;
`;

const InputContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.flexBetweenCenter}
  flex-wrap: wrap;
  width: 100%;
`;

const Input = styled.div`
  @media only screen and (max-width: 900px) {
    display: ${(props) => (props.show ? 'none' : '')};
    width: 90%;
  }
  width: 45%;
`;

const InputTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 18px;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 100%;
  margin-bottom: 35px;
  font-size: 19px;
  font-weight: 700;
`;

const InputText = styled.input`
  @media only screen and (max-width: 900px) {
    width: 80%;
    margin-bottom: 70px;
    font-size: 15px;
    padding-bottom: 10px;
  }
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  display: ${(props) => (props.show ? 'none' : '')};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.blackColor};
  width: 90%;
  padding-bottom: 15px;
  margin-bottom: 120px;
  outline: none;
  font-size: 18px;
`;

const TextArea = styled.textarea`
  @media only screen and (max-width: 900px) {
    width: 100%;
    font-size: 15px;
    height: 200px;
  }
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.blackColor};
  width: 71vw;
  height: 250px;
  padding: 10px 0 0 10px;
  outline: none;
  font-size: 18px;
`;

const SubmitBtn = styled.input`
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.blackColor};
  width: 180px;
  height: 55px;
  color: ${(props) => props.theme.whiteColor};
  margin-top: 80px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Contact = () => {
  const [data, setData] = useState({
    company_name: '',
    num: '',
    email: '',
    purpose: '',
    budget: '',
    due: '',
    reference: '',
    question: '',
  });

  const list = [
    {
      id: 0,
      title: '의뢰자 정보',
      content: [
        {
          id: 0,
          title: '회사명',
          placeholder: '회사명을 입력해주세요.',
          name: 'company_name',
          value: data.company_name,
        },
        {
          id: 1,
          title: '',
          placeholder: '',
          name: '',
          value: '',
        },
        {
          id: 2,
          title: '연락처',
          placeholder: '연락처를 입력해주세요.',
          name: 'num',
          value: data.num,
        },
        {
          id: 3,
          title: 'E-mail',
          placeholder: '이메일을 입력해주세요.',
          name: 'email',
          value: data.email,
        },
      ],
    },
    {
      id: 1,
      title: '프로젝트 정보',
      content: [
        {
          id: 4,
          title: '사이트 제작 목적',
          placeholder: '간략한 사이트 목적을 입력해주세요.',
          name: 'purpose',
          value: data.purpose,
        },
        {
          id: 5,
          title: '예산',
          placeholder: '사이트 제작 예산을 입력해주세요.',
          name: 'budget',
          value: data.budget,
        },
        {
          id: 6,
          title: '희망 작업완료일',
          placeholder: '희망하시는 작업완료일을 입력해주세요.',
          name: 'due',
          value: data.due,
        },
        {
          id: 7,
          title: '레퍼런스 페이지 (선택)',
          placeholder: '참고용 사이트 주소를 입력해주세요.',
          name: 'reference',
          value: data.reference,
        },
        {
          id: 8,
          title: '추가 문의사항',
          placeholder:
            '간단한 회사소개와 함께 추가적으로 문의하실 사항을 적어주세요.',
          name: 'question',
          value: data.question,
        },
      ],
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    if (data.company_name.length < 1) {
      alert('회사명을 입력해주세요.');
    } else if (data.num.length < 1) {
      alert('연락처를 입력해주세요.');
    } else if (data.email.length < 1) {
      alert('이메일을 입력해주세요.');
    } else if (data.purpose.length < 1) {
      alert('사이트 제작 목적을 입력해주세요.');
    } else if (data.budget.length < 1) {
      alert('예산을 입력해주세요.');
    } else if (data.due.length < 1) {
      alert('희망 작업완료일을 입력해주세요.');
    } else {
      if (window.confirm('제출하시겠습니까?')) {
        emailjs
          .sendForm(
            'service_sc0d0qi',
            'template_3e109jh',
            e.target,
            'user_KqQjjsYbTExQP5S96b2qR'
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
        alert('제출되었습니다.');
      } else {
        return;
      }
      setData({
        company_name: '',
        num: '',
        email: '',
        purpose: '',
        budget: '',
        due: '',
        reference: '',
        question: '',
      });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <TitleContainer>
        <Title>문의하기</Title>
        <Subtitle>
          저희 글을 충분히 읽으신 클라이언트 분들만 문의주세요
        </Subtitle>
      </TitleContainer>
      <FormContainer onSubmit={sendEmail}>
        {list &&
          list.length > 0 &&
          list.map((l) => (
            <Fragment key={l.id}>
              <FormTitle>{l.title}</FormTitle>
              <InputContainer>
                {l.content.map((c) => (
                  <Fragment key={`input${c.id}`}>
                    <Input key={c.id} show={c.id === 1}>
                      <InputTitle>{c.title}</InputTitle>
                      {c.id !== 8 ? (
                        <InputText
                          type='text'
                          placeholder={c.placeholder}
                          show={c.id === 1}
                          name={c.name}
                          value={c.value}
                          onChange={handleChange}
                        />
                      ) : (
                        <TextArea
                          type='text'
                          name={c.name}
                          value={c.value}
                          placeholder={c.placeholder}
                          onChange={handleChange}
                        />
                      )}
                    </Input>
                  </Fragment>
                ))}
              </InputContainer>
            </Fragment>
          ))}
        <SubmitBtn type='submit' value='문의하기' />
      </FormContainer>
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

export default Contact;
