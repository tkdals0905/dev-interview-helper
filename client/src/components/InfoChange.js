import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Confirm from './Confirm';
// import { Link, useNavigate } from 'react-router-dom';
import { editNameApi, changePWDApi } from '../api/user';
import { EDIT_NAME_SUCCESS } from '../reducers/user';
// import { DELETE_MY_INFO } from '../reducers/user';

// useMutation : 값을 바꿀때 사용하는 api

const InfoChangeComponent = styled.section`
  display: flex;
  width: 400px;
`;

const Info = styled.div`
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-left: 10px;
  width: 100%;
  display: flex;
  font-size: 13px;

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
  const dispatch = useDispatch();
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

  const handleChangeInfo = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  const editNameMutation = useMutation(editNameApi);
  const editPasswordMutaiton = useMutation(changePWDApi);
  // const infoPMutation = useMutation(infopAPi);
  // const deleteMutation = useMutation(infoDeleteAPi);
  // console.log(infoMutation.data);

  const handleEditName = async () => {
    if (me.username !== userInfo.username) {
      editNameMutation.mutate({
        username: userInfo.username,
      });
    }
  };

  const handleEditPassword = async () => {
    if (userInfo.password !== userInfo.password_now) {
      editPasswordMutaiton.mutate({
        password_now: userInfo.password_now,
        password: userInfo.password,
      });
    }
  };
  // const hand
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
    if (editNameMutation.status === 'error') {
      setMessage('info_edit_fail');
    } else if (editNameMutation.status === 'success') {
      setMessage('info_edit_success');
      dispatch({
        type: EDIT_NAME_SUCCESS,
        data: userInfo.username,
      });
    }
  }, [editNameMutation.status]);

  const handleInfoDelete = async (e) => {
    e.preventDefault();

    if (me) {
      // deleteMutation.mutate({});
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
      <InfoChangeComponent>
        {message ? (
          <Confirm message={message} handleMessage={resetMessage} />
        ) : null}
        <Info>
          <label htmlFor="user-email">이름</label>
          <input
            id="user-email"
            type="text"
            placeholder="이름"
            onChange={handleChangeInfo('username')}
          />
          <button onClick={handleEditName} className="email-btn" type="button">
            Nickname edit
          </button>
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
          <button
            className="pass-btn"
            type="submit"
            onClick={handleEditPassword}
          >
            Password edit
          </button>

          <button
            className="delete-btn"
            type="submit"
            onClick={handleInfoDelete}
          >
            Profile Delete
          </button>
        </Info>
      </InfoChangeComponent>
      {/* </MainPage> */}
      {/* // </MyPageComponent> */}
    </>
  );
}

export default InfoChange;
