import './Education.css'
import ENSTTIC from '/public/graphics/ensttic.jpg'
import HCIA from '/public/graphics/HCIA.png'


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
                <div className='educ-cont'>
                <div className='educ'>
                    <div className='hcia-img'><img src={HCIA} alt="picture" /></div>
                    <div className='educ-desc'>
                        <div className='second-cont'>
                            <div className="l-cont"><p>Huawei Certified ICT Associate - Datacom</p></div>
                            <div className="r-cont"><p className='second-p '>2026 - 2029</p></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}