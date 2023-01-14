import "./style.scss";
import { Link } from "react-router-dom";
export default function HT2() {
  return (
    <>
      <div className="test-tit">
        <div className="test-tit-div">
          <div className="test-tit-div-div">
            <div className="test-tit-question">
              <p>어릴 적 모래나 흙을 가지고 놀기를 좋아했나요?</p>
            </div>
            <div className="test-tit-dap">
              <div>
                <Link to="/test3">
                  <button className="dap-button1">
                    손에 더러운게 묻는것은 불편하고 싫다.
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/test3">
                  <button className="dap-button2">
                    모래나 흙에 글씨도 쓰고 성도 만들며 가지고 놀기를 좋아했다.
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
