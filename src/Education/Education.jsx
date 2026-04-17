import './Education.css'
import ENSTTIC from '/public/graphics/ensttic.jpg'

export default function Education() {
    return (
        <div className='educ-div'>
            <div className='educ-title'><h2>Education & Certeficates :</h2></div>
            <div className='educ-cont'>
                <div className='educ'>
                    <div className='educ-img'><img src={ENSTTIC} alt="picture" /></div>
                    <div className='educ-desc'>
                        <div className='first-cont'>
                            <div className="l-cont"><p>Higher National School Of Telecomunications and  ICT</p></div>
                            <div className="r-cont"><p>2024 - Now</p></div>
                        </div>
                    </div>
                </div>
                <div className='certif'>
                    <div className='certif-img'><img src="" alt="" /></div>
                    <div className='certif-desc'></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}