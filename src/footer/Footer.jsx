import './Footer.sass';
import { useHapticFeedback } from "@vkruglikov/react-telegram-web-app";

import ImageMain from '../assets/pngs/mine.png'
import ImageFriends from '../assets/pngs/firends.png'

export default function Footer({ onSlideChange, activeSlide }) {
    const [impactOccurred, notificationOccurred, selectionChanged] = useHapticFeedback();

    return (
        <footer>
            <ul>
                <li className={`list ${activeSlide === 0 ? 'active' : ''}`} onClick={() => {onSlideChange(0)
                    selectionChanged()
                }}>
                    <a>
                        <img src={activeSlide === 0 ? ImageMain : ImageMain} alt="" />
                        <span className="text">Main</span>
                    </a>
                </li>
                <li className={`list ${activeSlide === 1 ? 'active' : ''}`} onClick={() => {onSlideChange(1)
                    selectionChanged()
                }}>
                    <a>
                        <img src={activeSlide === 1 ? ImageFriends : ImageFriends} alt="" />
                        <span className="text">Friends</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
}
