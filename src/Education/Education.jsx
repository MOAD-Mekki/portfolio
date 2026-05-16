import './Education.css';
import ENSTTIC from '/public/graphics/ensttic.jpg';
import HCIA from '/public/graphics/HCIA.png';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';
import AOS from "aos";
import "aos/dist/aos.css"


export default function Education() {
    const { isDark, toggleTheme } = useContext(ThemeContext);
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div className='educ-div'>
            <div className='educ-title' style={{color: isDark ? "#ffff" : "rgb(0,90,180)"}}><h2>Education & Certeficates :</h2></div>
            <div className='educ-cont'>
                <div className='educ'  data-aos="fade-right">
                    <div className='educ-img'><img src={ENSTTIC} alt="picture" /></div>
                    <div className='educ-desc'>
                        <div className='first-cont' style={{color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)"}}>
                            <div className="l-cont"><p>Higher National School Of Telecomunications and  ICT</p></div>
                            <div className="r-cont"><p>2024 - Now</p></div>
                        </div>
                    </div>
                </div>
                <div className='educ-cont'>
                <div className='educ' data-aos="fade-left">
                    <div className='hcia-img'><img src={HCIA} alt="picture" /></div>
                    <div className='educ-desc'>
                        <div className='second-cont' style={{color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)"}}>
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