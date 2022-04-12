import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
