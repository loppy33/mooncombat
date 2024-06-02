import React, { useState, useRef, useCallback } from 'react';
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

    const handleTouch = useCallback(async (event) => {
        const container = containerRef.current.getBoundingClientRect();
        const touches = event.touches;
        const newClicks = [];

        for (let i = 0; i < touches.length; i++) {
            const touch = touches[i];
            newClicks.push({
                id: Date.now() + i,
                x: touch.clientX - container.left,
                y: touch.clientY - container.top,
            });

            const imageCenterX = container.left + container.width / 2;
            setTilt(touch.clientX < imageCenterX ? 'left' : 'right');
        }

        setEnergy((prevEnergy) => prevEnergy - touches.length);
        setClicks((prevClicks) => [...prevClicks, ...newClicks]);

        // Фильтрация кликов
        const currentTime = Date.now();
        setClicks((prevClicks) => prevClicks.filter(click => currentTime - click.id < 1000));

        setTimeout(() => {
            setTilt('');
        }, 100); // Duration of the tilt effect
    }, []);

    return (
        <div className="Clicker">
            <div className="container" ref={containerRef}>
                <div className="lvl">
                    <h4><img src={ImageGold} alt="" />Gold &gt;</h4>
                    <span></span>
                </div>

                <Lottie 
                    animationData={Diamon}
                    loop={true}
                    autoplay={true}
                    onTouchStart={handleTouch}
                    className={`clickImg ${tilt}`}
                />

    
                <div className="energy">
                    <img src={GifFire} alt="" />
                    <h3>{energy} <br /><span>/ 1000</span></h3>
                </div>

                {clicks.map((click) => (
                    <div key={click.id} className="click-effect" style={{ top: click.y, left: click.x }}>
                        +1
                    </div>
                ))}
            </div>
        </div>
    );
}
