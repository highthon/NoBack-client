import "./style.scss";
import ClassReview from "../../components/ClassReview/index";
export default function Main3() {
  return (
    <>
      <div className="main3-tit">
        <div className="main3-tit-div">
          <div className="main3-tit-review">
            <p className="main3-review-tit">솔직하고 생생한 후기</p>
            <p className="main3-review-explain">
              직접 클래스에 참여해 본 후
              <br />
              작성하는 솔직하고 생생한 후기
            </p>
          </div>
          
          <div>
            <ClassReview/>
          </div>
        </div>
      </div>
    </>
  );
}
