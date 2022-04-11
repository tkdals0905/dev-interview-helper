import React, { useState } from 'react';
import styled from 'styled-components';

const InfoChangeComponent = styled.section`
  display: flex;
  width: 400px;
  /* background-color: pink; */
`;

const Info = styled.div`
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-left: 10px;
  width: 100%;
  display: flex;
  font-size: 13px;
  /* background-color: yellow; */
  button {
    margin-left: 0px;
    padding: 5px 10px;
  }
  hr {
    width: 100%;
    padding-top: 1px;
    background-color: black;
    margin: 6px 0px;
  }
  .top {
    padding: 20px;
  }
  .row {
    padding: 20px;
  }
  input {
    display: flex;
    border-radius: 3px;
    background-color: #fbfbfd;
    font-size: 12px;
    width: 100%;
    height: 30px;
    border: 1px solid #0078ff;
    margin-top: 5px;
    margin-bottom: 5px;
    opacity: 0.6;
    padding: 1px 0px 1px 10px;
  }
`;

function InfoChange() {
  // const { me } = useSelector((state) => state.user);
  // console.log(me);

  const [emailInfo, setEmailInfo] = useState({
    email: '',
  });
  // const [message, setMessage] = useState('');
  // const [isFull, setIsFull] = useState(false);
  // 이메일 입력 : emailInfo = {email: 이메일}
  const handleInputValue = (key) => (e) => {
    setEmailInfo({ ...emailInfo, [key]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    // 폼제출하고 나서 새로고침 방지
    // loginMutation.mutate({
    //   email: loginInfo.email,
    // });
  };
  return (
    <>
      {/* // <MyPageComponent> */}
      {/* <MainPage> */}

      <InfoChangeComponent>
        <Info>
          <form onSubmit={handlesubmit}>
            <label htmlFor="user-email">이메일</label>
            <input
              id="user-email"
              type="email"
              placeholder="이메일"
              onChange={handleInputValue('email')}
            />
            <button className="email-btn" type="submit">
              Email edit
            </button>
          </form>
          <hr />
          <form onSubmit={handlesubmit}>
            <label htmlFor="past-password">현재 비밀번호</label>
            <input
              id="past-password"
              type="password"
              placeholder="이전 비밀번호"
              onChange={handleInputValue('password')}
            />
            <label htmlFor="set-password">비밀번호 생성</label>
            <input
              id="set-password"
              type="password"
              placeholder="새로운 비밀번호"
              onChange={handleInputValue('password')}
            />

            <button className="pass-btn" type="submit">
              Password edit
            </button>
          </form>
        </Info>
      </InfoChangeComponent>
      {/* </MainPage> */}
      {/* // </MyPageComponent> */}
    </>
  );
}

export default InfoChange;
