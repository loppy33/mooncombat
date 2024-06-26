import React, { useState, useRef, useCallback } from 'react';
import './Clicker.sass';
import ImageGold from '../../../assets/pngs/gold.png';
import ImageEnergy from '../../../assets/pngs/energy.png';
import Lottie from 'lottie-react';
import Diamon from './diamond.json';
import { useHapticFeedback } from "@vkruglikov/react-telegram-web-app";

export default function Clicker({ setBalance, setEnergy, energy }) {
    const [clicks, setClicks] = useState([]);
    const [tilt, setTilt] = useState('');
    const containerRef = useRef(null);
    const [impactOccurred, notificationOccurred, selectionChanged] = useHapticFeedback();

    const handleTouchStart = useCallback((event) => {
        const container = containerRef.current.getBoundingClientRect();
        const touches = event.touches;

        const imageCenterX = container.left + container.width / 2;
        const newTilt = touches[0].clientX < imageCenterX ? 'left' : 'right';
        setTilt(newTilt);
    }, []);

    const handleTouchEnd = useCallback((event) => {
        setTimeout(() => {
            impactOccurred("rigid")
            const touches = event.changedTouches;
            const container = containerRef.current.getBoundingClientRect();

            setTilt('');
            setBalance((prevBalance) => prevBalance + 14, 0)
            setEnergy((prevEnergy) => Math.max(prevEnergy - 1, 0));

            const newClicks = Array.from(touches).map((touch, index) => ({
                id: Date.now() + index,
                x: touch.clientX - container.left,
                y: touch.clientY - container.top,
            }));

            setClicks((prevClicks) => [...prevClicks, ...newClicks]);

            setTimeout(() => {
                setClicks((prevClicks) => prevClicks.filter(click => !newClicks.some(newClick => newClick.id === click.id)));
            }, 1000);
        }, 100); // Adding a 100ms delay before processing clicks
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
                <div className="energy">
                    <img src={ImageEnergy} alt="" />
                    <h3>{energy} <br /><span>/ 1000</span></h3>
                </div>

                {clicks.map((click) => (
                    <div key={click.id} className="click-effect" style={{ top: click.y, left: click.x }}>
                        + 14
                    </div>
                ))}

            </div>

        </div>
    );
}
