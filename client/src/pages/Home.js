import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Cards from '../components/Cards';
import ShareCards from '../components/ShareCards';
import { LOAD_CARDS_SUCCESS } from '../reducers/card';
import Divider from '../components/Divider';
import CardForm from '../components/CardForm';
import CardDetail from '../components/CardDetail';

const Container = styled.main`
  width: 100%;
  margin: auto;
  position: relative;
  .studyBtn {
    position: absolute;
    border: none;
    font-size: 17px;
    width: 130px;
    height: 45px;
    font-weight: 700;
    color: white;
    background-color: #00b894;
    border-radius: 5px;
    box-shadow: 5px 6px 16px -7px #000000;
    right: 1.1rem;
    cursor: pointer;
  }
`;

function Home() {
  const dispatch = useDispatch();
  const { mainCards, isLoadCards, isDetail } = useSelector(
    (state) => state.card,
  );
  const [isPostCard, setPostCard] = useState(false);
  useEffect(() => {
    if (!isLoadCards) {
      dispatch({
        type: LOAD_CARDS_SUCCESS,
      });
    }
  }, []);
  return (
    <Container>
      <Divider title="학습 중" />
      <ShareCards />
      <Divider title="문제집" />
      {isDetail ? <CardDetail cardInfo={isDetail} /> : null}
      {isPostCard ? <CardForm handlePostCard={setPostCard} /> : null}
      <Cards cardsInfo={mainCards} handlePostCard={setPostCard} />
    </Container>
  );
}

export default Home;
