import './Nav.css'
import Me from '/public/graphics/Me.JPG'

export default function Nav() {
    return(
        <div className='nav-div'>
            <div className="nav-cont">
                <img src={Me} alt="picture" />
                <h1 className='title'>Moad Mekki</h1>
            </div>
        </div>
    );
}