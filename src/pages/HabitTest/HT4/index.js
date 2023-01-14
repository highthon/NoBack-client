import { Link } from "react-router-dom";
import "./style.scss";
export default function HT4() {
  return (
    <>
      <div className="test-tit">
        <div className="test-tit-div">
          <div className="test-tit-div-div">
            <div className="test-tit-question">
              <p>교과서 모퉁이에 낙서하는 것을 즐겨했나요?</p>
            </div>
            <div className="test-tit-dap">
              <div>
                <Link to="/result">
                  <button className="dap-button1">
                    교과서에 낙서를 가끔 혹은 거의 하지 않았다.
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/result">
                  <button className="dap-button2">
                    자습시간이나 쉬는 쉬간에 자주 그리곤 했다.
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
