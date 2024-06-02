import React, { useState, useRef, useCallback, useEffect } from 'react';
import './Clicker.sass';
import ImageGold from '../../../assets/pngs/gold.png';
import GifFire from '../../../assets/gifs/fire.webp';
import GifCloud from '../../../assets/gifs/cloud.webp';
import Lottie from 'lottie-react';
import Diamon from './diamond.json';

export default function Clicker() {
    const [energy, setEnergy] = useState(1000);
    const [clicks, setClicks] = useState([]);
    const [tilt, setTilt] = useState('');
    const containerRef = useRef(null);

    const handleTouchStart = useCallback((event) => {
        const container = containerRef.current.getBoundingClientRect();
        const touches = event.touches;

        const imageCenterX = container.left + container.width / 2;
        const newTilt = touches[0].clientX < imageCenterX ? 'left' : 'right';
        setTilt(newTilt);
    }, []);

    const handleTouchEnd = useCallback((event) => {
        const touches = event.changedTouches;
        const container = containerRef.current.getBoundingClientRect();

        setTilt('');
        setEnergy((prevEnergy) => Math.max(prevEnergy - touches.length, 0));

        const newClicks = Array.from(touches).map((touch, index) => ({
            id: Date.now() + index,
            x: touch.clientX - container.left,
            y: touch.clientY - container.top,
        }));

        setClicks((prevClicks) => [...prevClicks, ...newClicks]);
        
        if ('vibrate' in navigator) {
            navigator.vibrate(50); // Vibrate for 50 milliseconds
        }

        setTimeout(() => {
            setClicks((prevClicks) => prevClicks.filter(click => !newClicks.some(newClick => newClick.id === click.id)));
        }, 1000);
    }, []);

    return (
        <div className="Clicker">
            <div className="container" ref={containerRef}>
                <div className="lvl">
                    <h4><img src={ImageGold} alt="" />Gold &gt;</h4>
                    <span></span>
                </div>

                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className={`clickContainer ${tilt}`}
                >
                    <Lottie
                        animationData={Diamon}
                        loop={true}
                        autoplay={true}
                        className="clickImg"
                    />
                </div>
                {clicks.map((click) => (
                    <div key={click.id} className="click-effect" style={{ top: click.y, left: click.x }}>
                        + 1
                    </div>
                ))}

                <div className="energy">
                    <img src={GifFire} alt="" />
                    <h3>{energy} <br /><span>/ 1000</span></h3>
                </div>
            </div>
        </div>
    );
}
