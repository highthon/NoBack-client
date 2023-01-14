import "./style.scss";
import { AiFillStar } from "react-icons/ai";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LookReview from "../../components/LookReview";
export default function Detail() {
  return (
    <>
      <div className="Detail-tit">
        <div className="Detail-tit-div">
          <div className="Detail-tit-top">
            <div className="Detail-tit-top-left">
              <img src="/img/class.png" />
            </div>
            <div className="Detail-tit-top-right">
              <div className="Detail-tit-right-top">
                <p className="detail-top-day">2023.01.11 - 2023.02.02</p>
                <p className="detail-top-title">가죽 반지갑 만들기</p>
                <p className="detail-top-address">
                  서울 특별시 강남구 테헤란로 133
                </p>
                <p className="detail-top-type">수예 / 공예</p>
              </div>
              <div className="Detail-tit-right-top2">
                <div className="Detail-tit-right-review">
                  <a className="detail-right-star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </a>
                  <a className="detail-right-reviewcount">23개의 리뷰</a>
                </div>
                <div className="Detail-tit-right-explain">
                  <p className="detail-right-explain">
                    내 손으로 직접 가죽 반지갑을 만들어 보세요.
                    <br />
                    나만의 특별한 지갑이 될 수도 있고 사랑하는 사람을
                    <br /> 위한 아주 특별한 선물이 될 수도 있어요.
                  </p>
                </div>
              </div>
              <div className="Detail-tit-right-top3">
                <div className="detail-right-difficulty">
                  <p className="detail-right-gray-top">난이도</p>
                  <p className="detail-right-gray-bottom">보통</p>
                </div>
                <div>
                  <p>|</p>
                </div>
                <div className="detail-right-time">
                  <p className="detail-right-gray-top">소요시간</p>
                  <p className="detail-right-gray-bottom">2시간</p>
                </div>
                <div>
                  <p>|</p>
                </div>
                <div className="deatil-right-check">
                  <p className="detail-right-gray-top">준비물</p>
                  <p className="detail-right-gray-bottom">없음</p>
                </div>
              </div>
              <div className="Detail-tit-right-button">
                <div className="right-button-front">
                  <p className="right-front-name">가격</p>
                  <p className="right-front-money">60,000원</p>
                </div>
                <div className="right-button-back">
                  <button
                    className="button-sinchung"
                    onClick={() => alert("신청되었습니다!")}
                  >
                    신청하기
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Detail-tit-bottom">
            <p className="detail-tit-sugang-hugi">수강후기</p>
            <p className="detail-tit-jaksung-hugi">
              후기 작성 <RiPencilLine />
            </p>
            <div className="Detail-tit-bottom2">
              <div className="Detail-bottom-left">
                <p className="detail-bottom-aver">평균평점</p>
                <p className="detail-starpoint">4.7</p>
                <p className="detail-star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
              <div className="Detail-bottom-bar">
                <p>|</p>
              </div>
              <div className="Detail-bottom-right">
                <img src="/img/graph.png" />
              </div>
            </div>
          </div>
          <div className="Detail-bottom-review">
            <div className="sunse">
              <p>
                최신순 <MdOutlineKeyboardArrowDown />
              </p>
            </div>
            <div className="lookreview">
              <LookReview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
