import { useEffect, useState } from 'react';
import PostItem from './PostItem';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/api/origami')
            .then(res => res.json())
            .then((newPosts) => {
                setPosts(newPosts);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div className="Posts">
            {posts.map(p => <PostItem {...p} />) || null}
        </div>
    );
}

export default Posts;