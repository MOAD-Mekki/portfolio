import './Header.css'
import CV from '/public/CV.pdf'

export default function Header() {

    const handleEmail= () => {

        window.location.href = "mailto:moadahmedabdesselammekki@gmail.com?subject="

    };



    return (
        <div className='parent'>
            <div className='span'><p>Web Portfolio</p></div>
            <div className='name'><h1><span style={{color:"white"}}>Moad Ahmed</span> Mekki Abdesselam </h1></div>
            <div className='exp'><p>Junior Datacom Engineer with HCIA-Datacom certification and 
                hands-on experience using Huawei eNSP. Strong foundation in 
                network configuration, routing, and enterprise network design. </p></div>
            <div className='div-btn'>
                <div className='btns'>
                <button className='btn1' onClick={handleEmail}>Contact me</button>
                 <a href={CV}>
                <button className='btn2' onClick={window.open(CV, '_blank')}>Resume</button></a>
                </div>
            </div>
        </div>
    );
}