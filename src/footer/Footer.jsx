import './Footer.sass';
import GifMoon from '../assets/gifs/moon.webp';
import ImageMoon from '../assets/pngs/moon.png';
import ImageFriends from '../assets/pngs/firends.png';
import GifFriends from '../assets/gifs/firends.webp';

export default function Footer({ onSlideChange, activeSlide }) {
    return (
        <footer>
            <ul>
                <li className={`list ${activeSlide === 0 ? 'active' : ''}`} onClick={() => onSlideChange(0)}>
                    <a>
                        <img src={activeSlide === 0 ? GifMoon : ImageMoon} alt="" />
                        <span className="text">Main</span>
                    </a>
                </li>
                <li className={`list ${activeSlide === 1 ? 'active' : ''}`} onClick={() => onSlideChange(1)}>
                    <a>
                        <img src={activeSlide === 1 ? GifFriends : ImageFriends} alt="" />
                        <span className="text">Friends</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
}
