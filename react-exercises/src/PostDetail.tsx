import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

function PostDetail() {
    const {postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDetailPost = async () => {
            setLoading(true);
            setError(null)
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`
                );
                const data = await response.json();
                setPost(data)
            }
            catch (err) {
                setError("Impossible de récupérer les posts");
            }
            finally {
                setLoading(false)
            }
        };
        fetchDetailPost();
    }, [postId])

    if (loading) return <div>Chargement...</div>;

    return (
        <div className="postDetail">

            {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

            {post && (
                <article>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to="/posts">Retour à la liste des posts</Link>
                </article>
            )}
        </div>
    )
}

export default PostDetail;