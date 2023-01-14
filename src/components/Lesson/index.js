import "./style.scss";
import { Link } from "react-router-dom";
export default function Lesson(props) {
  return (
    <>
      <Link to="/detail">
        <div className="lesson-tit">
          <div className="lesson-img">
            <img src={props.link} />
          </div>
          <div className="lesson-info">
            <p className="lesson-title">{props.name}</p>
            <p className="lesson-category">{props.type}</p>
            <p className="lesson-money">{props.money}원</p>
          </div>
        </div>
      </Link>
    </>
  );
}
