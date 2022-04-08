import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .dividerLine {
    display: inline-block;
    height: 2px;
    width: 40%;
    background-color: black;
  }
  span {
    display: inline-block;
    font-size: 20px;
    margin: 20px 10px 10px 10px;
    font-weight: 600;
  }
`;

function Divider({ title }) {
  return (
    <Container>
      <div className="dividerLine"> </div>
      <span>{title}</span>
      <div className="dividerLine"> </div>
    </Container>
  );
}

export default Divider;
