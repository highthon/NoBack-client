import "./style.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-t">
      <div className="header-tit">
        <div className="header-tit-logo"></div>
        <div className="header-tit-buttons">
          <Link to="/">
            <a className="header-home">홈</a>
          </Link>
          <Link to="/look">
            <a className="header-viewclass">클래스 둘러보기</a>
          </Link>
          <a className="header-habittest">취미테스트</a>
        </div>
      </div>
    </div>
  );
}
