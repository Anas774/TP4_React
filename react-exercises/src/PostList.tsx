import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setError(null)

        const fetchPost = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                const data = await response.json();
                setPosts(data)
            }
            catch (err) {
                setError("Impossible de récupérer les posts");
            }
        };
        fetchPost();
    }, [])


    return (
        <div className="postList">
            <h2>Les 10er posts</h2>

            {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

            {!error && (
                <ul>
                    {posts.slice(0,10).map((post)=> (
                        <li key={post.userId}>
                            <Link to={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            <p>Nbr de posts : {posts.length}</p>
        </div>
    )
}

export default PostList;