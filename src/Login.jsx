import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Component() {
    const [captchaUrl, setCaptchaUrl] = useState(
        "https://emesys.clickn.co.kr/captcha/image?_=" + Date.now()
    );

    const refreshCaptcha = () => {
        setCaptchaUrl("https://emesys.clickn.co.kr/captcha/image?_=" + Date.now());
    };

    return (
        <>
            {/* 제목 영역 */}
            <div className="skin_block">
                <div
                    className="normal_module"
                    style={{
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "transparent",
                        backgroundImage:
                            'url("https://emesys.clickn.co.kr/images/bg_white_per0.png")',
                    }}
                >
                    <div className="module_wrap">
                        <div className="module_container">
                            <div className="title">
                                <p>로그인</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 로그인 폼 */}
            <form id="login-form" className="login-form">
                <input name="return_url" type="hidden" defaultValue="https://emesys.clickn.co.kr/" />
                <input className="__certifiedRequired" name="certified_required" type="hidden" />

                <div className="form-group">
                    <input
                        name="member_id"
                        type="text"
                        placeholder="아이디 또는 이메일"
                        autoFocus
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <input
                        name="member_pw"
                        type="password"
                        placeholder="비밀번호"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <div className="captcha">
                        <img
                            alt="보안문자"
                            src={captchaUrl}
                            title="보안문자"
                            className="captcha-img"
                            onClick={refreshCaptcha}
                        />
                        <button type="button" className="captcha-refresh" onClick={refreshCaptcha}>
                            <i className="fa fa-refresh"></i>
                        </button>
                    </div>
                    <input
                        id="captcha"
                        name="captcha"
                        type="text"
                        autoComplete="off"
                        placeholder="보안문자 입력"
                        className="form-input"
                    />
                </div>

                <div className="form-options">
                    <label className="checkbox-label">
                        <input name="memorizing_login_id" type="checkbox" />
                        아이디 저장
                    </label>

                    <div className="form-links">
                        <Link to="/find-id">아이디 찾기</Link>
                        <Link to="/find-pw">비밀번호 찾기</Link>
                        <Link to="/join">회원가입</Link>
                    </div>
                </div>

                <div className="form-submit">
                    <button type="submit" className="submit-btn">로그인</button>
                </div>
            </form>

            {/* 스타일 */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
html, body {
    margin: 0;
    padding: 0;
    font-family: Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif;
}

.skin_block {
    position: relative;
}

.module_wrap {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 10px;
}

.module_container {
    margin: 0 10px;
    padding: 100px 0 40px;
    min-height: 40px;
}

.title p {
    font-size: 32px;
    font-weight: 500;
    color: #000;
    text-align: center;
    margin: 0;
}

.login-form {
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-top: 10px;
}

.form-input {
    width: 100%;
    height: 54px;
    padding: 0 10px;
    font-size: 15px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 2px;
    box-sizing: border-box;
}

.captcha {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px; /* 여기 추가! */
  align-items: center;
}

.captcha-img {
  width: 70%;
  height: 54px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 2px;
  cursor: pointer;
  object-fit: cover;
  box-sizing: border-box;
}

.captcha-refresh {
  width: 30%;
  height: 54px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 2px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
  line-height: 54px;
}

.captcha-refresh i {
  display: block; /* 또는 flex */
  line-height: 1;
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 6px;
}

.form-links {
  display: flex;
  align-items: center;
  gap: 0; /* gap 제거하고 패딩으로 정렬 제어 */
}

.form-links a {
  position: relative;
  text-decoration: none;
  color: #333;
  padding: 0 10px;
  line-height: 1;
  font-size: 14px;
}

.form-links a:not(:first-child)::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 14px;
  border-left: 1px solid #ccc;
}

.form-submit {
    margin-top: 30px;
}

.submit-btn {
    width: 100%;
    height: 45px;
    background: #333;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
}
                    `,
                }}
            />
        </>
    );
}