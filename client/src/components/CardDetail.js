import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 5, 12, 0.5);
  z-index: 10;
`;

function CardDetail() {
  return <Container>Hello</Container>;
}

export default CardDetail;
