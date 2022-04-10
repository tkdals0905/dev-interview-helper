import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import SetMyInfo from '../components/SetMyInfo';

const MyPageComponent = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1100px;
  flex-direction: column;

  .myPage-title {
    text-align: center;
    padding: 20px;
    .title {
      padding: 10px;
    }
  }
  .bettwen {
    margin-top: 20px;
    background: black;
    padding-top: 1px;
  }
  button {
    width: 40%;
    height: 40px;
    border-radius: 3px;
    color: white;
    font-size: 16px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    border: none;
    margin-top: 20px;
    box-shadow: 1px 1px;
    background: #0078ff;
  }

  button:active {
    position: relative;
    top: 1px;
  }
`;
const MyInfo = styled.section`
  background-color: whitesmoke;
  width: 320px;
  border-radius: 5px;
  border-color: #0a174e;
  border: solid 3px #0a174e;
  box-shadow: 2px 2px;
  font-weight: 700;
  padding: 15px;
  display: flex;
  .sub-title {
    font-size: 25px;
    padding: 10px 0px;
  }
  .information {
    display: flex;
  }
`;

const MyStudyCards = styled.section`
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

function MyPage() {
  const { me } = useSelector((state) => state.user);
  return (
    <MyPageComponent>
      <div className="myPage-title">
        <h1 className="title">My Page</h1>
        <h3>{me.username} 님, 환영합니다.</h3>
      </div>
      <MyInfo>
        <div className="infomaition">
          <p className="sub-title">내 정보</p>
          <div className="user-info">
            <p>이름 : {me.username}</p>
            <p>이메일 : {me.email}</p>
          </div>
        </div>
        <button type="button">정보 수정</button>
      </MyInfo>

      <hr className="bettwen" />
      <MyStudyCards>
        <div className="myPage-title">
          <h1 className="title">Study Cards Storage</h1>
        </div>
      </MyStudyCards>
    </MyPageComponent>
  );
}

export default MyPage;
