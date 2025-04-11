import { useState, useEffect } from 'react';

export function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError('');
    setUserData(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('User not Found');
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  if (!username) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="card">
      <img src={userData.avatar_url} alt={userData.login} width={100} />
      <h2>{userData.name || userData.login}</h2>
      <p>📍 {userData.location || 'Location not available'}</p>
      <p>👥 Followers: {userData.followers}</p>
      <p>
        🔗{' '}
        <a href={userData.html_url} target="_blank" rel="noreferrer">
          View Profile
        </a>
      </p>
    </div>
  );
}
