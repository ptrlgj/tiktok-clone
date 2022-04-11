const SuggestedCard = ({avatar, name, username, is_followed}) => {
    return ( 
        <article className="suggested-card">
            <img src={avatar} alt="" className="suggested-card--prof" />
            <div className="suggested-card--names">
                <h4>{username}</h4>
                <p>{name}</p>
            </div>
            <button className="card--button">{is_followed ? 'followed' : 'follow'}</button>
        </article>
    );
}
 
export default SuggestedCard;