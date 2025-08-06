import React from "react";

export default function Component() {
    return (
        <>
            <div
                className="module_container"
                style={{
                    margin: "0 10px",
                    padding: "0px",
                    minHeight: "40px",
                    paddingTop: "100px",
                    paddingBottom: "40px",
                }}
            >
                <div
                    className="title"
                    style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "32px",
                        color: "rgb(0, 0, 0)",
                        fontWeight: 500,
                    }}
                >
                    <p
                        style={{
                            margin: "0px",
                            padding: "0px",
                            overflowWrap: "break-word",
                            wordBreak: "keep-all",
                            textAlign: "center",
                        }}
                    >
                        회원가입
                    </p>
                </div>
            </div>
            <form
                id="join-form"
                style={{
                    clear: "both",
                }}
            >
                <div
                    className="member_wrap"
                    style={{
                        margin: "0px auto",
                        maxWidth: "460px",
                    }}
                >
                    <ul
                        className="join_form form_contents radio_checkbox_type2"
                    >
                        <li
                            className="form_type_input pilsu"
                            style={{
                                marginTop: "11px",
                            }}
                        >
                            <ul
                                className="form_section"
                            >
                                <li
                                    className="form_texts"
                                    style={{
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        className="form_title"
                                        style={{
                                            paddingRight: "20px",
                                        }}
                                    >
                                        <h4
                                            style={{
                                                color: "rgb(51, 51, 51)",
                                            }}
                                        >
                                            아이디
                                            <span style={{ color: "red" }}>*</span>
                                            <i
                                                className="fa"
                                                style={{
                                                    position: "relative",
                                                    height: "12px",
                                                }}
                                            />
                                        </h4>
                                    </div>
                                </li>
                                <li
                                    className="form_items"
                                    style={{
                                        marginTop: "2px",
                                        position: "relative",
                                    }}
                                >
                                    <input
                                        name="member_id"
                                        type="text"
                                        placeholder="영문 소문자, 숫자, 6~20자"
                                    />
                                    <p
                                        className="form_msg txt_point"
                                        style={{
                                            overflowWrap: "break-word",
                                            display: "inline",
                                            fontSize: "14px",
                                            lineHeight: "30px",
                                            color: "rgb(241, 80, 78)",
                                        }}
                                    >
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li
                            className="form_type_pass pilsu"
                            style={{
                                margin: "0px",
                                padding: "0px",
                                paddingTop: "4px",
                                marginTop: "11px",
                            }}
                        >
                            <ul
                                className="form_section"
                            >
                                <li
                                    className="form_texts"
                                    style={{
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        className="form_title"
                                        style={{
                                            paddingRight: "20px",
                                        }}
                                    >
                                        <h4
                                            style={{
                                                margin: "0px",
                                                fontSize: "15px",
                                                color: "rgb(51, 51, 51)",
                                            }}
                                        >
                                            비밀번호
                                            <span style={{ color: "red" }}>*</span>
                                            <i
                                                className="fa"
                                                style={{
                                                    position: "relative",
                                                    height: "12px",
                                                }}
                                            />
                                        </h4>
                                    </div>
                                </li>
                                <li
                                    className="form_items"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        fontSize: "0px",
                                        marginTop: "2px",
                                        position: "relative",
                                    }}
                                >
                                    <input
                                        name="member_pw"
                                        type="password"
                                        placeholder="비밀번호(영문 대/소문자, 숫자, 특수문자 중 2가지 조합, 8~20자)"
                                    />
                                    <input
                                        name="member_pw_confirm"
                                        type="password"
                                        placeholder="비밀번호 확인"
                                    />
                                    <p
                                        className="form_msg txt_point"
                                        style={{
                                            overflowWrap: "break-word",
                                            display: "inline",
                                            fontSize: "14px",
                                            lineHeight: "30px",
                                            color: "rgb(241, 80, 78)",
                                        }}
                                    >
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li
                            className="form_type_email pilsu"
                            style={{
                                margin: "0px",
                                padding: "0px",
                                paddingTop: "4px",
                                marginTop: "11px",
                            }}
                        >
                            <ul
                                className="form_section"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                }}
                            >
                                <li
                                    className="form_texts"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        position: "relative",
                                        marginTop: "0px",
                                    }}
                                >
                                    <div
                                        className="form_title"
                                        style={{
                                            margin: "0px",
                                            padding: "0px",
                                            paddingRight: "20px",
                                        }}
                                    >
                                        <h4
                                            style={{
                                                color: "rgb(51, 51, 51)",
                                            }}
                                        >
                                            이메일주소
                                            <span style={{ color: "red" }}>*</span>
                                            <i
                                                className="fa"
                                                style={{
                                                    position: "relative",
                                                    height: "12px",
                                                }}
                                            />
                                        </h4>
                                    </div>
                                </li>
                                <li
                                    className="form_items"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        fontSize: "0px",
                                        marginTop: "2px",
                                        position: "relative",
                                    }}
                                >
                                    <input
                                        name="member_email"
                                        type="email"
                                        placeholder="이메일주소 입력"
                                    />
                                    <p
                                        className="form_msg txt_point"
                                        style={{
                                            margin: "0px",
                                            padding: "0px",
                                            overflowWrap: "break-word",
                                            display: "inline",
                                            fontSize: "14px",
                                            lineHeight: "30px",
                                            color: "rgb(241, 80, 78)",
                                        }}
                                    >
                    <span
                        style={{ display: "block" }}
                    />
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li
                            className="form_type_checkbox join_check_all"
                            style={{
                                margin: "0px",
                                padding: "0px",
                                paddingTop: "4px",
                                marginTop: "11px",
                            }}
                        >
                            <ul
                                className="form_section"
                                style={{
                                    margin: "0px",
                                }}
                            >
                                <li
                                    className="form_items"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        fontSize: "0px",
                                        position: "relative",
                                        marginTop: "0px",
                                    }}
                                >
                                    <div
                                        className="radio_check_group all_agree_chk"
                                        style={{
                                            margin: "0px",
                                            padding: "0px",
                                            marginLeft: "0px",
                                            borderBottom: "1px dashed rgb(197, 197, 197)",
                                            marginBottom: "15px",
                                            paddingBottom: "15px",
                                        }}
                                    >
                                        <label
                                            style={{
                                                display: "inline-block",
                                                position: "relative",
                                                verticalAlign: "top",
                                                lineHeight: "29px",
                                                cursor: "default",
                                                fontSize: "14px",
                                                color: "rgb(102, 102, 102)",
                                                marginLeft: "0px",
                                            }}
                                        >
                                            <input
                                                className="check_all"
                                                name="all_chk_agree"
                                                type="checkbox"
                                                value="1"
                                            />
                                            <em
                                                style={{
                                                    display: "inline-block",
                                                    verticalAlign: "middle",
                                                    fontStyle: "normal",
                                                    paddingLeft: "4px",
                                                    wordBreak: "break-all",
                                                }}
                                            >
                                                전체 동의하기
                                            </em>
                                        </label>
                                    </div>
                                    <div
                                        className="radio_check_group"
                                        style={{
                                            margin: "0px",
                                            padding: "0px",
                                            marginLeft: "0px",
                                        }}
                                    >
                                        <label
                                            style={{
                                                display: "inline-block",
                                                position: "relative",
                                                verticalAlign: "top",
                                                lineHeight: "29px",
                                                cursor: "default",
                                                fontSize: "14px",
                                                color: "rgb(102, 102, 102)",
                                                marginLeft: "0px",
                                            }}
                                        >
                                            <input
                                                className="check_item"
                                                name="chk_member_agree"
                                                type="checkbox"
                                                value="1"
                                            />
                                            <em
                                                style={{
                                                    display: "inline-block",
                                                    verticalAlign: "middle",
                                                    fontStyle: "normal",
                                                    paddingLeft: "4px",
                                                    wordBreak: "break-all",
                                                }}
                                            >
                                                이용 약관{" "}
                                                <span
                                                    className="require txt_point"
                                                    style={{
                                                        color: "rgb(241, 80, 78)",
                                                    }}
                                                >
                          (필수)
                        </span>
                                            </em>
                                        </label>
                                        <button
                                            className="btn_terms btn-show-layer"
                                            type="button"
                                            style={{
                                                margin: "0px",
                                                padding: "0px",
                                                verticalAlign: "middle",
                                                outlineWidth: "0px",
                                                border: "0px none",
                                                backgroundColor: "transparent",
                                                cursor: "pointer",
                                                appearance: "none",
                                                lineHeight: 1.5,
                                                fontWeight: 400,
                                                fontFamily:
                                                    'Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif',
                                                borderBottom: "1px solid rgb(158, 158, 158)",
                                                cssFloat: "right",
                                                paddingBottom: "2px",
                                                fontSize: "14px",
                                                color: "rgb(158, 158, 158)",
                                            }}
                                        >
                                            보기
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            <ul
                                className="form_section marketing_section"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                    borderTop: "1px dashed rgb(197, 197, 197)",
                                    marginTop: "15px",
                                    paddingTop: "15px",
                                }}
                            >
                                <li
                                    className="form_items"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        fontSize: "0px",
                                        position: "relative",
                                        marginTop: "0px",
                                    }}
                                />
                            </ul>
                        </li>
                        <li
                            className="form_type_submit"
                            style={{
                                margin: "0px",
                                padding: "0px",
                                marginTop: "11px",
                                textAlign: "center",
                            }}
                        >
                            <ul
                                className="form_section"
                                style={{
                                    margin: "0px",
                                    padding: "0px",
                                }}
                            >
                                <li
                                    className="form_items"
                                    style={{
                                        margin: "0px",
                                        padding: "0px",
                                        fontSize: "0px",
                                        position: "relative",
                                        marginTop: "0px",
                                    }}
                                >
                                    <button
                                        className="btn_resp size_d color2 form_send"
                                        type="submit"
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 60px",
                                            border: "1px solid rgb(51, 51, 51)",
                                            padding: "0px 10px",
                                            transition: "border-color 0.2s, background-color 0.2s",
                                            outline: "none",
                                            borderRadius: "3px",
                                            appearance: "none",
                                            fontWeight: 400,
                                            fontFamily:
                                                'Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif',
                                            textAlign: "center",
                                            cursor: "pointer",
                                            verticalAlign: "middle",
                                            minWidth: "60px",
                                            backgroundColor: "rgb(51, 51, 51)",
                                            color: "rgb(255, 255, 255)",
                                            height: "45px",
                                            width: "100%",
                                            lineHeight: "43px",
                                            fontSize: "16px",
                                        }}
                                    >
                                        가입하기
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </form>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

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

ul, li {
        list-style: none;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  vertical-align: middle;
  outline-width: 0px;
  font-size: 15px;
  font-weight: 400;
  font-family: Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif;
  appearance: none;
  padding: 0px 9px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.2);
  color: rgb(51, 51, 51);
  width: 100%;
  border-radius: 2px;
  height: 54px;
  line-height: 52px;
  margin-top: 4px;
}

input[type="checkbox"] {
  appearance: auto; /* 기본 체크박스 모양 유지 */
  width: 15px;
  height: 15px;
  margin: 0px;
  vertical-align: middle;
  padding: 0px;
  outline-width: 0px;
  line-height: 1.5;
  font-weight: 400;
  color: rgb(102, 102, 102);
  font-family: Montserrat, "Noto Sans KR", "Malgun Gothic", sans-serif;
  overflow: hidden;
}


`,
                }}
            />
        </>
    );
}