import "./style.scss";
import { Link } from "react-router-dom";
export default function TestResult() {
  return (
    <>
      <div className="result-tit">
        <div className="result-tit-div">
          <div className="result-div">
            <p className="result-ment">당신에게 추천드리는 취미들은,,,</p>
            <div className="result-img">
              <img src="/img/hubo.png" />
            </div>
            <div className="result-buttons">
              <Link to="/test">
                <button className="result-test">테스트 다시하기</button>
              </Link>
              <Link to="/">
                <a><button className="result-home">홈으로 돌아가기</button></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
