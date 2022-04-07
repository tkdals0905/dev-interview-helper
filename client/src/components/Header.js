import React from 'react';
import styled from 'styled-components';
// import ReactDOM from 'react-dom';

const HeaderNavbar = styled.header`
  display: flex;
  background: black;
  color: white;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  * {
    margin: 0px;
  }
`;

const Serch = styled.div`
  display: flex;
  margin-right: 0px;

  .serch-input {
    height: 40px;
  }
  .serch-button {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    cursor: pointer;
  }
  .s-img {
    width: 20px;
    /* cursor: pointer; */
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Sign = styled.div`
  display: flex;
  h4 {
    margin: 5px;
    padding-right: 5px;
    cursor: pointer;
  }
`;
const Logo = styled.div`
  display: flex;

  .logo {
    margin-right: 10px;
    height: 30px;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <HeaderNavbar>
      <Logo>
        <img className="logo" src="/images/search.png" alt="logo" />
        <h2>dev interview</h2>
      </Logo>
      <Div>
        <Serch>
          <input className="serch-input" type="search" placeholder="Search" />
          <button className="serch-button" type="submit">
            <img className="s-img" src="/images/search.png" alt="search" />
          </button>
        </Serch>
        <Sign>
          <h4> 로그인</h4>
          <h4> 회원가입</h4>
        </Sign>
      </Div>
    </HeaderNavbar>
  );
}

export default Header;
