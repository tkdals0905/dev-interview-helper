import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import { logOutApi } from '../api/user';
import {
  HeaderBackColor,
  HeaderNavbar,
  Logo,
  Rightmenu,
  SearchBtn,
} from '../styles/HeaderStyle';
import { LOG_OUT_SUCCESS } from '../reducers/user';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { refetch, isSuccess } = useQuery('logout', logOutApi, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const { me } = useSelector((state) => state.user);

  // console.log('여기는 헤더:', me.data);
  // console.log('여기는 헤더:', me.username);

  const handleLogout = () => {
    refetch();
    if (isSuccess) {
      dispatch({
        type: LOG_OUT_SUCCESS,
      });
      navigate('/');
    }
  };

  return (
    <HeaderBackColor>
      <HeaderNavbar>
        <Logo>
          <Link className="link-style" to="/">
            <>
              <img className="logo" src="/images/logo1.png" alt="logo" />
              <span className="header-title">dev interview</span>
            </>
          </Link>
        </Logo>

        <Rightmenu>
          <form className="search">
            <label htmlFor="search-input" />
            <input id="search-input" type="text" placeholder="Search" />
            <SearchBtn type="submit">
              <FontAwesomeIcon icon={faSearch} className="search-img" />
            </SearchBtn>
          </form>
          <div className="menu">
            {me ? (
              <>
                {' '}
                <div className="dropdown">
                  <span className="user-profile">
                    {me.username} 님 안녕하세요
                  </span>
                  <div className="dropdown-content">
                    <hr />
                    <Link className="link-style" to="/myPage">
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
              </>
            ) : (
              <ul className="navbar-menu">
                <Link className="link-style" to="/">
                  <li className="menu-btn">HOME</li>
                </Link>
                <Link className="link-style" to="/login">
                  <li className="menu-btn">LOGIN</li>
                </Link>
                <Link className="link-style" to="/signup">
                  <li className="menu-btn">SIGN UP</li>
                </Link>
              </ul>
            )}
          </div>
        </Rightmenu>
      </HeaderNavbar>
    </HeaderBackColor>
  );
}

export default Header;
