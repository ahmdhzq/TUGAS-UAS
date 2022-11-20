import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                have a fun experience 
                </p>
                <p className='footer-subscription-text fs-6'>
                Langganan Software dan Games Gratis, Langsung dikirim ke Email kamu.  
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <button className='btn btn-light'>Subscribe</button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Half Games</h2>
                    </div>
                </div>
            </div>
            <small class='website-rights'>Copyright 2022 © HG. All rights reserved.</small>
        </div>

    );
}

export default Footer;
