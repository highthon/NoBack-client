import './style.scss';
import Header from "../../components/header";
export default function Main(){
    return(
        <>
            <div className='main-tit'>
            <Header/>
                <div className='main-tit-tle'>
                    <div className='main-tit-ment'>
                        <p className='ment-first'>당신의</p>
                        <p className='ment-second'>취향에 맞는</p>
                        <p className='ment-third'>취미를</p>
                        <p className='ment-four'>찾아보세요</p>
                    </div>
                </div>
            </div>
        </>
    )
}