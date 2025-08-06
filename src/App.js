// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // 로그인 페이지 컴포넌트
import Join from './Join';   // 회원가입 페이지 컴포넌트
import FindId from './FindId'; // 아이디 찾기 페이지 컴포넌트
import FindPW from './FindPW';
import Editinfo from './EditInfo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/find-id" element={<FindId />} />
                <Route path="/find-pw" element={<FindPW />} />
            </Routes>
        </Router>
    );
}

export default App;
