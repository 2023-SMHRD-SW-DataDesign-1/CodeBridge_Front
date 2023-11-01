import React from 'react'
import style from "../SCSS/pages/_classList.module.scss"

const ClassList = () => {
  return (
    <div className={style.wrap_container}>
      <div className={style.main_banner}>
        <div className={style.main_banner_bg}></div>
        <div className={style.banner_text}>
          <h1>모집 중인 교육과정</h1>
          <h5> IT트렌드를 반영한, 다년간 직접 연구한<br />
            기초부터 실무까지 탄탄하게 배울 수 있는 교육</h5>
        </div>
      </div>

      <div className={style.wrap_container_main}>
        <h4>전체</h4>

        {/* div박스 반복 */}
        <div className={style.wrap_container_main_box}>
          <div className={style.wrap_container_main_box_text}>
            <h1>SW캠프 데이터 디자인반</h1>
            <span>교육대상 | 비전공자, 취준생</span>
            <span>교육기간 | 2023. 04. 27 ~ 2023. 11. 27</span>
          </div>

          <div className={style.wrap_container_main_box_img}>
            <img src="https://smhrd.or.kr/wp-content/uploads/2023/05/aac_ban.png" alt="#" />
          </div>
        </div>
        {/* div박스 반복 */}
        <div className={style.wrap_container_main_box}>
          <div className={style.wrap_container_main_box_text}>
            <h1>SW캠프 데이터 디자인반</h1>
            <span>교육대상 | 비전공자, 취준생</span>
            <span>교육기간 | 2023. 04. 27 ~ 2023. 11. 27</span>
          </div>

          <div className={style.wrap_container_main_box_img}>
            <img src="https://smhrd.or.kr/wp-content/uploads/2023/05/aac_ban.png" alt="#" />
          </div>
        </div>
        <div className={style.wrap_container_main_box}>
          <div className={style.wrap_container_main_box_text}>
            <h1>SW캠프 데이터 디자인반</h1>
            <span>교육대상 | 비전공자, 취준생</span>
            <span>교육기간 | 2023. 04. 27 ~ 2023. 11. 27</span>
          </div>

          <div className={style.wrap_container_main_box_img}>
            <img src="https://smhrd.or.kr/wp-content/uploads/2023/05/aac_ban.png" alt="#" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassList