import './projects.css'

export default function Project() {
    return (
        <div className='proj-div'>
            <div className='proj-title'><h2>My Projects :</h2></div>
            <div className='proj-cont'>
                <div className='proj1-cont'>
                    <h3><a href='https://github.com/MOAD-Mekki/30-Days-Of-JavaScript'>30 Days Of JavaScript</a></h3>
                    
                    <p>This project represents a complete journey through the fundamentals of JavaScript, built through consistent daily practice and hands-on mini-projects.Each day introduces new concepts, progressively building toward more advanced topics.</p>
                </div>
                <div className='proj2-cont'>
                    <h3><a href="https://github.com/MOAD-Mekki/Huawei-eNSP-Networking-Labs">Huawei eNSP Networking Labs :</a></h3>
                    <p>This project showcases hands-on networking labs implemented using Huawei eNSP. It is designed to demonstrate practical skills in configuring, troubleshooting, and validating enterprise network environments.</p>
                </div>
                                <div className='proj3-cont'>
                    <h3><a href="https://github.com/MOAD-Mekki/portfolio.git">Personal Web Portfolio :</a></h3>
                    <p>This is my personal portfolio website built using React and CSS, where I showcase my projects, skills, and background as a developer & network engineer. The goal of this project is to present my work in a clean, modern, and responsive way.</p>
                </div>
            </div>
        </div>
    );
}

