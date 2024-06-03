import './Footer.sass';
import { useHapticFeedback } from "@vkruglikov/react-telegram-web-app";


export default function Footer({ onSlideChange, activeSlide }) {
    const [impactOccurred, notificationOccurred, selectionChanged] = useHapticFeedback();

    return (
        <footer>
            <ul>
                <li className={`list ${activeSlide === 0 ? 'active' : ''}`} onClick={() => {onSlideChange(0)
                    selectionChanged()
                }}>
                    <a>
                        {/* <img src={activeSlide === 0 ? GifMoon : ImageMoon} alt="" /> */}
                        <span className="text">Main</span>
                    </a>
                </li>
                <li className={`list ${activeSlide === 1 ? 'active' : ''}`} onClick={() => {onSlideChange(1)
                    selectionChanged()
                }}>
                    <a>
                        {/* <img src={activeSlide === 1 ? GifFriends : ImageFriends} alt="" /> */}
                        <span className="text">Friends</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
}
