import { useState, useRef, useEffect, useCallback } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Home.sass';
import Clicker from './components/clicker/Clicker';
import Friends from './components/friends/Friends';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
    const [balance, setBalance] = useState(0);
    const [energy, setEnergy] = useState(1000);

    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.on('slideChange', () => {
                setActiveSlide(swiperRef.current.swiper.activeIndex);
            });
        }

        const interval = setInterval(() => {
            if (energy !== 1000) {
                const randomIncrease = Math.floor(Math.random() * (9 - 3 + 1)) + 3;
                setEnergy(prevEnergy => Math.min(prevEnergy + randomIncrease, 1000));
            }
        }, 1000);

        return () => clearInterval(interval);

    }, [energy]);

    const handleSlideChange = useCallback((index) => {
        setActiveSlide(index);
        swiperRef.current.swiper.slideTo(index);
    }, []);

    return (
        <div className="Home">
            <div className="container">
                <Header balance={balance}/>
                <Swiper
                    ref={swiperRef}
                    className="mySwiper"
                    modules={[Pagination]}
                >
                    <SwiperSlide>
                        <Clicker setBalance={setBalance} setEnergy={setEnergy} energy={energy}/>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Friends />
                    </SwiperSlide>
                </Swiper>
                <Footer onSlideChange={handleSlideChange} activeSlide={activeSlide} />
            </div>
        </div>
    );
}
