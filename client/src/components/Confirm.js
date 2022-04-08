import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 5, 12, 0.5);
  .back-arrow {
    font-size: 20px;
    margin-left: 5px;
    margin-top: 1px;
    font-weight: 800;
    cursor: pointer;
  }
`;

const MessageBox = styled.div`
  background-color: white;
  width: 300px;
  height: 200px;
  z-index: 10;
  border-radius: 3px;
  h2 {
    text-align: center;
    margin-bottom: 5rem;
  }
  button {
    display: block;
    width: 140px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin: auto;
  }
`;

function Confirm({ message, handleMessage }) {
  const navigate = useNavigate();
  const [curMessage, setCurMessage] = useState('');
  const [btnInfo, setBtnInfo] = useState('');

  useEffect(() => {
    if (message === 'success_signup') {
      setBtnInfo('로그인 하기');
      setCurMessage('회원가입 성공');
    } else if (message === 'error_signup') {
      setBtnInfo('닫 기');
      setCurMessage('회원가입 실패');
    } else if (message === 'password_check_fail') {
      setBtnInfo('닫 기');
      setCurMessage('비밀번호가 일치하지 않습니다');
    } else if (message === 'login_fail') {
      setBtnInfo('닫 기');
      setCurMessage('로그인 실패');
    } else if (message === 'should_login') {
      setBtnInfo('로그인 하기');
      setCurMessage('로그인 해야 사용가능합니다.');
    }
  }, []);
  const handleConfirm = () => {
    if (message === 'success_signup') {
      navigate('/');
    } else if (
      message === 'error_signup' ||
      message === 'password_check_fail' ||
      message === 'login_fail'
    ) {
      handleMessage('');
    }
  };
  const handleCancel = () => {
    handleMessage('');
  };
  return (
    <Container>
      <MessageBox>
        <div
          role="button"
          onClick={handleCancel}
          className="back-arrow"
          aria-hidden="true"
        >
          ❌
        </div>
        <h2>{curMessage}</h2>
        <button type="button" onClick={handleConfirm}>
          {btnInfo}
        </button>
      </MessageBox>
    </Container>
  );
}

export default Confirm;
