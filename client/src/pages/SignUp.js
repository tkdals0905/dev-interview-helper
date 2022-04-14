import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { signupApi } from '../api/user';
import Confirm from '../components/Confirm';

const SignUpContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  line-height: 35px;
  border: none;
  transition: 0.3s ease-in;
  border-radius: 3px;
`;

const SignUpWrapper = styled.div`
  width: 320px;
  text-align: left;
  .disabled_button {
    background-color: #c0deff;
    cursor: not-allowed;
  }
  .able_button {
    background-color: #0153f4;
    cursor: pointer;
  }
  .sign-title {
    width: 100%;
    display: block;
    margin-top: 2rem;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
  }
  label {
    display: block;
    font-size: 15px;
    margin-bottom: 3px;
    margin-top: 1rem;
  }
  input {
    border-radius: 3px;
    background-color: #fbfbfd;
    font-size: 16px;
    line-height: 24px;
    width: 320px;
    height: 40px;
    border: 1px solid #0078ff;
    padding: 8px 12px 8px 12px;
  }
  .valid-container {
    line-height: 50px;
    font-size: 13px;
  }
  #valid-check {
    margin-top: 10px;
    width: 15px;
    height: 15px;
  }
  .valid-message {
    transform: translate(0%, -5%);
    display: inline-block;
  }
  .user-alert {
    font-size: 13px;
    font-weight: 500;
    color: #98a8b9;
    text-align: center;
  }
  .login-link {
    display: inline-block;
    margin-left: 10px;
    cursor: pointer;
    color: black;
    transition: 0.2s ease-in;
    &:hover {
      color: #1482ff;
    }
  }
`;

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    password_check: '',
    email: '',
  });

  const [isFull, setIsFull] = useState(false);
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  const signupMutation = useMutation(signupApi);

  useEffect(() => {
    if (
      userInfo.email &&
      userInfo.password &&
      userInfo.password_check &&
      userInfo.username &&
      checked
    ) {
      setIsFull(true);
    } else {
      setIsFull(false);
    }
  }, [userInfo, checked]);

  useEffect(() => {
    if (signupMutation.isSuccess) {
      setMessage('success_signup');
    } else if (signupMutation.isError) {
      setMessage('error_signup');
    }
  }, [signupMutation.status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.password_check === userInfo.password) {
      signupMutation.mutate({
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
      });
    } else {
      setMessage('password_check_fail');
    }
  };

  const resetMessage = () => {
    setMessage('');
  };

  return (
    <SignUpContainer>
      {message ? (
        <Confirm message={message} handleMessage={resetMessage} />
      ) : null}
      <SignUpWrapper>
        <h2 className="sign-title">계정 만들기</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">이름</label>
          <input
            type="text"
            id="username"
            onChange={handleInputValue('username')}
            placeholder="이름"
          />
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            onChange={handleInputValue('email')}
            placeholder="이메일"
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            onChange={handleInputValue('password')}
            placeholder="비밀번호"
          />
          <label htmlFor="password-check">비밀번호 확인</label>
          <input
            type="password"
            id="password-check"
            onChange={handleInputValue('password_check')}
            placeholder="비밀번호 확인"
          />
          <div className="valid-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
              id="valid-check"
            />
            <span className="valid-message">
              이용약관 및 개인정보 처리방침에 동의합니다.
            </span>
          </div>
          <SubmitBtn
            type="submit"
            disabled={!isFull}
            className={isFull ? 'able_button' : 'disabled_button'}
          >
            계정 만들기
          </SubmitBtn>
        </form>
        <p className="user-alert">
          이미 계정이 있으신가요?{' '}
          <Link to="/login">
            <span role="button" className="login-link">
              로그인 하기
            </span>
          </Link>
        </p>
      </SignUpWrapper>
    </SignUpContainer>
  );
}

export default SignUp;
