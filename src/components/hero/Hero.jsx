import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import HERO1 from '../../assets/hero1.png'
import HERO2 from '../../assets/hero2.jpg'
import HERO3 from '../../assets/hero3.jpg'
import HERO from '../../assets/hero.jpg'
import './hero.css'

const Hero = () => {
    return (
        <section id='hero'>
            <div className="hero-image">
                <div className="des">
                    <h2>Download game gratis</h2>
                    <h3 className='hero-title'>Rasakan pengalaman bermain dengan game populer</h3>
                </div>
                <img src={HERO} alt="Hero" />
            </div>
            <h3 className='recom'>Recommended</h3>
            <div className="carousel">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className='gambar'>
                        <img src={HERO1} alt="Hero 1" />
                    </SwiperSlide>
                    <SwiperSlide className='gambar'>
                        <img src={HERO2} alt="Hero 2" />
                    </SwiperSlide>
                    <SwiperSlide className='gambar'>
                        <img src={HERO3} alt="Hero 3" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Hero;
