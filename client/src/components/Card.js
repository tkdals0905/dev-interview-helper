import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as like } from '@fortawesome/free-solid-svg-icons';
import { faHeart as unlike } from '@fortawesome/free-regular-svg-icons';

const Containner = styled.div`
  width: 356px;
  height: 160px;
  box-shadow: 5px 6px 16px -7px #000000;
  border-radius: 10px;
  padding: 15px 10px 10px 10px;
  position: relative;
  margin-top: 1.5rem;
  color: #dce2f0;
  background-color: #50586c;
  h4 {
    color: #ffdfde;
    display: block;
    margin: 5px 0px 8px 2px;
    font-size: 14px;
  }
  .answer {
    width: 90%;
    height: 50px;
    overflow-y: hidden;
  }
`;

const HeartIcon = styled.div`
  position: absolute;
  right: 1rem;
  span {
    display: inline-block;
    margin-left: 5px;
  }
  .like {
    color: #d32f2f;
  }
`;

const BtnInfo = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  button {
    width: 66px;
    height: 25px;
    border: none;
    margin-left: 5px;
    color: white;
    font-weight: 700;
    border-radius: 2px;
    cursor: pointer;
  }
  #shareBtn {
    background-color: #4a69bd;
  }
  #deleteBtn {
    background-color: #eb2f06;
  }
  #editBtn {
    background-color: #fad390;
  }
  #moreBtn {
    background-color: #78e08f;
  }
`;

function Card({ cardInfo }) {
  const [isLike, setIsLike] = useState(false);
  const [shortAnswer, setShortAnsewer] = useState(cardInfo.answer);

  useEffect(() => {
    if (shortAnswer.length > 51) {
      let str = shortAnswer.substr(0, 51);
      str += ' ....';
      setShortAnsewer(str);
    }
  }, []);

  const handleHeart = () => {
    setIsLike((prev) => !prev);
  };

  return (
    <Containner>
      <HeartIcon onClick={handleHeart}>
        <FontAwesomeIcon
          icon={isLike ? like : unlike}
          className={isLike ? 'like' : 'unlike'}
          size="1x"
        />
        <span>{cardInfo.Likers.length}</span>
      </HeartIcon>
      <h3>{cardInfo.question}</h3>
      <h4>작성자: {cardInfo.username}</h4>
      <div className="answer">
        <p>{shortAnswer}</p>
      </div>
      <BtnInfo>
        <button id="shareBtn" type="button">
          {' '}
          공유하기
        </button>
        <button id="editBtn" type="button">
          {' '}
          수정하기
        </button>
        <button id="deleteBtn" type="button">
          {' '}
          삭제하기
        </button>
        <button id="moreBtn" type="button">
          {' '}
          더 보기
        </button>
      </BtnInfo>
    </Containner>
  );
}

export default Card;
