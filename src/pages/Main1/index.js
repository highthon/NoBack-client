import "./style.scss";
import Header from "../../components/header";
import { Link } from "react-router-dom";
export default function Main1() {
  return (
    <>
      <div className="main-tit">
        <div className="main-tit-tle">
          <div className="main-tit-ment">
            <p className="main-tit-ment-1">
              <img src="/img/main-img1.svg" />
              <a className="ment-first" id="a">
                당신의
              </a>
            </p>
            <p className="main-tit-ment-2">
              <a className="ment-second" id="a">
                취향에 맞는
              </a>
            </p>
            <p className="main-tit-ment-3">
              <img src="/img/main-img3.svg" className="img-3-1" />
              <a className="ment-third" id="a">
                취미를
              </a>
              <img src="/img/main-img2.svg" className="img-3-2" />
            </p>
            <a className="ment-four" id="a">
              찾아보세요
            </a>
            <Link to="/test">
              <div className="main-test-button">
                <img src="/img/main-button.svg" className="main-button-svg" />
                <a className="main-button-ment">
                  간단한 테스트를 통해
                  <br />
                  취향을 분석하여
                  <br />
                  취미를 추천해드려요.
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
