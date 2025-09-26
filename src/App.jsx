import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import albums from "./data/albums.js";

function App() {
  const [playlist, setPlaylist] = useState(() => {
    const saved = localStorage.getItem("playlist");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [showBanner, setShowBanner] = useState(false);
  const [bannerText, setBannerText] = useState("");

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  const addToPlaylist = (song) => {
    setPlaylist((prev) => {
      if (!prev.includes(song)) {
        setBannerText(`${song} added to playlist!`);
        setShowBanner(true);
        setTimeout(() => setShowBanner(false), 2000);
        return [...prev, song];
      }
      return prev;
    });
  };

  // filtro album + canzoni
  const filteredAlbums = albums
    .map((album) => {
      const filteredSongs = album.songs.filter((song) => song.toLowerCase().includes(searchTerm.toLowerCase()));

      if (album.title.toLowerCase().includes(searchTerm.toLowerCase()) || filteredSongs.length > 0) {
        return {
          ...album,
          songs: filteredSongs.length > 0 ? filteredSongs : album.songs,
        };
      }

      return null;
    })
    .filter((album) => album !== null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm} showBanner={showBanner} bannerText={bannerText} />}>
          <Route index element={<Home filteredAlbums={filteredAlbums} playlist={playlist} setPlaylist={setPlaylist} addToPlaylist={addToPlaylist} />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
