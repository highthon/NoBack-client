import { Link } from "react-router-dom";
import "./style.scss";
export default function HT3() {
  return (
    <>
      <div className="test-tit">
        <div className="test-tit-div">
          <div className="test-tit-div-div">
            <div className="test-tit-question">
              <p>예쁜 것 보다는 실용적인 것을 좋아하나요?</p>
            </div>
            <div className="test-tit-dap">
              <div>
                <Link to="/test4">
                  <button className="dap-button1">
                    실용적인 것 보다는 예쁘고 귀여운게 짝이다.
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/test4">
                  <button className="dap-button2">
                    예쁜 것도 좋지만 실용적인 것이 더 좋다.
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
