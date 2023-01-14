import "./style.scss";
import { Link } from "react-router-dom";
export default function Lesson() {
  return (
    <>
      <Link to="/detail">
        <div className="lesson-tit">
          <div className="lesson-img">
            <img src="/img/class.png" />
          </div>
          <div className="lesson-info">
            <p className="lesson-title">클래스 제목</p>
            <p className="lesson-category">수예 / 공예</p>
            <p className="lesson-money">60,000원</p>
          </div>
        </div>
      </Link>
    </>
  );
}
