const FollowedCard = ({avatar, name, username}) => {
    return ( 
        <article className="followed-card">
            <img src={avatar} alt="" className="followed-card--prof" />
            <div className="followed-card--names">
                <h4>{username}</h4>
                <p>{name}</p>
            </div>
        </article>
    );  
}
 
export default FollowedCard;