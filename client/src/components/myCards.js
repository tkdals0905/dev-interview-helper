import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import CardsContainner from '../styles/CardsStyle';

function MyCards({ cardsInfo }) {
  const { me } = useSelector((state) => state.user);

  return (
    <CardsContainner>
      {cardsInfo
        .filter((cardInfo) => me.username === cardInfo.username)
        .map((cardInfo) => (
          <Card key={cardInfo.id} cardRole="main" cardInfo={cardInfo} />
        ))}
    </CardsContainner>
  );
}

export default MyCards;
