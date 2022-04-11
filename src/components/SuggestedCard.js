const SuggestedCard = ({suggestedUser, toggleFollow}) => {
    return ( 
        <article className="suggested-card">
            <img src={suggestedUser.avatar} alt="" className="suggested-card--prof" />
            <div className="suggested-card--names">
                <h4>{suggestedUser.username}</h4>
                <p>{suggestedUser.name}</p>
            </div>
            <button 
                className="card--button"
                onClick={() => toggleFollow(suggestedUser)}
            >
                {suggestedUser.is_followed ? 'followed' : 'follow'}
            </button>
        </article>
    );
}
 
export default SuggestedCard;