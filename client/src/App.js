import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from './reducers';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Footer from './components/Footer';
import Study from './pages/Study';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const dispatch = useDispatch();
  const meInfo = sessionStorage.getItem('userInfo'); // 세션스토리지에 유저정보가 있는지 확인한다.
  useEffect(() => {
    if (meInfo) {
      dispatch(loginThunk(JSON.parse(meInfo)));
    }
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/study" element={<Study />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
