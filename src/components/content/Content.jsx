import React from 'react';
import './content.css';
import ass from '../../assets/content-img/ass.jpg'
import genshine from '../../assets/content-img/genshine.jpg'
import valo from '../../assets/content-img/valo.jpg'
import pes from '../../assets/content-img/pes.jpg'
import cod from '../../assets/content-img/cod.jpg'
import farcry from '../../assets/content-img/farcry.jpg'
import pubg from '../../assets/content-img/pubg.png'
import sfs from '../../assets/content-img/sfs.jpg'

const Content = () => {
    return (
        <section id='content'>
            <h3>Most Popular Game</h3>
            <div className="container">
                <div className="card">
                    <img src={ass} />
                    <h4 className='name'>Assasin's Creed II</h4>
                    <button className='button'>Download Now</button>
                </div>

                <div className="card">
                    <img src={genshine} />
                    <h4 className='name'>Genshin Impact</h4>
                    <button className='button'>Download Now</button>
                </div>

                <div className="card">
                    <img src={valo} />
                    <h4 className='name'>Valorant</h4>
                    <button className='button'>Download Now</button>
                </div>

                <div className="card">
                    <img src={pes} />
                    <h4 className='name'>E-Football 2022</h4>
                    <button className='button'>Download Now</button>
                </div>

                <div className="card">
                    <img src={cod} />
                    <h4 className='name'>Call Of Duty</h4>
                    <button className='button'>Download Now</button>
                </div>

                <div className="card">
                    <img src={farcry} />
                    <h4 className='name'>Farcry 6</h4>
                    <button className='button'>Download Now</button>
                </div>
            </div>
        </section>


    )
}

export default Content;