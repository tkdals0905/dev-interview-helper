import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginApi } from '../api/user';
import { LOG_IN_SUCCESS } from '../reducers/user';
import Confirm from '../components/Confirm';
import { card1, card3, card5 } from '../reducers/card';

const LoginComponent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  * {
    margin: 0px;
  }
  li {
    list-style: none;
  }

  .login-title {
    padding: 30px;
  }
`;

const LoginMain = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;

  font-size: 12px;
  h2 {
    padding: 20px;
    text-align: center;
    font-size: 30px;
  }
  .between {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .disabled-button {
    background-color: #c0deff;
    cursor: not-allowed;
  }
  .able-button {
    background-color: #0078ff;
    cursor: pointer;
  }
  .git-button {
    background-color: #000000;
  }
  .line {
    display: flex;
    flex-basis: 20%;
    color: gray;
    opacity: 0.4;
    font-size: 12px;
    margin: 8px 0px;
    align-items: baseline;
  }
  .line::before {
    content: '';
    flex-grow: 1;
    margin: 0px 10px 0px 100px;
    background-color: gray;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
  .line::after {
    content: '';
    flex-grow: 1;
    margin: 0px 100px 0px 10px;
    background-color: gray;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }

  input {
    border-radius: 3px;
    background-color: #fbfbfd;
    font-size: 16px;
    width: 100%;
    height: 40px;
    border: 1px solid #0078ff;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 40px;
    opacity: 0.6;
    padding: 2px 0px 2px 10px;
  }

  a {
    display: inline;
    text-decoration-line: none;
    margin-left: 20px;
  }

  .create-id {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: 600;

  border: none;
  margin-top: 20px;
`;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [isFull, setIsFull] = useState(false);
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const loginMutation = useMutation(loginApi);

  useEffect(() => {
    if (loginInfo.email && loginInfo.password) {
      setIsFull(true);
    } else {
      setIsFull(false);
    }
  }, [loginInfo.email, loginInfo.password]);

  useEffect(() => {
    if (loginMutation.status === 'error') {
      setMessage('login_fail');
    } else if (loginMutation.status === 'success') {
      navigate('/');
    }
  }, [loginMutation.status]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    // 폼제출하고 나서 새로고침 방지
    // loginMutation.mutate({
    //   email: loginInfo.email,
    //   password: loginInfo.password,
    // });
    const userInfo = {
      id: 1,
      username: 'sungmin',
      email: 'aa@aa.com',
      Cards: [],
      Shares: [card5, card1, card3],
    };
    dispatch({
      type: LOG_IN_SUCCESS,
      data: userInfo,
    });
    navigate('/');
  };
  const resetMessage = () => {
    setMessage('');
  };
  return (
    <LoginComponent>
      {message ? (
        <Confirm message={message} handleMessage={resetMessage} />
      ) : null}
      <LoginMain>
        <h2 className="login-title">로그인</h2>
        <form onSubmit={handlesubmit}>
          <SubmitBtn className="git-button" type="submit">
            Github으로 로그인하기
          </SubmitBtn>
          <div className="between">
            <p className="line">또는</p>
          </div>

          <label htmlFor="user-email">이메일</label>
          <input
            id="user-email"
            type="email"
            placeholder="이메일"
            onChange={handleInputValue('email')}
          />

          <label htmlFor="user-password">비밀번호</label>
          <input
            id="user-password"
            type="password"
            placeholder="비밀번호"
            onChange={handleInputValue('password')}
          />

          <SubmitBtn
            disabled={!isFull}
            className={isFull ? 'able-button' : 'disabled-button'}
            type="submit"
          >
            로그인 하기
          </SubmitBtn>
          <div className="create-id">
            <p>아직 계정이 없으신가요?</p>
            <a href="www.naver.com">계정 만들기</a>
          </div>
        </form>
      </LoginMain>
    </LoginComponent>
  );
}

export default Login;
