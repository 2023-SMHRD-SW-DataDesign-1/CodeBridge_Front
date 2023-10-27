import React from "react";
import style from "../SCSS/pages/_dashadmin.module.scss";
import Profile from "../components/Profile";
import DashRightBoxTeacher from "../components/DashRightBoxTeacher";

const DashAdmin = () => {
  return (
    <div className={style.wrap_container}>
      <div className={style.right_container}>
        <Profile />
        <div className={style.right_container_wrap}>
          <div className={style.right_container_wrap_info}>
            <h4>강의실 정보</h4>
            <div className={style.right_container_wrap_info_table}>
              <table className={style.setTable}>
                <tbody>
                  <tr>
                    <td>교육 명</td>
                    <td>
                      <div className={style.setTable_userId}>
                        <div className={style.setTable_userId_originId}>
                          <p>데이터디자인 엔지니어 양성과정</p>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </div>
                        <div className={style.setTable_userId_editId}>
                          <form>
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" />
                              <span>Null</span>
                            </div>
                            <div>
                              <button
                                type="submit"
                                className={style.accept_button}
                              >
                                수정 완료
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>교육 대상</td>
                    <td>
                      <div className={style.setTable_userPw}>
                        <div className={style.setTable_userPw_originId}>
                          <p>취업을 준비하는 대학 졸업(예정)자</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </div>
                        <div className={style.setTable_userPw_editId}>
                          <form>
                            <div class="input-group mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="새 닉네임"
                              />
                              <span>null</span>
                            </div>

                            <div>
                              <button
                                type="submit"
                                className={style.accept_button}
                              >
                                수정 완료
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>교육 기간</td>
                    <td>
                      <div className={style.setTable_userPw}>
                        <div className={style.setTable_userPw_originId}>
                          <p>2023. 04. 27 ~ 2023. 11. 27</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </div>
                        <div className={style.setTable_userPw_editId}>
                          <form>
                            <div class="input-group mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="새 닉네임"
                              />
                              <span>null</span>
                            </div>

                            <div>
                              <button
                                type="submit"
                                className={style.accept_button}
                              >
                                수정 완료
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>교육 설명</td>
                    <td>
                      <div className={style.setTable_userNum}>
                        <div className={style.setTable_userNum_originId}>
                          <p>num</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </div>
                        <div className={style.setTable_userNum_editId}>
                          <form>
                            <div class="input-group mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="휴대폰 번호"
                              />
                              <span>null</span>
                            </div>
                            <div>
                              <button
                                type="submit"
                                className={style.accept_button}
                              >
                                수정 완료
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>강의실 삭제</td>
                    <td>
                      <button type="button">삭제</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={style.right_container_wrap_student}>
            <h4>학생 관리</h4>
          </div>

          <div className={style.right_container_wrap_accept}>
            <h4>강의실 신청 현황</h4>
          </div>
        </div>
      </div>
      <DashRightBoxTeacher />
    </div>
  );
};

export default DashAdmin;