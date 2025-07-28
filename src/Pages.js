import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Pages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // ✅ Error state

  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);

        if (!res.data || !res.data.data) {
          setError(true);
        } else {
          setAnime(res.data.data);
        }

      } catch (err) {
        console.error("Error fetching anime details:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;

  if (error || !anime) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Anime not found or invalid ID ❌</h2>
        <button onClick={() => navigate("/")} className="back">⬅️ Go Back Home</button>
      </div>
    );
  }

  return (
    <div className="anime-detail">
      <h2>{anime.title}</h2>
      <img src={anime.images.jpg.large_image_url} alt={anime.title} />
      <p><strong>Type:</strong> {anime.type}</p>
      <p><strong>Episodes:</strong> {anime.episodes}</p>
      <p><strong>Status:</strong> {anime.status}</p>
      <p><strong>Score:</strong> {anime.score}</p>
      <p><strong>Synopsis:</strong> {anime.synopsis}</p>

      <button onClick={() => navigate("/")} className="back">⬅️ Back</button>
    </div>
  );
}

export default Pages;
