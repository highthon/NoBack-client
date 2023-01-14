import "./style.scss";
import ClassReview from "../../components/ClassReview/index";
import { Link } from "react-router-dom";
export default function HabitTest() {
  return (
    <>
      <div className="test-tit">
        <div className="test-tit-div">
          <div className="test-tit-div-div">
            <div className="test-tit-question">
              <p> 어떤것을 따르는 편인가요?</p>
            </div>
            <div className="test-tit-dap">
              <div>
                <Link to="/test2">
                  <button className="dap-button1">
                    감보다는 정확한 수치를 따르는 편이다.
                  </button>
                </Link>
              </div>
              <Link to="/test3">
                <div>
                  <button className="dap-button2">
                    수치보다는 나의 감을 따르는 편이다.
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
