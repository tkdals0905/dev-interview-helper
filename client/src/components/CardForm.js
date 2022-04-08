import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -90px;
  width: 100%;
  height: 110%;
  background-color: rgba(0, 5, 12, 0.5);
  z-index: 10;
  .post-form {
    position: fixed;
    top: 5%;
    width: 660px;
    height: 650px;
    background-color: white;
    border-radius: 3px;
  }
  .back-arrow {
    font-size: 20px;
    margin-left: 15px;
    margin-top: 5px;
    font-weight: 800;
    cursor: pointer;
  }
  #question,
  #answer {
    display: block;
    margin: auto;
    width: 580px;
    height: 240px;
  }
  #postBtn {
    display: block;
    border: none;
    width: 344px;
    height: 54px;
    margin: 20px auto 10px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 3px;
    color: white;
  }
  p {
    font-size: 20px;
    margin-left: 2.5rem;
  }
  .ableBtn {
    background-color: #00b894;
    cursor: pointer;
  }
  .disabledBtn {
    background-color: #b2bec3;
    cursor: not-allowed;
  }
`;

function CardForm({ handlePostCard }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [cardInfo, setCardInfo] = useState({
    question: '',
    answer: '',
  });
  const [isFull, setIsFull] = useState(false);
  const handleInputValue = (key) => (e) => {
    setCardInfo({ ...cardInfo, [key]: e.target.value });
  };
  useEffect(() => {
    if (cardInfo.question && cardInfo.answer) {
      setIsFull(true);
    } else {
      setIsFull(false);
    }
  }, [cardInfo.question, cardInfo.answer]);

  return (
    <Container>
      <form className="post-form" onSubmit={handleSubmit}>
        <div
          role="button"
          onClick={() => handlePostCard(false)}
          className="back-arrow"
          aria-hidden="true"
        >
          ❌
        </div>
        <p>질문</p>
        <textarea id="question" onChange={handleInputValue('question')} />
        <p>답변</p>
        <textarea id="answer" onChange={handleInputValue('answer')} />
        <button
          id="postBtn"
          disabled={!isFull}
          className={isFull ? 'ableBtn' : 'disabledBtn'}
          type="submit"
        >
          추가하기
        </button>
      </form>
    </Container>
  );
}

export default CardForm;
