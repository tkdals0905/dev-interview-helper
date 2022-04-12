import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import Confirm from './Confirm';
// import { Link, useNavigate } from 'react-router-dom';
import { infoDeleteAPi, infoAPi } from '../api/user';
// import { DELETE_MY_INFO } from '../reducers/user';

// useMutation : 값을 바꿀때 사용하는 api

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
    margin-right: 5px;
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
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);
  console.log(me.username);
  console.log(me.email);
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState({
    username: '',
    password_now: '',
    password: '',
  });
  console.log(userInfo);
  // const [userInfoP, setUserInfoP] = useState({
  //   password_now: '',
  //   password: '',
  // });

  const handleChangeInfo = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };
  // const handleInputPass = (key) => (e) => {
  //   setUserInfoP({ ...userInfoP, [key]: e.target.value });
  // };

  const infoMutation = useMutation(infoAPi);
  // const infoPMutation = useMutation(infopAPi);
  const deleteMutation = useMutation(infoDeleteAPi);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 폼제출하고 나서 새로고침 방지

    if (me.username !== userInfo.username) {
      infoMutation.mutate({
        email: me.email,
        username: userInfo.username,
        password: userInfo.password,
      });
    }
  };

  // const handlePassWord = async (e) => {
  //   e.preventDefault();
  //   if (
  //     me.password === userInfo.password_now &&
  //     userInfo.password_now !== userInfo.password
  //   ) {
  //     infoMutation.mutate({
  //       password: userInfo.password,
  //     });
  //   } else {
  //     setMessage('info_edit_fail');
  //   }
  // };

  useEffect(() => {
    if (infoMutation === 'error') {
      setMessage('info_edit_fail');
    } else if (infoMutation.status === 'success') {
      setMessage('info_edit_success');
    }
  }, [infoMutation.status]);

  const handleInfoDelete = async (e) => {
    e.preventDefault();

    if (me) {
      deleteMutation.mutate({});
      navigate('/');
      //    navigate('/');
      // dispatch({type:DELETE_MY_INFO})
    }
  };
  const resetMessage = () => {
    setMessage('');
  };
  return (
    <>
      {/* // <MyPageComponent> */}
      {/* <MainPage> */}

      <InfoChangeComponent>
        {message ? (
          <Confirm message={message} handleMessage={resetMessage} />
        ) : null}
        <Info>
          <form onSubmit={handleSubmit}>
            {/* <form onSubmit={handleEmail}> */}
            <label htmlFor="user-email">이름</label>
            <input
              id="user-email"
              type="text"
              placeholder="이름"
              onChange={handleChangeInfo('username')}
            />
            <Link className="link-style" to="/myPage">
              <button className="email-btn" type="submit">
                Nickname edit
              </button>
            </Link>
            {/* </form> */}
            <hr />
            {/* <form onSubmit={handlePassWord}> */}
            <label htmlFor="past-password">현재 비밀번호</label>
            <input
              id="past-password"
              type="password"
              placeholder="현재 비밀번호"
              onChange={handleChangeInfo('password_now')}
            />
            <label htmlFor="set-password">비밀번호 생성</label>
            <input
              id="set-password"
              type="password"
              placeholder="새로운 비밀번호"
              onChange={handleChangeInfo('password')}
            />
            <Link className="link-style" to="/myPage">
              <button className="pass-btn" type="submit">
                Password edit
              </button>
            </Link>
            <button
              className="delete-btn"
              type="submit"
              onClick={handleInfoDelete}
            >
              Profile Delete
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
