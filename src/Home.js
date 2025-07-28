import { Link } from "react-router-dom";

export default function Home({ animeList }) {
  return (
    <div className="anime-container">
      {animeList.map((anime) => (
        <div key={anime.mal_id} className="anime-card">
          <Link to={`/${anime.mal_id}`}>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
          </Link>
          <h3 className='con'>
            {anime.title.length <= 20 ? anime.title : `${anime.title.slice(0, 25)}...`}
          </h3>
            <p className='con'>Rating : {anime.score}</p>

        </div>
      ))}
    </div>
  );
}





