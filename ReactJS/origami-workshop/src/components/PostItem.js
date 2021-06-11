const Post = (props) => {

    return (
        <div className="Post">
            <img src="/blue-origami-bird.png" alt="origami" />
            <p className="description">{props.description}</p>
            <div>
                <span>
                    <small>Author: </small>
                    Johny Sins
                </span>
            </div>
        </div>
    );
}

export default Post;