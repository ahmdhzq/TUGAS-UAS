import React from 'react';
import './content2.css';
import pubg from '../../assets/content-img/pubg.png'
import sfs from '../../assets/content-img/sfs.jpg'
import CYBER from '../../assets/content-img/cyber.jpg'
import spider from '../../assets/content-img/spider.jpg'
import war from '../../assets/content-img/war.jpg'
import civi from '../../assets/content-img/civi.jpg'

const Content2 = () => {
    return (
        <section id='content2'>
            <h3>New Arival</h3>
            <div className="container">
                <div className="card">
                    <img src={pubg} />
                    <h4 className='name'>PUBG</h4>
                    <button className='button'>Download Now</button>
                </div>

                <div className="card">
                    <img src={sfs} />
                    <h4 className='name'>Need For Speed</h4>
                    <button className='button'>Download Now</button>
                </div>

                <div className="card">
                    <img src={CYBER} />
                    <h4 className='name'>Cyberpunk 2077</h4>
                    <button className='button'>Download Now</button>
                </div>

                <div className="card">
                    <img src={spider} />
                    <h4 className='name'>Spiderman</h4>
                    <button className='button'>Download Now</button>
                </div>

                <div className="card">
                    <img src={war} />
                    <h4 className='name'> COD WARZONE</h4>
                    <button className='button'>Download Now</button>
                </div>

                <div className="card">
                    <img src={civi} />
                    <h4 className='name'> CIVILIZATION VI</h4>
                    <button className='button'>Download Now</button>
                </div>
            </div>
        </section>


    )
}

export default Content2;