import styled from 'styled-components';

const CardsContainner = styled.section`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  padding-top: 3rem;
  justify-content: space-between;
  position: relative;
  margin: auto;
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
    top: 0rem;
    right: 1.1rem;
    cursor: pointer;
  }
`;
export default CardsContainner;
