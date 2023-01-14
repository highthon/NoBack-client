import './style.scss';
import { AiFillStar } from "react-icons/ai";
export default function LookReview(){
    return(
        <>
            <div className="lookreview-tit">
                <div className="lookreview-tit-div">
                    <div className="lookreview-top">
                        <p className="lookreview-nickname">닉네임</p>
                        <p className="lookreview-star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                    </div>
                    <div className="lookreview-bottom">
                        <p className="lookreview-bottom-review">평소에 사용하던 지갑을 바꿀겸, 이번에는 직접 만들어보고 싶은 생각에 체험을 신청하게 되었네요. 기본적인 틀은 준비가 되어 있고 가죽 공예를 체험해볼 수 있는 본드로 붙이기 부터, 다이아 구멍을 내고, 바느질을 하고, 가죽 각들을 둥글게 만들기까지 시간 가는줄 모르고 했습니다.</p>
                    </div>
                </div>
            </div>
        </>
    )
}