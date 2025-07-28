import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import axios from "axios";
import Button from './Button';
import Pages from './Pages';
import Missing from './Missing';
import About from './About';

export default function Main() {
  const apiURL = `https://api.jikan.moe/v4/anime`;
  const [search, setSearch] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); 

  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${apiURL}?page=${page}`);
        setAnimeList(res.data.data);
      } catch (err) {
        console.error("Error fetching anime:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnime();
  }, [page]);

  useEffect(() => {
    const searchRes = animeList.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(searchRes);
  }, [search, animeList]);

  return (
    <div className="App">
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <h2 style={{ textAlign: 'center' }}>Loading...</h2>
            ) : (
              <Home animeList={search ? searchResult : animeList} />
            )
          }
        />
        <Route path="/:id" element={<Pages />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>

      
      {location.pathname === '/' && (
        <Button page={page} setPage={setPage} />
      )}
    </div>
  );
}
