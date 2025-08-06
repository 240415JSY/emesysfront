import React from "react";
import { Link } from "react-router-dom";

export default function Component() {
    return (
        <>
            <div
                className="skin_block"
                style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                }}
            >
                <div
                    className="normal_module"
                    style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        padding: "0px",
                        backgroundPosition: "center center",
                        backgroundRepeat: "repeat, no-repeat",
                        backgroundColor: "transparent",
                        backgroundImage:
                            'url("https://emesys.clickn.co.kr/images/bg_white_per0.png")',
                    }}
                >
                    <div
                        className="module_wrap"
                        style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            padding: "0px",
                            maxWidth: "1280px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <div
                            className="module_container"
                            style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                padding: "0px",
                                marginLeft: "10px",
                                marginRight: "10px",
                                minHeight: "40px",
                                paddingTop: "100px",
                                paddingBottom: "40px",
                            }}
                        >
                            <div
                                className="title"
                                style={{
                                    boxSizing: "border-box",
                                    margin: "0px",
                                    padding: "0px",
                                    fontFamily: 'Montserrat, "Noto Sans KR"',
                                    fontSize: "32px",
                                    color: "rgb(0, 0, 0)",
                                    fontWeight: 500,
                                }}
                            >
                                <p
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        padding: "0px",
                                        overflowWrap: "break-word",
                                        wordBreak: "keep-all",
                                        textAlign: "center",
                                    }}
                                >
                                    아이디/비밀번호 찾기
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="skin_block"
                style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                }}
            >
                <div
                    className="special_module"
                    style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        padding: "0px",
                        backgroundPosition: "center center",
                        backgroundRepeat: "repeat, no-repeat",
                        backgroundColor: "transparent",
                        backgroundImage:
                            'url("https://emesys.clickn.co.kr/images/bg_white_per0.png")',
                    }}
                >
                    <div
                        className="module_wrap"
                        style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            padding: "0px",
                            maxWidth: "1280px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <div
                            className="module_container"
                            style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                padding: "0px",
                                marginLeft: "10px",
                                marginRight: "10px",
                                minHeight: "40px",
                                paddingTop: "0px",
                                paddingBottom: "200px",
                            }}
                        >
                            <div
                                className="member_wrap"
                                style={{
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    margin: "0px auto",
                                    maxWidth: "400px",
                                }}
                            >
                                <div
                                    className="tab_menu"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        padding: "0px",
                                        textAlign: "center",
                                    }}
                                >
                                    <ul
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px",
                                            padding: "0px",
                                            listStyle: "none",
                                            borderBottom: "1px solid rgb(212, 212, 212)",
                                            display: "flex",
                                            fontSize: "0px",
                                        }}
                                    >
                                        <li
                                            className="tab_item on"
                                            style={{
                                                listStyle: "none",
                                                flex: "1 1 0%",
                                                verticalAlign: "top",
                                                fontSize: "18px",
                                                color: "rgb(136, 136, 136)",
                                                fontWeight: 500,
                                                textAlign: "center",
                                            }}
                                        >
                                            <Link
                                                to="/find-id"
                                                replace
                                                style={{
                                                    boxSizing: "border-box",
                                                    textDecoration: "none",
                                                    border: "none",
                                                    outline: "none",
                                                    color: "inherit",
                                                    padding: "12px 15px",
                                                    display: "block",
                                                }}
                                            >
                                                아이디 찾기
                                            </Link>
                                        </li>
                                        <li
                                            className="tab_item"
                                            style={{
                                                listStyle: "none",
                                                flex: "1 1 0%",
                                                verticalAlign: "top",
                                                fontSize: "18px",
                                                fontWeight: 500,
                                                textAlign: "center",
                                                borderBottom: "1px solid rgb(0, 0, 0)",
                                                position: "relative",
                                                color: "rgb(0, 0, 0)",
                                            }}
                                        >
                                            <Link
                                                to="/find-pw"
                                                replace
                                                style={{
                                                    boxSizing: "border-box",
                                                    textDecoration: "none",
                                                    border: "none",
                                                    outline: "none",
                                                    color: "inherit",
                                                    padding: "12px 15px",
                                                    display: "block",
                                                }}
                                            >
                                                 비밀번호 찾기
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="title"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        padding: "30px 0px",
                                    }}
                                >
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px",
                                            padding: "0px",
                                            overflowWrap: "break-word",
                                            textAlign: "center",
                                        }}
                                    >
                    <span
                        style={{
                            boxSizing: "border-box",
                            fontSize: "15px",
                            color: "rgb(136, 136, 136)",
                        }}
                    >
                      가입시 등록한 정보로 비밀번호 찾기
                    </span>
                                    </p>
                                </div>
                                <form
                                    id="forget-form"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        padding: "0px",
                                        clear: "both",
                                    }}
                                >
                                    <input
                                        name="forget_type"
                                        type="hidden"
                                        defaultValue="id"
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px",
                                            padding: "0px",
                                            verticalAlign: "middle",
                                            outlineWidth: "0px",
                                            fontSize: "15px",
                                            lineHeight: 1.5,
                                            fontWeight: 400,
                                            color: "rgb(102, 102, 102)",
                                            fontFamily:
                                                'Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif',
                                        }}
                                    />
                                    <ul
                                        className="login_form form_contents"
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px",
                                            padding: "0px",
                                            listStyle: "none",
                                        }}
                                    >
                                        <li
                                            className="form_type_id"
                                            style={{
                                                listStyle: "none",
                                                paddingTop: "0px",
                                            }}
                                        >
                                            <ul
                                                className="form_section"
                                                style={{
                                                    boxSizing: "border-box",
                                                    margin: "0px",
                                                    padding: "0px",
                                                    listStyle: "none",
                                                }}
                                            >
                                                <li
                                                    className="form_items"
                                                    style={{
                                                        listStyle: "none",
                                                        fontSize: "0px",
                                                        position: "relative",
                                                        marginTop: "0px",
                                                    }}
                                                >
                                                    <input
                                                        name="member_id"
                                                        type="text"
                                                        required
                                                        placeholder="아이디"
                                                        style={{
                                                            margin: "0px",
                                                            verticalAlign: "middle",
                                                            outlineWidth: "0px",
                                                            fontSize: "15px",
                                                            fontWeight: 400,
                                                            fontFamily:
                                                                'Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif',
                                                            appearance: "none",
                                                            padding: "0px 9px",
                                                            border: "1px solid rgba(0, 0, 0, 0.2)",
                                                            background: "rgba(255, 255, 255, 0.2)",
                                                            boxSizing: "border-box",
                                                            color: "rgb(51, 51, 51)",
                                                            width: "100%",
                                                            borderRadius: "2px",
                                                            height: "54px",
                                                            lineHeight: "52px",
                                                            marginTop: "4px",
                                                        }}
                                                    />
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            className="form_type_email"
                                            style={{
                                                listStyle: "none",
                                                paddingTop: "0px",
                                            }}
                                        >
                                            <ul
                                                className="form_section"
                                                style={{
                                                    boxSizing: "border-box",
                                                    margin: "0px",
                                                    padding: "0px",
                                                    listStyle: "none",
                                                }}
                                            >
                                                <li
                                                    className="form_items"
                                                    style={{
                                                        listStyle: "none",
                                                        fontSize: "0px",
                                                        position: "relative",
                                                        marginTop: "0px",
                                                    }}
                                                >
                                                    <input
                                                        name="member_email"
                                                        type="email"
                                                        required
                                                        placeholder="이메일"
                                                        style={{
                                                            margin: "0px",
                                                            verticalAlign: "middle",
                                                            outlineWidth: "0px",
                                                            fontSize: "15px",
                                                            fontWeight: 400,
                                                            fontFamily:
                                                                'Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif',
                                                            appearance: "none",
                                                            padding: "0px 9px",
                                                            border: "1px solid rgba(0, 0, 0, 0.2)",
                                                            background: "rgba(255, 255, 255, 0.2)",
                                                            boxSizing: "border-box",
                                                            color: "rgb(51, 51, 51)",
                                                            width: "100%",
                                                            borderRadius: "2px",
                                                            height: "54px",
                                                            lineHeight: "52px",
                                                            marginTop: "4px",
                                                        }}
                                                    />
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            className="form_type_submit"
                                            style={{
                                                boxSizing: "border-box",
                                                margin: "0px",
                                                padding: "0px",
                                                listStyle: "none",
                                                paddingTop: "30px",
                                                textAlign: "center",
                                            }}
                                        >
                                            <ul
                                                className="form_section"
                                                style={{
                                                    boxSizing: "border-box",
                                                    margin: "0px",
                                                    padding: "0px",
                                                    listStyle: "none",
                                                }}
                                            >
                                                <li
                                                    className="form_items"
                                                    style={{
                                                        boxSizing: "border-box",
                                                        margin: "0px",
                                                        padding: "0px",
                                                        listStyle: "none",
                                                        fontSize: "0px",
                                                        position: "relative",
                                                        marginTop: "0px",
                                                    }}
                                                >
                                                    <button
                                                        className="btn_resp size_d color2"
                                                        type="submit"
                                                        style={{
                                                            margin: "0px",
                                                            appearance: "none",
                                                            fontWeight: 400,
                                                            fontFamily:
                                                                'Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif',
                                                            border: "1px solid rgb(204, 204, 204)",
                                                            padding: "0px 10px",
                                                            transition:
                                                                "border-color 0.2s, background-color 0.2s",
                                                            boxSizing: "border-box",
                                                            textAlign: "center",
                                                            cursor: "pointer",
                                                            verticalAlign: "middle",
                                                            minWidth: "60px",
                                                            outline: "none",
                                                            outlineWidth: "initial",
                                                            borderColor: "rgb(51, 51, 51)",
                                                            backgroundColor: "rgb(51, 51, 51)",
                                                            color: "rgb(255, 255, 255)",
                                                            borderRadius: "3px",
                                                            height: "45px",
                                                            width: "100%",
                                                            lineHeight: "43px",
                                                            fontSize: "16px",
                                                        }}
                                                    >
                                                        비밀번호 찾기
                                                    </button>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <link
                    type="text/css"
                    href="https://emesys.clickn.co.kr/assets/css/modules/special_common.css?v=20250804104227"
                    rel="stylesheet"
                    style={{ boxSizing: "border-box" }}
                />
                <link
                    type="text/css"
                    href="https://emesys.clickn.co.kr/assets/css/modules/module_member.css?v=20250804104227"
                    rel="stylesheet"
                    style={{ boxSizing: "border-box" }}
                />
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
html {
  box-sizing: border-box;
  text-size-adjust: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

body, h1, h2, h3, h4, h5, h6, ul, li {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  color: rgb(102, 102, 102);
  font-family: Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif;
}
`,
                }}
            />
        </>
    );
}