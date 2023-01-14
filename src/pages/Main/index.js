import "./style.scss";
import Header from "../../components/header";
export default function Main() {
  return (
    <>
      <div className="main-tit">
        <Header />
        <div className="main-tit-tle">
          <div className="main-tit-ment">
            <p className="main-tit-ment-1">
              <img src="/img/main-img1.svg" />
              <a className="ment-first">당신의</a>
            </p>
            <p className="main-tit-ment-2">
              <a className="ment-second">취향에 맞는</a>
            </p>
            <p className="main-tit-ment-3">
              <img src="/img/main-img3.svg" className="img-3-1" />
              <a className="ment-third">취미를</a>
              <img src="/img/main-img2.svg" className="img-3-2" />
            </p>
            <a className="ment-four">찾아보세요</a>
          </div>
        </div>
      </div>
    </>
  );
}
