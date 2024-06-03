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

export default function Home({checkTg}) {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.on('slideChange', () => {
                setActiveSlide(swiperRef.current.swiper.activeIndex);
            });
        }

    }, []);

    const handleSlideChange = useCallback((index) => {
        setActiveSlide(index);
        swiperRef.current.swiper.slideTo(index);
    }, []);

    return (
        <div className="Home">
            <div className="container">
                <Header />
                <p>{checkTg}</p>
                <Swiper
                    ref={swiperRef}
                    className="mySwiper"
                    modules={[Pagination]}
                >
                    <SwiperSlide>
                        <Clicker />
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
