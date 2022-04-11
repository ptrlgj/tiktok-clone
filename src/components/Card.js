import { FaCommentDots, FaHeart, FaShare} from 'react-icons/fa'
const Card = ({avatar, button_visible, caption, comments, id, is_followed, likes, name, timestamp, username, video}) => {
    return (
        <article className="card">
            <div className="card--body">
                <img src={avatar} alt="" className="card--prof" />
                <div className="card--info">
                    <div className="card--name">
                        <h4>{name}</h4>
                        <span>{username}</span>
                    </div>
                    <p className="card--caption">{caption}</p>
                    <div className="card--video">
                        <video src={video} controls></video>
                        <div className="card--socials">
                            <div className="card--likes">
                                <FaHeart />
                                <span>{likes}</span>
                            </div>
                            <div className="card--comments">
                                <FaCommentDots />
                                <span>{comments}</span>
                            </div>
                            <div className="card--shares">
                                <FaShare />
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={`card--button ${is_followed ? "followed" : ''}`}>{is_followed? 'followed' : 'follow'}</button>
            </div>
        </article>
    );
}
 
export default Card;