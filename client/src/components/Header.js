import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { LOG_OUT_SUCCESS } from '../reducers/user';

const HeaderBackColor = styled.div`
  display: flex;
  justify-content: center;
  background: black;
`;

const HeaderNavbar = styled.header`
  display: flex;
  margin: 0px 20px 0px 20px;
  background: black;
  max-width: 1000px;
  color: white;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0px;
  h4 {
    color: white;
  }
  button {
    cursor: pointer;
    border-style: none;
    border-radius: 2px;
  }

  button:active {
    position: relative;
    top: 1px;
  }
  li {
    list-style: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 800;
  }
  li:hover {
    color: #fdd835;
  }
`;

const Rightmanu = styled.div`
  display: flex;
  align-items: center;
  .search {
    display: flex;
    align-items: center;
  }
  input {
    height: 30px;
  }

  .menu-btn {
    padding: 7px;
    background-color: black;
    color: white;
    border: none;
    font-size: 13px;
  }
  .navbar-menu {
    display: flex;
  }
  .menu {
    position: relative;
    z-index: 1;
  }

  .disable-userInfo {
    display: none;
    position: absolute;
    right: 1000px;
  }
  .userInfo-header {
    background-color: black;
    height: 30px;
    width: 125px;
    right: 0px;
    top: 2px;
    position: absolute;
    border-style: none;
    z-index: 2;
  }

  .toggle-sub {
    background-color: black;
    color: white;
    font-weight: 800;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
  }
  hr {
    border: solid 1px white;
    width: 100px;
    margin-top: 5px;
  }
  .toggle-sub:hover {
    color: #fdd835;
  }
  .user-profile {
    cursor: pointer;
    margin: 0px 10px;
    padding: 20px 0px;
    background-color: black;
    color: white;
    font-weight: 600;
    font-size: 18px;
    border: none;
    cursor: pointer;
    border-radius: 2px;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: black;
    padding: 30px 0px 10px 10px;
    font-weight: 500;
    width: 130px;
    min-width: 100px;
    border-radius: 5px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .user-profile {
    color: #fdd835;
  }
`;

const SearchBtn = styled.button`
  width: 30px;
  height: 29px;
  background-color: #fdd835;

  .search-img {
    font-size: 16px;
  }
`;
const Logo = styled.div`
  display: flex;
  .heder-title {
    font-size: 25px;
  }

  .logo {
    margin-right: 10px;
    height: 30px;
    cursor: pointer;
  }
`;

function Header() {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log('여기는 헤더:', me);
  // console.log('여기는 헤더:', me.data);
  // console.log('여기는 헤더:', me.username);
  const [userProfile, setUserProfile] = useState(false);
  useEffect(() => {
    if (me) {
      setUserProfile(true);
      setUserProfile(false);
    }
  }, [me]);

  const handleLogout = async (e) => {
    e.preventDefault();
    setUserProfile(!userProfile);
    dispatch({
      type: LOG_OUT_SUCCESS,
      data: null,
    });
  };
  return (
    <HeaderBackColor>
      <HeaderNavbar>
        <Logo>
          <Link style={{ textDecoration: 'none' }} to="/">
            <img className="logo" src="/images/logo.png" alt="logo" />
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
            <h2 className="heder-title">dev interview</h2>
          </Link>
        </Logo>

        <Rightmanu>
          <form className="search">
            <label htmlFor="search-input" />
            <input
              id="search-input"
              type="text"
              placeholder="Search"
              // onKeyPress={handleLogout}
            />
            <SearchBtn type="submit">
              <FontAwesomeIcon icon={faSearch} className="search-img" />
            </SearchBtn>
          </form>
          <div className="menu">
            <div
              className={userProfile ? 'userInfo-header' : 'disable-userInfo'}
              // className="disable-userInfo"
              // className="userInfo-header"
            >
              <div className="dropdown">
                <span className="user-profile">
                  username
                  {/* {me.username} */}
                  {/* console.log(me.usernames) */}
                </span>
                <div className="dropdown-content">
                  <Link style={{ textDecoration: 'none' }} to="/myPage">
                    <button className="toggle-sub" type="button">
                      myPage
                    </button>
                  </Link>
                  <hr />

                  <button
                    className="toggle-sub"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>

            <ul className="navbar-menu">
              <Link style={{ textDecoration: 'none' }} to="/">
                <li className="menu-btn">HOME</li>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/login">
                <li className="menu-btn">LOGIN</li>
              </Link>

              <Link style={{ textDecoration: 'none' }} to="/signup">
                <li className="menu-btn">SIGN UP</li>
              </Link>
            </ul>
          </div>
        </Rightmanu>
      </HeaderNavbar>
    </HeaderBackColor>
  );
}

export default Header;
