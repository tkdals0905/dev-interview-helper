import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  const FooterComponent = styled.footer`
    bottom: 0;
    width: 100%;
  `;

  const Introduce = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    padding: 20px;
    color: white;

    .introduce-box {
      width: 1000px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .introduce {
      max-width: 800px;
      margin-top: 10px;
      font-size: 15px;
      opacity: 5px;
    }
    button {
      border-radius: 5px;
      padding: 10px;
      background-color: black;
      color: white;
      font-weight: 700;
      border: 2px solid white;
      cursor: pointer;
    }

    button:hover {
      background-color: #fdd835;
      color: black;
    }
    button:active {
      position: relative;
      top: 1px;
    }
  `;
  const FooterBottom = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    display: flex;
    padding: 10px 20px;
    color: black;

    .footer-box {
      width: 1000px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .copyright {
        font-size: 12px;
      }
      .copyright-img {
        margin-right: 3px;
      }
    }
    .right-footer {
      font-weight: 700;
    }
    .git-link {
      display: flex;
      font-weight: 700;
      align-items: center;
    }

    .git-img {
      margin-right: 3px;
      font-size: 20px;
    }
  `;
  const Logo = styled.div`
    display: flex;
    align-items: flex-end;
    .logo {
      margin-right: 10px;
      height: 20px;
      cursor: pointer;
    }
    .logo-title {
      font-weight: 500;
      font-size: 12px;
    }
  `;

  return (
    <FooterComponent>
      <Introduce>
        <div className="introduce-box">
          <div className="left-introduce">
            <Logo>
              <Link style={{ textDecoration: 'none' }} to="/">
                <img className="logo" src="/images/logo.png" alt="logo" />
              </Link>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                <p className="logo-title">
                  dev <br />
                  interview
                </p>
              </Link>
            </Logo>
            <p className="introduce">
              면접을 준비하는 개발자 & 지식을 공유하고 싶은 개발자 모두를 위한,
              <strong> dev interview</strong>
            </p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="/signup">
            <button type="button" className="footer-btn">
              Start Learning Together !
            </button>
          </Link>
        </div>
      </Introduce>

      <FooterBottom>
        <div className="footer-box">
          <div className="left-footer">
            <div>
              <p className="copyright">
                <FontAwesomeIcon icon={faCopyright} className="copyright-img" />
                2022, dev interview, All right reserved.
              </p>
            </div>
          </div>

          <div className="right-footer">
            <a
              className="git-link"
              href="www.naver.com"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <FontAwesomeIcon icon={faGithub} className="git-img" />
              <span>github</span>
            </a>
          </div>
        </div>
      </FooterBottom>
    </FooterComponent>
  );
}

export default Footer;
