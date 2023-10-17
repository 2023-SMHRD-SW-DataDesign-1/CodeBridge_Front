import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import style from "../SCSS/pages/_testList.module.scss";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';

const TestList = () => {
  // 모달 관련
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 모달 관련

  const TestItem = () => {
    return (
      <div className={style.test_item_wrapper}>
        <div>
          <span>1주차</span>
          <span>Java</span>
        </div>
        <div className={style.test_item_btn}>문제 출제</div>
      </div>
    );
  };

  const TestListItem = () => {
    return (
      <div className={style.test_list_item_wrapper}>
        <div>
          <p>Position 기능 사용하기</p>
        </div>
        <div onClick={handleShow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className={style.main_container}>
      <h2>테스트</h2>

      <div className={style.title_wrapper}>
        <div>
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABX1BMVEXbuOP////t0IQAAAD32Mz8+LP1vLLgvOjeuubivur//7jz1Yf21cjlwO3//7va29zUstzNrdW0mLuSfJn4+PihiKiYgZ/g4eL/xLnAosgAAAvJycrszXvs7OywlbdDRkYbHSH77Ob54djpzpTOzs93Zn3lyYChoqJHPE2sra6Cboirl2LXvXnAwcGZmpuMjY5WWVl/gIGHeE3Cq24yKzhsbm5eUGT79ORpWm8AABYaFyGtg33LyJJyb1Tk4aMyMzZJTUxYWVsCEA4oJy5APCduYz8/NUUdHi1SRlh7bknGr3ARGhgnKBv225X79uj15sD44aejkFxNRzA9OS5iWT8uLChpXkIoJjYoLDUSEhu5pp+NfXaZdW94XFgxIiNiS0jfq6NKRUBSOznBqqF4bGYAICijkIjImZEdExeWlG2NiWZXV0R6eFvY1Zukj2nBqntsYVyrqHzYv4omKBQWGAUlzVMTAAAOD0lEQVR4nO2d/V8a1xKHgQF3D+vytiACAdGCsGt4DRA0KoLRkJjcJr4k19s2aZq2qdE01978/597dnlb9hV0Ww9kn/5Qo2sCX2bmzMyZs+tw2NjY2NjY2NjY2NjY2NjY2NjY2NjYOBz0Xb8A8qCWOuiuXwNpoAbYlqLAthOsgdIqqDt5GSRBCUHbVRSgfQiYXUN9Y85ExyBi4i1I2P/GRKECZr4TgOY3pok59NJdvwICsVciGxsbmylQ5fNDaAqJ6F8wg9ASZldxIc2EA+erIS7baDSyXIhGsy+L+AGzjkAwhgkGaNbws05DVi0KRUfyAI8PqtXqwWOARoidZVVoxAZCXPMQRsTzzaUYzeroQkdCyh/QiItD9Rkz4MEB5GOzmr5ig09ltwDKJT7hT4admHDSX8hVVgAOhRjS9AGVVij2pLOBpXANYJj1AxBY018kD+z1kS50KoWkUwN/bg/i2RhrnoeyS/BUJkhflmfQVfxqgFMZGGHQbKwJR8Wolh59woUy1CKUiSqsABvMvXsupSjrz/Njv4kOQSA60afZUB7qfgNB+rIUAThDVdASPHvx8F/fq0Rxub42xtwnECNaEjZ2CKWwqSISfAci+qsIHYMHL8XL1KIw6xAZC7Qkew4KNCZWRFIFarqrCHry9EXvKrWhMBvmbTgyoHFMLGuGVX0qIGinYdQS3Huop4mLeayRyhAIFchDYTpFMJlOLaAVDdDmK6Z3xUMtTZ7NhKGgEJSncJsRddDI6ekUMC97P3+plgSL8nyJ6LgqwXJQvIkimCIOtcq/DjUP+ppomQnWpJon3nnY7A38ZkABOKUo7BOcmuhLIjoPyYuNCNsE85REnwQsKT91uI/f+fcPX2pL4nKtQ4xsUbAkRmnrJKKkxhOOGKy7XPfUSezIUCBFtCbYcW4niZipjH3sWBPG9eKhVg47DLJmm2J3Ck7Cb+M4PSpx+V8panIPr2IvZlQTKnaL8DqiJa9h6CCsiyFWVxLSfQcqFkjiTEJK9sHT8Ix58b1majIDMZbttqyQxOnMxWWasIevGJd+NHExD+Lkug4VgSlLHF2OuNHaQwmP5d01+f96Xx+QvIMOOYskwanb6G/FAeX+UIBqlZFM4+noW+tAbmsNZc+sksTpTHMjf0DN475ZMMcn6QMGSwKnMDKTQ1U5QAr448xYpwkfl/lDADb6oqzjRH7dxZw8ZQZ2gvUhN8Ki5p51kjidcofAger+IIAwm1gfvBIN/ngfOGKjCTaT22drMurywImz44EozGkV24prJEmTWM/B0WTFSklw2SP/+LEoD/orTvWU2Thjho6TJVcSvOhYkcHKGA8TLAdVaQFmNtJM9bWkCeN6qu4sEAR2eWslce5x4zs3sSdHUqR9FmdeSwuy6xW8IXpzlM2XLNak1Bh/vzTFScvPOjDHOLHFTrS5RPZoQeDWLQIlhS1Vw60h2Qesn4jaMKfqzWKioJaOLJbE6QfVPyKIuRsD6+kHDPHVMPb2rtWu4wyDcs4ehUDUIn5/U9TkPhC954c/Qitz2D7K/JSOAV6QGVETcQqlCnlyy2GH9HItl8SpLO1Qvl6C19WNzVeb1VfVx8B3SG6vOSjO2oRNoqOIF+xWLspX2q3W/v6/V9qlRLRM9FgFaljSXxvnSGEG6Lzoz0QH4C9XBKKzkzf8364J9k9/oZjj+QKGzxWL0dIhyZrQ1tZ/PVoKTUKAjSNR4CUKGb+fjxOcoOCa+EZb5sYoknuxP+Mfg2g7wR+hdVIM1a0rwgWL4wk2kEQGg82F8HhCRSzq1+MqB6DVT3WUBQ+Cgj8hBhIMDisZf53k3jTFlac1Bl6nswDpdLpfOvG18XCB7SQqd53oHsl2goT6dJLkAEA7o+HhPB3v1Ql+xQgFFRHHjoe+U9pTJf8kgZrTpSe8ZA3aPyu0ABK9L1WJbCx7GB/NpgtBolO25nQV4Mo5lkS3LRceRNmycniPRmwMHEFMgCb9uApqTKcJPwqkusKsud3/AZUh4BUOTXDUhQCm1US24OqwuujGqA9bi5rcyVucmuk1GeHnS/V2K43jxPl+uZ7LyCRx/6Da4cMJ/qxoMlGMXV1zLy4uutdWR9/iywD77Xqp2KtiHv3401txZDLck8S9qFpZsCZ38xanBmXN1+Kwu/9G3Ytr/W/l4N2jnxdkoi0sLy///G7Puda/cu29shuAE/zg3bzHaZkgZ1sdKCIhhZPKLwvLC5hBbFlbkFh+Vxhe9/sTVZVH8O7wGFTEbKJgXBL3Iv6W/+3yQh/8w8WFIR9/HV2nch6W9M70APMacFwSjNNZfLSgzaMfhletnSlXHrY2A4PkEgGTAaU1pSSLq1iTZU1Jlt99GF33qzJtQ43ZOIUhlqwJI0nCKjPBhpL5RVuTn3+TXfW7cpSeEsgfru+BuoaHDlbVkmBDaX3UEGV5Afwyq/pwrgiydEqd3JIJJRjO46glcbtXnUlQi7L8EXi5p30A5cITkC08uOhh8X9kFj4m+zsaruPGSUryt58W5KqIyYnohLJF6oMqbWX3By1JRKey+a2t/a4QQiTaDmUUULTCiVtK3Ipi1rbcY+Hjj2+hEh7XUG0nSMhLh9cphwAAJzs7p2cAaRInDFDTIJPV1wRn922AP97+8vYP/AbbfD99GznPB1VrHptkKhJj2RTA6bbH5/V6fZ7rY6iR10wxzlAMNMEkM2Kt409q/cLvqtY8zu6/AjQEuNz1eT09vL7tNJB3sBjFDXa9tGOsAcOI8quqDY1qFz7PRRyufZ/iniFez0nc9JZl/zQUZ5Deq1I2vBYbd1AGorznlEVgDDwe3wVs+7w75x7JUrw9c3neJW8HzGDGTzNnM6Yviqriw/mJx7sN216Pd/fi8vIKh5QrkDT5TF4lhAQDQ1lVimJiJs5+b0G9FGNNdj2A3cez/cefX778eRb/fIG/g/Ht5Mm7RwwYRJQ1RV28aiaJU+pB/VcVTnCI3b44w5J4099JfIHdnu94dyEWC5CV+FMRo03jMUuZSBLRVjROXKCtK/jsHWny3ZfL/vJzvYnX8y5ZZ9LZvFFnKTwwlcXFNYPLxuC3NG6qJMCxTzSL65O/eqKkxT96tuPw/uJ6e6dGlKXQASPvwapgZ3CvyduxZnS0eiUBuJYMw3cNp39++evL8YW0+Fxf7EoJ3P/IOsxDpawdQ8lpnmmjeyFVDCCfTgDeX/fDSe9/vmPChtxYwbLDb07lSckBdOyrb5ipYcsYJrM9donr17LNjnXDOSsNrSSMipyOqzCG95iseCLCNjpWWcr4yesh1NKVviY4fyMrnEjc+nYFA0o6kxTU0o6uJr5P6htAkACOKVYc5Cnp1bl05NKnI4n3E5BXCEqwEZhyQkeDOuidzMFFoJ6deHd2L8gLJxIoWOsYtvFNiZ5t6beIEHzWjbAeL4nxRIRG3NQ33ZJThIbBiAnKXuk5j2gqxM6bo2AD6jeMtYVOPGXUCcFV4K6+JlfkbonRbKwL7RucX+GPQKCNP2okPNdfeR4rm1AkQbPBqW/8kahAnHOYftAof6kjineb6FnIG5wkBdiabKeGPjzZ1VLFuwskj8yKtdokZzXCmcSwbgwXJn3uBdXAxbFKFd82NIiWBHETnJoM16VZ1+E0XHLSY+U4Cfp67ZHXf17f7qXWTaxJYiIzSa+Ii1MiPcx8o5M2mikHB/D6elcsjUV2ry9h33C9unsorqMlQmVsha6IRxfGC+nSxIkoQvkatrHLq0+fri6PAA4jRO4ay0BbmvfM8behlRvKAv5kSeY5Pe+ZeOFAzSYbasJh7Umtm40EJ7ip9d1Ch/Qa1sncCsBepcjzfAXOoZ3wjxfSypORBv9GDGJso8mK4xaEzluMgRpGe+qZXKW9t9KuFwthsTk/VgYMJ9jMG/BI2GdbszLeJjaSJ85hE7BSkl3cL+JoFkwfXIaNcTSNQjxT5WvRXH20RiV6c9KoKaQ502SFdlACWfs5Bkx7+4Jiu/9FuNNPRFEXJnou4KxYCWbK2xfU+xIWoNuThE6lsySf9pueac+RJmG/XilVyjC6h1YwwDZnxi0mgRKmOzNZbBWKpU6XC409DGGuzAQX81PdozsneVqZI29UwkJMxqrlhIu4DJSCT5vYrqElBCfeIuVxctIvAMszk2nchElDbDgXlxXPqiMYcwUVmaR1UqhDWt5OIHUXwhooznD6PhxN5OppgMrYYEYUZuKI7E2hdI7qR4cPOFup8MqdDh4EwobRLEX3yKQ/k8hk+o85U7JXL0N2Bir+GzLJMVIVeKnyt96QuQVuAXq+Y059665f+9/F9LdDGbKnOZs0BxgfrU3yBuNdWhOxc4Hxqa8MGD2xqNKd18XHeH4rYzC0o74b6JzA1oxv/h82GO8ibpbTIijO5D5c/Lnuj460hmLnAdO2vaZz4Qoo44cm4beFvSmmN3ZvqZ0negZi26CwMq85SsDkcSLttkqUymCC52h2trGmwuw4Al+Hc72+09w2l1jBbJ663U4W+GKRV0ozt2mb9DQH4zgbBYgfdrtvQLE9tpef0/TeYf6EzSQEWIQQGzpPy9ys0Knd9Qv/O0EhaBkElUL/TChFZfuztMlCBQh+cowlUI4stHWjyspw+AzFunBULwNAI0LPtySO3jz1nnYeX5Q9dZhmAxGBSwVZ0qevLIFmg1mAijra5hRnUSiKmuse9Rg0olINlSyaD2/+lqCQQ5Rl9MR4vLiQd7uSfxwK0ZFDqBei4WSmeIQXl2/GTwyh2FjzXNzcyS/N2RjFbaAR6wgE0DexuNjY2NjY2NjY2NjY2NjY2NjY2NjYqPk/GfCIV6CKnREAAAAASUVORK5CYII="
            roundedCircle
          />
        </div>
        <div>
          <p>선동욱</p>
          <p>님 환영합니다</p>
        </div>
        <div>
          <h2>데이터디자인 엔지니어 양성과정</h2>
        </div>
      </div>

      <div className={style.test_list_wrapper}>
        <hr />
        <p>1주차 Java</p>

        <div>
          <h4>Level 하</h4>
          <TestListItem />
          <TestListItem />
          <TestListItem />
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>문제 출제</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>문제 제목</h5>
            <p>주사위</p>
            <h5>문제 내용</h5>
            <p>
              주사위는 위와 같이 생겼다. 주사위의 여섯 면에는 수가 쓰여 있다.
              위의 전개도를 수가 밖으로 나오게 접는다. A, B, C, D, E, F에 쓰여
              있는 수가 주어진다. 지민이는 현재 동일한 주사위를 N3개 가지고
              있다. 이 주사위를 적절히 회전시키고 쌓아서, N×N×N크기의 정육면체를
              만들려고 한다. 이 정육면체는 탁자위에 있으므로, 5개의 면만 보인다.
              N과 주사위에 쓰여 있는 수가 주어질 때, 보이는 5개의 면에 쓰여 있는
              수의 합의 최솟값을 출력하는 프로그램을 작성하시오.
            </p>
            <h5>제한 조건</h5>
            <p>
              첫째 줄에 N이 주어진다. 둘째 줄에 주사위에 쓰여 있는 수가
              주어진다. 위의 그림에서 A, B, C, D, E, F에 쓰여 있는 수가 차례대로
              주어진다. N은 1,000,000보다 작거나 같은 자연수이고, 쓰여 있는 수는
              50보다 작거나 같은 자연수이다.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default TestList;