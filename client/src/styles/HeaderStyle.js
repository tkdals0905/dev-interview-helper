import styled from 'styled-components';

export const HeaderBackColor = styled.div`
  display: flex;
  justify-content: center;
  background: black;
`;

export const HeaderNavbar = styled.header`
  display: flex;
  margin: 0px 20px 0px 20px;
  background: #0a174e;
  max-width: 1000px;
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

export const SearchBtn = styled.button`
  width: 30px;
  height: 29px;
  background-color: #fdd835;

  .search-img {
    font-size: 16px;
  }
`;
export const Logo = styled.div`
  display: flex;
  .header-title {
    font-size: 25px;
  }
  .logo {
    margin-right: 10px;
    height: 30px;
    cursor: pointer;
  }
`;
