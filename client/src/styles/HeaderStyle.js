import styled from 'styled-components';

export const HeaderBackColor = styled.div`
  display: flex;
  justify-content: center;
  background: #0a174e;
`;

export const HeaderNavbar = styled.header`
  display: flex;
  margin: 0px 20px 0px 20px;
  max-width: 1100px;
  height: 65px;
  color: white;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0px;
  .link-style {
    text-decoration: none;
    color: white;
  }
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

export const Rightmenu = styled.div`
  display: flex;
  align-items: center;

  input {
    height: 40px;
    width: 300px;
    border-radius: 20px;
    padding-left: 10px;
    font-size: 15px;
  }

  .menu-btn {
    padding: 7px;
    background: #0a174e;
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
    background: #0a174e;
    color: white;
    font-weight: 800;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
  }
  hr {
    border: solid 1px white;
    width: 100px;
    margin-top: 15px;
    margin-left: 20px;
  }
  .toggle-sub:hover {
    color: #fdd835;
  }
  .user-profile {
    background: #0a174e;
    margin: 0px 10px;
    padding: 0px 0px 10px 20px;
    color: white;
    font-weight: 600;
    font-size: 18px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    text-align: center;
    position: absolute;
    right: -30;
    background: #0a174e;
    padding: 5px 10px 20px 0px;
    font-weight: 500;
    width: 145px;
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
  .search {
    display: flex;
    align-items: center;
  }
`;

export const SearchBtn = styled.button`
  width: 30px;
  height: 39px;
  border-radius: 10px;
  background: #0a174e;
  display: flex;

  .search-img {
    position: relative;
    right: 40px;
    top: 5px;
    color: #0a174e;
    font-size: 25px;
  }
`;
export const Logo = styled.div`
  display: flex;
  position: relative;
  .header-title {
    font-size: 25px;
    position: relative;
    top: -15px;
  }
  .logo {
    margin-right: 10px;
    height: 45px;
    cursor: pointer;
  }
`;
