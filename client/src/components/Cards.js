import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import CardsContainner from '../styles/CardsStyle';

function Cards({ cardsInfo, handlePostCard }) {
  const { me } = useSelector((state) => state.user);
  const [loginCardsInfo, setLoginCardsInfo] = useState([]);
  useEffect(() => {
    if (me) {
      const filterCards = cardsInfo.filter(
        (card) => !me.SharedIdArr.includes(card.id),
      );
      setLoginCardsInfo(filterCards);
    }
  }, [me, me?.Shared.length]);
  const handleStudyBtn = () => {
    handlePostCard(true);
  };
  console.log('loginCardsInfo:', loginCardsInfo);
  return (
    <CardsContainner>
      {me ? (
        <>
          <button onClick={handleStudyBtn} className="studyBtn" type="button">
            문제 추가하기
          </button>
          {loginCardsInfo.map((cardInfo) => (
            <Card key={cardInfo.id} cardRole="main" cardInfo={cardInfo} />
          ))}
        </>
      ) : (
        <>
          {cardsInfo.map((cardInfo) => (
            <Card key={cardInfo.id} cardRole="main" cardInfo={cardInfo} />
          ))}
        </>
      )}
    </CardsContainner>
  );
}

export default Cards;
