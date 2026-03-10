import { useState, useEffect } from "react";

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Erreur lors du fetch");
                }

                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError("Impossible de récupérer les utilisateurs");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [refreshKey]);

    function handleRefresh() {
        setRefreshKey((k) => k + 1);
    }

    return (
        <div>
            <h1>Liste des Utilisateurs</h1>

            <button onClick={handleRefresh}>Rafraîchir</button>

            {loading && <p>Chargement...</p>}

            {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

            {!loading && !error && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <h3>{user.name}</h3>
                            <p>Email : {user.email}</p>
                            <p>Tél : {user.phone}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserList;