import { FaCommentDots, FaHeart, FaShare} from 'react-icons/fa'
const Card = ({user, toggleFollow}) => {
    return (
        <article className="card">
            <div className="card--body">
                <img src={user.avatar} alt="" className="card--prof" />
                <div className="card--info">
                    <div className="card--name">
                        <h4>{user.name}</h4>
                        <span>{user.username}</span>
                    </div>
                    <p className="card--caption">{user.caption}</p>
                    <div className="card--video">
                        <video src={user.video} controls></video>
                        <div className="card--socials">
                            <div className="card--likes">
                                <FaHeart />
                                <span>{user.likes}</span>
                            </div>
                            <div className="card--comments">
                                <FaCommentDots />
                                <span>{user.comments}</span>
                            </div>
                            <div className="card--shares">
                                <FaShare />
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button 
                    className={`card--button ${user.is_followed ? "followed" : ''}`}
                    onClick={() => toggleFollow(user)}
                >
                    {user.is_followed? 'followed' : 'follow'}
                </button>
            </div>
        </article>
    );
}
 
export default Card;