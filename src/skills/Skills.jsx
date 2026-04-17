import './Skills.css'
import Card from './Card';
import Cardhtml from './Cardhtml';
import CSS from '/public/graphics/css.svg';
import HTML from '/public/graphics/html-5-svgrepo-com.svg';
import JS from '/public/graphics/jsjs.svg';
import React from '/public/graphics/react.svg';
import Huawei from '/public/graphics/huawei.svg';
import Git from '/public/graphics/git.svg';
export default function Skills() {


    const skills = [
        {url : CSS},
        {url : HTML},
        {url : JS},
        {url : React},
        {url : Huawei},
        {url : Git},
    ]

    return (
        <div>
            <div className='skill-title'>
                <h2>Skills & Materials :</h2>
            </div>
            <div className='skill-cont'>
            {
                skills.map((skill, index)=>{
                    return(
                        <div key={index}>
                        <Card url={skill.url}/>
                    </div>
                    )
                    
                })
            }
            </div>
        </div>
    );
}