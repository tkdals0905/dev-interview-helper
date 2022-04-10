import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MyPageComponent = styled.section`
  display: flex;
  /* align-items: center; */
  flex-direction: column;

  * {
    margin: 0px;
  }

  .myPage-title {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

const MainPage = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
  h2 {
    padding: 20px;
    text-align: center;
    font-size: 30px;
  }
  .between {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  input {
    border-radius: 3px;
    background-color: #fbfbfd;
    font-size: 16px;
    width: 100%;
    height: 40px;
    border: 1px solid #0078ff;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 40px;
    opacity: 0.6;
    padding: 2px 0px 2px 10px;
  }

  .signUp-connect {
    margin-left: 20px;
  }
  form {
    margin-top: 10px;
  }
  .infomation {
    margin-top: 20px;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  background-color: #0078ff;
  cursor: pointer;
`;

const handlesubmit = async (e) => {
  e.preventDefault();
  // 폼제출하고 나서 새로고침 방지
  // loginMutation.mutate({
  //   email: loginInfo.email,
  //   password: loginInfo.password,
  // });
};
function SetMyInfo() {
  const { me } = useSelector((state) => state.user);
  return (
    <MyPageComponent>
      <MainPage>
        {/* <h2 className="myPage-title">마이페이지</h2> */}
        {/* <p>{me.username}</p> */}
        <h3 className="infomation">기본정보 / 수정하기</h3>

        <form onSubmit={handlesubmit}>
          <label htmlFor="user-email">이메일</label>
          <input
            id="user-email"
            type="email"
            placeholder={`이메일${me}`}
            // onChange={handleInputValue('email')}
          />
          <label htmlFor="user-name">이름</label>
          <input
            id="user-name"
            type="text"
            placeholder={`이름${me}`}
            // onChange={handleInputValue('email')}
          />
          <label htmlFor="past-password">비밀번호</label>
          <input
            id="past-password"
            type="password"
            placeholder="비밀번호"
            // onChange={handleInputValue('password')}
          />
          <label htmlFor="set-password">비밀번호</label>
          <input
            id="set-password"
            type="password"
            placeholder="비밀번호"
            // onChange={handleInputValue('password')}
          />
          <SubmitBtn type="submit">기본 정보 수정하기</SubmitBtn>
        </form>
      </MainPage>
    </MyPageComponent>
  );
}

export default SetMyInfo;
