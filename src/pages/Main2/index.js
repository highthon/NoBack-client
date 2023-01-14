import "./style.scss";
import ClassReview from "../../components/ClassReview/index";
import {BsPlusCircle} from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Main2() {
  return (
    <>
      <div className="main2-tit">
        <div className="main2-tit-div">
            <div className="main2-tit-name">
                <p>여러 분야의</p>
                <p>취미 클래스들</p>
            </div>
            <div className="main2-tit-classview-button">
                <Link to="/look">
                <p>
                    <a className="plus"><BsPlusCircle/></a> <a className="ment">클래스 둘러보기</a>
                </p>
                </Link>
            </div>

        </div>
      </div>
    </>
  );
}
