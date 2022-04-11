import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_CARDS_SUCCESS } from '../reducers/card';
import MyCards from '../components/myCards';
import InfoChange from './InfoChange';

// import Card from '../components/Card';
// import CardsContainner from '../styles/CardsStyle';

// import Card from '../components/Card';
// import ShareCards from '../components/ShareCards';
// import { LOAD_CARDS_SUCCESS } from '../reducers/card';
// import SetMyInfo from '../components/SetMyInfo';

const Background = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const MyPageComponent = styled.div`
  width: 100%;
  max-width: 1100px;
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
`;
const MyInfo = styled.section`
  background: whitesmoke;
  display: flex;
  width: 100%;
  border-radius: 5px;
  font-weight: 700;
  padding: 15px;
  align-items: center;
  font-weight: 700;
  .left-profile {
    display: flex;
    min-width: 400px;
  }
  .sub-title {
    font-size: 25px;
    padding: 20px 10px;
    background: #0a174e;
    color: white;
    border-radius: 5px;
    margin-right: 20px;
  }
  .user-info {
    margin-right: 10px;
  }
  button {
    font-weight: 700;
    color: white;
    padding: 10px 20px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    border: none;
    background: #0078ff;
    margin-left: 5px;
    margin-top: 5px;
  }

  button:active {
    position: relative;
    top: 1px;
  }
  p {
    padding: 5px;
    margin-right: 15px;
  }
`;

const SetInFo = styled.div`
  display: flex;
`;

const MyStudyCards = styled.section`
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
// { cardsInfo }
function MyPage() {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainCards, isLoadCards } = useSelector((state) => state.card);
  const [info, setInfo] = useState(false);

  // 로드 상태가 true 가 된 상태! 카드 보여야지
  useEffect(() => {
    if (!isLoadCards) {
      dispatch({
        type: LOAD_CARDS_SUCCESS,
      });
    }
  }, []);
  const handleInfoChange = () => {
    setInfo(!info);
  };

  return (
    <Background>
      <MyPageComponent>
        <div className="myPage-title">
          <h1 className="title">My Page</h1>
          <h3>{me.username} 님, 환영합니다.</h3>
        </div>
        <MyInfo>
          <div className="left-profile">
            <div className="sub-title">
              <p>
                my <br />
                profile
              </p>
            </div>
            <div className="user-info">
              <p>이름 : {me.username}</p>
              <p>이메일 : {me.email}</p>
              <button
                className="Edit-btn"
                onClick={handleInfoChange}
                type="button"
              >
                info edit
              </button>
            </div>
          </div>

          <SetInFo> {info ? <InfoChange /> : null}</SetInFo>
        </MyInfo>

        <hr className="division" />
        <div className="myPage-title">
          <h1 className="title">Study Cards Storage</h1>
        </div>
        <MyCards cardsInfo={mainCards} />
        <MyStudyCards />
      </MyPageComponent>
    </Background>
  );
}
export default MyPage;
