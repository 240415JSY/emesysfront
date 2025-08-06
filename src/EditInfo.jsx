import React, { useState, useEffect } from "react";

// 컴포넌트 정의 (EditInfo)
export default function EditInfo() {
    // profileImage: 화면에 보여줄 이미지 URL (base64 형식)
    // selectedFile: 새로 선택한 이미지 파일 (base64 형식)
    const [profileImage, setProfileImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [agreePersonal, setAgreePersonal] = useState(false);


    // email: 입력한 이메일 주소
    const [email, setEmail] = useState("");

    // 컴포넌트가 처음 화면에 나타날 때(localStorage에 저장된 값 불러오기)
    useEffect(() => {
        const savedImage = localStorage.getItem("profileImage"); // 저장된 프로필 이미지 가져오기
        if (savedImage) {
            setProfileImage(savedImage); // 가져온 이미지를 화면에 보여주기 위해 상태로 저장
        }

        const savedEmail = localStorage.getItem("email"); // 저장된 이메일 가져오기
        if (savedEmail) {
            setEmail(savedEmail); // 가져온 이메일을 입력칸에 미리 보여주기 위해 상태로 저장
        }

        const savedAgree = localStorage.getItem("agreePersonal");
        if (savedAgree === "true") setAgreePersonal(true);
    }, []); // []는 한 번만 실행하라는 뜻 (처음 렌더링 시)

    // 이미지 업로드 input에서 파일을 선택했을 때 실행되는 함수
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // 사용자가 선택한 파일 중 첫 번째 파일
        if (file) {
            const reader = new FileReader(); // 파일 내용을 읽기 위한 브라우저 내장 객체 생성

            // 파일 읽기가 끝났을 때 실행되는 함수
            reader.onloadend = () => {
                setProfileImage(reader.result); // 화면에 미리 보여줄 이미지 설정
                setSelectedFile(reader.result); // 저장할 이미지로 설정
            };

            reader.readAsDataURL(file); // 파일을 base64 형식으로 읽음
        }
    };

    // 이메일 입력칸에서 값이 바뀔 때마다 상태를 업데이트하는 함수
    const handleEmailChange = (e) => {
        setEmail(e.target.value); // 입력한 이메일 값 저장
    };

    // 저장 버튼을 눌렀을 때 실행되는 함수
    const handleFormSubmit = (e) => {
        e.preventDefault(); // 페이지 새로고침 방지

        // 이메일이 비어있으면 저장하지 않음
        if (!email.trim()) {
            alert("이메일을 입력하세요.");
            return;
        }

        // 이미지가 새로 선택되었으면 그것을 저장, 아니면 기존 이미지 저장
        if (selectedFile) {
            localStorage.setItem("profileImage", selectedFile); // 새 이미지 저장
        } else if (profileImage) {
            localStorage.setItem("profileImage", profileImage); // 기존 이미지 다시 저장
        }

        localStorage.setItem("email", email); // 이메일 저장
        localStorage.setItem("agreePersonal", agreePersonal);

        alert("변경사항이 저장되었습니다."); // 사용자에게 알림 표시
    };

    return (
        <div style={{ maxWidth: "1280px", padding: "60px 10px", margin: "0 auto" }}>
            {/* 마이페이지 타이틀 영역 */}
            <div
                className="title wow"
                style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    marginBottom: "20px",
                    animationName: "fadeInRight",
                }}
            >
                <p
                    style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        padding: "0px",
                        overflowWrap: "break-word",
                    }}
                >
                    <span
                        style={{
                            boxSizing: "border-box",
                            fontSize: "30px",
                            color: "rgb(0, 0, 0)",
                            fontWeight: 500,
                        }}
                    >
                        마이페이지
                    </span>
                </p>
            </div>

            <div style={{ display: "flex", gap: "40px" }}>
                {/* 왼쪽 사이드바 (비어 있음) */}
                <div
                    id="mypageLnb"
                    className="mypage_lnb"
                    style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        padding: "0px",
                        transition: "0.64s",
                        display: "table-cell",
                        verticalAlign: "top",
                        width: "180px",
                        paddingTop: "40px",
                        position: "relative",
                    }}
                >
                    {/* 모바일에서는 메뉴를 토글하는 버튼 (현재 숨겨져 있음) */}
                    <a
                        className="lnb_toggle"
                        href="#none"
                        style={{
                            display: "none",
                        }}
                    >
                        <div className="icon">
                            <strong style={{ display: "block", textIndent: "-9999px" }}>
                                마이페이지 메뉴 오픈
                            </strong>
                        </div>
                    </a>
                    <ul
                        id="MypageMenu"
                        className="lnb_container"
                        style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            padding: "0px",
                            listStyle: "none",
                            borderTop: "1px solid rgb(219, 219, 219)",
                            paddingTop: "40px",
                        }}
                    />
                </div>

                {/* 오른쪽 메인 콘텐츠 영역 */}
                <div style={{ flex: 1, boxSizing: "border-box" }}>
                    <div style={{ paddingTop: "0px" }}>
                        <h2
                            style={{
                                fontSize: "22px",
                                fontWeight: 500,
                                borderBottom: "2px solid #333",
                                paddingBottom: "8px",
                                marginTop: 0,
                                color: "rgb(0, 0, 0)",
                            }}
                        >
                            회원정보수정
                        </h2>

                        {/* 정보 수정 폼 시작 */}
                        <form style={{ marginTop: 0 }} onSubmit={handleFormSubmit}>
                            {/* 프로필 사진 블럭 */}
                            <div style={{ marginBottom: "30px", textAlign: "center" }}>
                                {/* 업로드된 이미지 또는 기본 이미지 보여주기 */}
                                <img
                                    src={profileImage || "https://via.placeholder.com/120"}
                                    alt="프로필 사진"
                                    style={{
                                        width: "120px",
                                        height: "120px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        border: "1px solid #ddd",
                                    }}
                                />
                                <div style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
                                    프로필 사진
                                </div>

                                <div style={{ marginTop: "10px" }}>
                                    <label
                                        htmlFor="profile-upload"
                                        style={{
                                            width: "100px",              // ✅ 고정 너비 지정
                                            display: "block",               // block으로 만들어줌
                                            margin: "0 auto",               // 수평 가운데 정렬
                                            padding: "6px 12px",
                                            backgroundColor: "#f0f0f0",
                                            border: "1px solid #ccc",
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                            fontSize: "14px",
                                        }}
                                    >
                                        이미지 업로드
                                    </label>
                                    <input
                                        id="profile-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        style={{ display: "none" }}
                                    />
                                </div>

                            </div>

                            {/* 회원 정보 제목 */}
                            <div
                                className="content_sub_header"
                                style={{ boxSizing: "border-box", margin: 0, padding: 0 }}
                            >
                                <p
                                    className="sub_title"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: 0,
                                        overflowWrap: "break-word",
                                        padding: "0 0 10px",
                                        borderBottom: "1px solid rgb(0, 0, 0)",
                                        color: "rgb(0, 0, 0)",
                                        fontWeight: 500,
                                        lineHeight: 1.7,
                                        fontSize: "18px",
                                    }}
                                >
                                    <span style={{ boxSizing: "border-box", fontSize: "18px" }}>
                                        회원 정보
                                    </span>
                                </p>
                            </div>

                            {/* 회원 정보 입력 폼 */}
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <tbody>
                                {/* 아이디 항목 */}
                                <tr style={{ height: "55px", borderBottom: "1px solid #e3e3e3" }}>
                                    <td
                                        style={{
                                            width: "160px",
                                            fontSize: "14px",
                                            color: "#333",
                                            padding: "10px 0",
                                            borderRight: "1px solid #e3e3e3",
                                        }}
                                    >
                                        아이디
                                    </td>
                                    <td
                                        style={{
                                            fontSize: "14px",
                                            color: "#000",
                                            padding: "10px 0 10px 30px",
                                        }}
                                    >
                                        여기 아이디 표시
                                    </td>
                                </tr>

                                {/* 비밀번호 항목 */}
                                <tr style={{ height: "55px", borderBottom: "1px solid #e3e3e3" }}>
                                    <td
                                        style={{
                                            fontSize: "14px",
                                            color: "#333",
                                            padding: "10px 0",
                                            borderRight: "1px solid #e3e3e3",
                                        }}
                                    >
                                        비밀번호
                                    </td>
                                    <td
                                        style={{
                                            padding: "10px 0 10px 30px",
                                        }}
                                    >
                                        <button
                                            type="button"
                                            style={{
                                                border: "1px solid #ccc",
                                                background: "transparent",
                                                height: "35px",
                                                padding: "0 10px",
                                                fontSize: "14px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            비밀번호 변경
                                        </button>
                                    </td>
                                </tr>

                                {/* 이메일 항목 */}
                                <tr style={{ height: "55px", borderBottom: "1px solid #e3e3e3" }}>
                                    <td
                                        style={{
                                            fontSize: "14px",
                                            color: "#333",
                                            padding: "10px 0",
                                            borderRight: "1px solid #e3e3e3",
                                        }}
                                    >
                                        이메일주소
                                    </td>
                                    <td
                                        style={{
                                            padding: "10px 0 10px 30px",
                                        }}
                                    >
                                        <input
                                            type="email"
                                            value={email} // 상태값을 입력창에 연결
                                            onChange={handleEmailChange} // 입력값 변경 시 상태 업데이트
                                            placeholder="이메일주소 입력"
                                            style={{
                                                width: "100%",
                                                maxWidth: "410px",
                                                height: "35px",
                                                padding: "0 9px",
                                                fontSize: "15px",
                                                border: "1px solid rgba(0,0,0,0.2)",
                                            }}
                                        />
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* 선택적 동의 항목 (내용은 아직 없음) */}
                            <div style={{ marginTop: "60px" }}>
                                <h3
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        borderBottom: "1px solid #000",
                                        paddingBottom: "10px",
                                        color: "rgb(0, 0, 0)",
                                    }}
                                >
                                    선택적 동의 항목
                                </h3>
                            </div>

                            <div
                                className="sub_desc"
                                style={{
                                    boxSizing: "border-box",
                                    margin: "0px",
                                    fontSize: "14px",
                                    color: "rgb(51, 51, 51)",
                                }}
                            >
                                <div
                                    className="radio_check_group"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        padding: "0px",
                                        marginLeft: "-24px",
                                    }}
                                >
                                    <label
                                        style={{
                                            boxSizing: "border-box",
                                            display: "inline-block",
                                            position: "relative",
                                            verticalAlign: "top",
                                            lineHeight: "29px",
                                            cursor: "default",
                                            marginLeft: "20px",
                                            fontSize: "14px",
                                            color: "rgb(102, 102, 102)",
                                        }}
                                    >
                                        <input
                                            name="agree_personal"
                                            type="checkbox"
                                            value="1"
                                            checked={agreePersonal} // 상태 연결
                                            onChange={(e) => setAgreePersonal(e.target.checked)} // 상태 업데이트
                                            style={{
                                                verticalAlign: "middle",
                                                width: "16px",
                                                height: "16px",
                                                marginRight: "8px", // 글자와 간격
                                                cursor: "pointer",
                                            }}
                                        />
                                        <em
                                            style={{
                                                boxSizing: "border-box",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                fontStyle: "normal",
                                                wordBreak: "break-all",
                                            }}
                                        >
                                            개인정보 수집 및 이용
                                        </em>
                                    </label>
                                </div>
                            </div>


                            {/* 저장 버튼 */}
                            <div style={{ textAlign: "center", paddingTop: "60px" }}>
                                <button
                                    type="submit"
                                    style={{
                                        background: "#333",
                                        color: "#fff",
                                        height: "60px",
                                        minWidth: "180px",
                                        border: "1px solid #333",
                                        borderRadius: "3px",
                                        fontSize: "15px",
                                        cursor: "pointer",
                                    }}
                                >
                                    저장
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* 글로벌 스타일 설정 (전체 폰트, 배경 등) */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        html, body {
                            margin: 0; padding: 0; width: 100%; height: 100%;
                            font-size: 15px;
                            line-height: 1.5;
                            font-weight: 400;
                            color: rgb(102, 102, 102);
                            font-family: Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif;
                            background: rgb(255, 255, 255);
                            box-sizing: border-box;
                            overflow-x: hidden;
                            -webkit-text-size-adjust: none;
                            text-size-adjust: none;
                        }
                    `,
                }}
            />
        </div>
    );
}