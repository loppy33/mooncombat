import './Header.sass'
import ImageStar from '../assets/pngs/star.png'


export default function Header() {
    return (
        <header>
            <div className="left">
                <h2><img src={ImageStar} alt="" />994 482 834</h2>
            </div>

        </header>
    )
}