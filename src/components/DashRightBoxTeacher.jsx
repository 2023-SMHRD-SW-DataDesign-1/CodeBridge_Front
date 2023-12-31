import React, { useEffect, useState } from "react";
import style from "../SCSS/pages/_dashRightBoxTeacher.module.scss";
import axios from 'axios'
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DashRightBoxTeacher = () => {

  // 스프링 주소
  const baseUrl = process.env.REACT_APP_BASE_URL;

  // redux 값 뺴오기
  const combinedInfo = useSelector(state => state.combinedInfo);

  const [teacherInfo, setTeacherInfo] = useState([]);
  const [classInfo, setClassInfo] = useState([]);

  useEffect(() => {
    setTeacherInfo(combinedInfo.teacherInfo)
    setClassInfo(combinedInfo.classInfo)
  }, [combinedInfo]);


  useEffect(() => {
    getStuList();
  }, [classInfo])

  const [stuList, setStuList] = useState([]);

  // 반 학생 리스트 긁어오기
  const getStuList = async () => {
    try {
      const res = await axios.get(`${baseUrl}/CodeBridge/class/getClassStu?class_num=${classInfo.class_num}`);
      setStuList(res.data)
    } catch (error) {
    }
  }

  // 학생 모든 정보 불러오기

  const [selectStu, setSelectStu] = useState("");

  const StudentList = ({ props }) => {

    const clickName = () => {
      setSelectStu(props)
      getStudentScore(props)
      handleShow();
    }

    return (
      <li onClick={clickName}>
        {props.user_name}
        <p>{props.user_id}</p>
      </li>
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  }

  // 과목별 학생 성적 가져오기

  const [scoreList, setScoreList] = useState([]);
  const getStudentScore = async (props) => {
    let obj = {
      class_num: classInfo.class_num,
      user_id: props.user_id
    }
    try {
      const res = await axios.post(`${baseUrl}/CodeBridge/mark/markresult`, obj);
      setScoreList(res.data)
    } catch (error) {
    }
  }

  const ScoreItem = ({ props }) => {
    return (
      // <div>
      //   <p>과목명 : {props.sub_title}</p>
      //   <p>점수 : {props.mark_score}</p>
      // </div>
      <tr>
        <td>{props.sub_title}</td>
        <td>{props.mark_score}</td>
        <td>{props.objection}</td>
        
      </tr>
    );
  }



  return (
    <div className={style.right_wrap_container}>
      <div className={style.content_box1}>
        <span>강의실 정보</span>
        <h4>데이터디자인 엔지니어 양성과정</h4>
        <p>교육기간 | 2023. 04. 27 ~ 11. 27</p>
      </div>

      <div className={style.content_box2}>
        <span>
          학생 정보{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#06aed5"
            class="bi bi-question-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
          <p>학생 이름 클릭 시 학생의 상세정보를 확인할 수 있습니다.</p>
        </span>

        <ul className={style.content_box2_list}>
          {stuList.map((item, index) =>
            <StudentList key={index} props={item} />
          )}
        </ul>

        <Modal show={show} onHide={handleClose}>
          <style>{`.modal-dialog {top : 15%} `}</style>
          <Modal.Header closeButton>
            <Modal.Title>학생정보</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className={style.modal_title}>학생</h4>
            <div className={style.info_modal}>
              <span>{selectStu.user_name}</span>
              <p>{selectStu.user_id}</p>
            </div>
            <h4 className={style.modal_title}>성적확인</h4>
            <table className={style.info_modal_table}>
              <thead>
                <tr>
                  <td>과목명</td>
                  <td>점수</td>
                  <td>이의신청</td>
                </tr>
              </thead>
              <tbody>
                {scoreList.map((item, index) =>
                  <ScoreItem key={index} props={item} />
                )}
              </tbody>
            </table>


          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default DashRightBoxTeacher;
