import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderNavbar = styled.header`
  display: flex;
  background: black;
  color: white;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const Search = styled.div`
  display: flex;
  margin-right: 0px;

  .search-input {
    height: 40px;
  }
  .search-button {
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
    color: white;
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
  const { me } = useSelector((state) => state.user);
  console.log('여기는 헤더:', me);
  return (
    <HeaderNavbar>
      <Logo>
        <img className="logo" src="/images/search.png" alt="logo" />
        <h2>dev interview</h2>
      </Logo>
      <Div>
        <Search>
          <input className="search-input" type="search" placeholder="Search" />
          <button className="search-button" type="submit">
            <img className="s-img" src="/images/search.png" alt="search" />
          </button>
        </Search>
        <Sign>
          <Link style={{ textDecoration: 'none' }} to="/login">
            <h4>로그인</h4>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/signup">
            <h4>회원가입</h4>
          </Link>
        </Sign>
      </Div>
    </HeaderNavbar>
  );
}

export default Header;
