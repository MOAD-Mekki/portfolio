import './projects.css'

export default function Project() {
    return (
        <div className='proj-div'>
            <div className='proj-title'><h2>My Projects :</h2></div>
            <div className='proj-cont'>
                <div className='proj1-cont'>
                    <h3><a href='https://github.com/MOAD-Mekki/30-Days-Of-JavaScript'>30 Days Of JavaScript</a></h3>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet sapiente necessitatibus? Veritatis, sequi!</p>
                </div>
                <div className='proj2-cont'>
                    <h3><a href="https://github.com/MOAD-Mekki/Huawei-eNSP-Networking-Labs">Huawei eNSP Networking Labs :</a></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolores?</p>
                </div>
                                <div className='proj3-cont'>
                    <h3>Personal Web Portfolio :</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolores?</p>
                </div>
            </div>
        </div>
    );
}