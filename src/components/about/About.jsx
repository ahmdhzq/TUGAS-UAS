import React from 'react';
import './about.css'
import FANDI from '../../assets/fandi.jpg'
import MUADZ from '../../assets/muadz.jpg'
import HAZIQ from '../../assets/haziq.jpg'
import LUT from '../../assets/lut.jpg'
const data = [
    {
        id: 1,
        image: FANDI,
        nama: 'Muhammad Rifandy S',
        kerja: 'Software Developer',
        hire: 'https://www.instagram.com/denki141/'
    },
    {
        id: 2,
        image: HAZIQ,
        nama: 'Ahmad Haziq M W',
        kerja: 'IOS Developer',
        hire: 'https://www.instagram.com/ahmd_haziqqq/'
    },
    {
        id: 3,
        image: MUADZ,
        nama: 'Abdullah Qa\'id Mu\'aadz',
        kerja: 'UI/UX Designer',
        hire: 'https://www.instagram.com/abdullahqaidmuaadz/'
    },
    {
        id: 4,
        image: LUT,
        nama: 'Lutfi Alfian',
        kerja: 'Full Stack Developer',
        hire: 'https://www.instagram.com/lluth_16/?hl=id'
    }
]

const About = () => {
    return (
        <section id='about'>
            <div className="container">
                <h3>About<span><br /> Kelompok 3</span></h3>
                <div className="content">
                    {
                        data.map(({ id, image, nama, kerja, hire }) => {
                            return (
                                <div key={id} className="content-items">
                                    <div className="content-image">
                                        <img src={image} alt="" />
                                        <h4>{nama}<br /><span>{kerja}</span></h4>
                                        <a href={hire} target="_blank">Hire Me</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default About;
