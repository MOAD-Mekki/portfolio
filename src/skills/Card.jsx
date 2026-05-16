import './Card.css'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"

export default function Card({url}) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='card-cont' data-aos="zoom-in"  data-aos-duration="3000">
            <img src={url} alt="" />
            </div>)
}