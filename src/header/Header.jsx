import './Header.css'
// import CV from '/public/CV.pdf'
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';

export default function Header() {

    const handleEmail= () => {

        window.location.href = "mailto:moadahmedabdesselammekki@gmail.com?subject="

    };

    const { isDark, toggleMode } = useContext(ThemeContext);
    

    return (
        
        <div className='parent'>
            <div className='name'><h1 style={{ color: isDark ? "rgb(198, 198, 198)" : "rgb(0,120,255)"}}><span style={{ color: isDark ? "white" : "rgb(0,90,180)"}}>Moad Ahmed</span> Mekki Abdesselam </h1></div>
            <div className='exp'><p style={{color: isDark ? "rgb(221, 218, 218)" : "rgb(50,50,70)"}}>Junior Datacom Engineer with HCIA‑Datacom certification and hands‑on experience using Huawei eNSP. Strong foundation in network configuration, routing, and enterprise network design. Focused on web development, interested in realizing full‑stack projects. </p></div>
            <div className='div-btn'>
                <div className='btns'>
                <button className='btn1' onClick={handleEmail} >Contact me</button>
                <a >
                <button className='btn2' >Resume</button>
                </a>
                </div>
            </div>
        </div>
    );
}