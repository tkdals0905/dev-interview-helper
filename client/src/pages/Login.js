import React from 'react';
import styled from 'styled-components';
// import ReactDOM from 'react-dom';

const LoginComponent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    padding: 10px;
    width: 300px;
    margin-top: 10px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-style: none;
    border-radius: 3px;
  }

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

const LoginMain = styled.form`
  display: flex;
  flex-direction: column;
  div {
    margin-top: 10px;
  }
  .git-login-btn {
    background-color: black;
  }
  .login-btn {
    background-color: #1e90ff;
  }
  .between {
    margin-top: 15px;
    margin-bottom: 10px;
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
`;
const LoginInput = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  input {
    display: block;
    margin-top: 5px;
    width: 300px;
    height: 40px;
    opacity: 0.6;
  }
  div {
    width: 300px;
  }
  a {
    display: inline;
    text-decoration-line: none;
  }
  .reset-password {
    margin-left: 190px;
  }
  .create-id {
    display: flex;
    justify-content: center;
    a {
      margin-left: 20px;
    }
  }
  p {
    display: inline;
  }
`;
const Footer = styled.footer`
  display: flex;
  margin-top: 25px;
  font-size: 12px;
  width: 300px;
  justify-content: space-around;
  p {
    padding-right: 10px;
  }
`;

function Login() {
  return (
    <LoginComponent>
      <h2 className="login-title">로그인</h2>
      <LoginMain>
        <button className="git-login-btn" type="submit">
          <i className="fa-brands fa-github-alt" />
          Github으로 로그인하기
        </button>
        <div className="between">
          <p className="line">또는</p>
        </div>
        <LoginInput>
          <div className="userInfo-email">
            <p className="userInfo">이메일</p>
            <input id="email" type="email" placeholder="이메일" />
          </div>
          <div className="userInfo-password">
            <p className="userInfo">이메일</p>
            <a className="reset-password" href="www.naver.com">
              비밀번호 재설정
            </a>
            <input type="password" placeholder="비밀번호" />
          </div>
          <button className="login-btn" type="submit">
            <i className="fa-brands fa-github-alt" />
            로그인 하기
          </button>
          <div className="create-id">
            <p>아직 계정이 없으신가요?</p>
            <a href="www.naver.com">계정 만들기</a>
          </div>
        </LoginInput>
      </LoginMain>
      <Footer>
        <p>이용약관</p>
        <p>개인정보 처리방침</p>
        <p>FAQ/문의</p>
      </Footer>
    </LoginComponent>
  );
}

export default Login;
