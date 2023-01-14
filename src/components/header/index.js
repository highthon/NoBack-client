import "./style.scss";
export default function Header() {
  return (
    <>
      <div className="header-tit">
        <div className="header-tit-logo"></div>
        <div className="header-tit-buttons">
          <a className="header-viewclass">클래스 둘러보기</a>
          <a className="header-habittest">취미테스트</a>
        </div>
      </div>
    </>
  );
}
