import './Nav.css'
import Me from '/public/graphics/Me.JPG'

export default function Nav({darkMode, setDarkMode}) {
    function togglekMode() {
        setDarkMode(prev => !prev)
    }
    return(
        <div className="nav-div" >
            <div className="nav-cont">
                <img src={Me} alt="picture" />
                <h1 className='title'>Moad Mekki</h1>
            </div>
        </div>
    );
}