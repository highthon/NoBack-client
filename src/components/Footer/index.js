import "./style.scss";
export default function Footer() {
  return (
    <>
      <div className="footer-tit">
        <div className="footer-tit-top">
          <div className="footer-top-top">
            <div className="footer-top-img">
              <img />
            </div>
            <div className="footer-top-info">
              <a>이용약관</a>
              <a>개인정보처리방침</a>
              <a>공지사항</a>
              <a>문의하기</a>
              <a>FAQ | QNA</a>
            </div>
          </div>
          <div className="footer-top-bottom">
            <p>Tel. 010 - 1726 - 4981</p>
            <p>Email. noback@gmail.com</p>
            <p>공동대표. 고윤영, 우수경, 김정미</p>
            <p>고객센터. 1843 - 5397</p>
          </div>
        </div>
        <hr />
        <div className="footer-tit-bottom">
            <a>Copyright noback ltd. Alright reserved.</a>
        </div>
      </div>
    </>
  );
}
