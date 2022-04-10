import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Container = styled.div``;

function CardDetail() {
  const { id } = useParams();

  return <Container>Hello{id}</Container>;
}

export default CardDetail;
