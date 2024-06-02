import './Friends.sass'

import ImageFriendsSecond from '../../../assets/gifs/friends2.webp'
import ImageAvatar from '../../../assets/pngs/avatar.jpg'

export default function Friends() {
    return (
        <div className='Friends'>
            <h2><img src={ImageFriendsSecond} alt="" /> Invite friends</h2>
            <p>For each friend you invite you will receive bonuses.</p>
            <div className="frinedsContainer">
                <h3>Friends List (5)</h3>
                <div className="friendsList">
                    <div className="user">
                        <div className="info">
                            <img src={ImageAvatar} alt="" />
                            <div className="userInfo">
                                <h4>User Name</h4>
                                <p>Gold</p>
                            </div>
                        </div>
                        <div className="bonus">
                            <p>100k</p>
                        </div>
                    </div>

                </div>
                <div className="invite">
                    <a href="#/">
                        Invite Friend
                    </a>
                    <a href="#/">copy</a>
                </div>
            </div>
        </div>
    )
}