import React, { useState, useRef } from 'react';
import './Clicker.sass';
import ImageGold from '../../../assets/pngs/gold.png';
import GifFire from '../../../assets/gifs/fire.webp';
import GifCloud from '../../../assets/gifs/cloud.webp';

export default function Clicker() {
    const [energy, setEnergy] = useState(1000);
    const [clicks, setClicks] = useState([]);
    const [tilt, setTilt] = useState('');
    const containerRef = useRef(null);

    function handleTouch(event) {
        const container = containerRef.current.getBoundingClientRect();
        const newClicks = [];
        const touches = event.touches;

        for (let i = 0; i < touches.length; i++) {
            const touch = touches[i];
            newClicks.push({
                id: Date.now() + i,
                x: touch.clientX - container.left,
                y: touch.clientY - container.top,
            });

            const imageCenterX = container.left + container.width / 2;
            if (touch.clientX < imageCenterX) {
                setTilt('left');
            } else {
                setTilt('right');
            }
        }

        setEnergy((energy) => energy - touches.length);
        setClicks((clicks) => [...clicks, ...newClicks]);

        setTimeout(() => {
            setClicks((clicks) => clicks.filter(click => !newClicks.some(newClick => newClick.id === click.id)));
        }, 1000);

        setTimeout(() => {
            setTilt('');
        }, 100); // Duration of the tilt effect
    }

    return (
        <div className="Clicker">
            <div className="container" ref={containerRef}>
                <div className="lvl">
                    <h4><img src={ImageGold} alt="" />Gold &gt;</h4>
                    <span></span>
                </div>

                <img
                    onTouchStart={handleTouch}
                    className={`clickImg ${tilt}`}
                    src="https://em-content.zobj.net/source/telegram/386/clown-face_1f921.webp"
                    alt=""
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

{/* Какаха */ }
{/* <img onClick={click} className='clickImg' src="https://em-content.zobj.net/source/telegram/386/pile-of-poo_1f4a9.webp" alt="" /> */ }
{/* Клоун */ }
{/* <img onClick={click} className='clickImg' src="https://em-content.zobj.net/source/telegram/386/clown-face_1f921.webp" alt="" /> */ }
{/* Облочко */ }
{/* <img onClick={click} className='clickImg' src="https://em-content.zobj.net/source/telegram/386/cloud_2601-fe0f.webp" alt="" /> */ }
{/* Луна */ }
{/* <img onClick={click} className='clickImg' src="https://em-content.zobj.net/source/telegram/386/new-moon_1f311.webp" alt="" /> */ }