import {AiFillStar} from 'react-icons/ai';
export default function ClassReview(){
    return(
        <>
            <div className='classreview-tit'>
                <div className='classreview-tit-tit'>
                    <div className='classreview-tit-top'>
                        <div className='classreview-type'>
                            <p>수예 / 공예</p>
                        </div>
                        <div className='classreview-info'>
                            <p className='classreview-info-nickname'>익명</p>
                            <p className='classreview-info-start'><AiFillStar/></p>
                        </div>
                    </div>
                    <div className='classreview-tit-bottom'>
                        <p className='classreview-review-gl'>
                        가죽공예는 처음 이었는데요, 바느질도 처음엔 어렵고 했지만 아무 생각없이 집중할 수 있어서 정말 좋았어요.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}