import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CLOSE_CARD_DETAIL } from '../reducers/card';
import Divider from './Divider';

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
const CardContainer = styled.div`
  background-color: white;
  width: 70%;
  height: 90%;
  border-radius: 4px;
  overflow-y: auto;
  .back-arrow {
    font-size: 20px;
    margin-left: 15px;
    margin-top: 5px;
    font-weight: 800;
    cursor: pointer;
  }
  pre {
    white-space: pre-wrap;
    font-size: 20px;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;

function CardDetail() {
  const dispatch = useDispatch();
  const { isDetail } = useSelector((state) => state.card);
  const handleClose = () => {
    dispatch({
      type: CLOSE_CARD_DETAIL,
    });
  };
  return (
    <Container>
      <CardContainer>
        <div
          role="button"
          onClick={handleClose}
          className="back-arrow"
          aria-hidden="true"
        >
          ❌
        </div>
        <Divider title="질문" />
        <pre>{isDetail.question}</pre>
        <Divider title="답변" />
        <pre>{isDetail.answer}</pre>
      </CardContainer>
    </Container>
  );
}

export default CardDetail;
