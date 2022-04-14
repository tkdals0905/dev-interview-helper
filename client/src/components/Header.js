import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOutApi } from '../api/user';
import {
  HeaderBackColor,
  HeaderNavbar,
  Logo,
  Rightmenu,
} from '../styles/HeaderStyle';
import { loginThunk, logoutThunk } from '../reducers';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { me } = useSelector((state) => state.user);

  // console.log('여기는 헤더:', me.data);
  // console.log('여기는 헤더:', me.username);

  const handleLogout = async () => {
    const islogout = await logOutApi();
    if (islogout.status === 200) {
      dispatch(logoutThunk());
      navigate('/');
    }
  };
  const gotohome = () => {
    dispatch(loginThunk(me));
    navigate('/');
  };

  return (
    <HeaderBackColor>
      <HeaderNavbar>
        <Logo>
          <div className="link-style" onClick={gotohome}>
            <img className="logo" src="/images/logo1.png" alt="logo" />
            <span className="header-title">dev interview</span>
          </div>
        </Logo>

        <Rightmenu>
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
