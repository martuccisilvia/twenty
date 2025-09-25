import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AlbumList from "./components/AlbumList/AlbumList";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import albums from "./data/album.js";

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

  const filteredAlbums = albums
    .map((album) => {
      const filteredSongs = album.songs.filter((song) =>
        song.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (
        album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        filteredSongs.length > 0
      ) {
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
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {showBanner && <div className="banner">{bannerText}</div>}

      {/* wrapper per occupare lo spazio centrale */}
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AlbumList
                  albums={filteredAlbums}
                  playlist={playlist}
                  setPlaylist={setPlaylist}
                  addToPlaylist={addToPlaylist}
                />
              </>
            }
          />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>

      {/* Footer globale */}
      <Footer />
    </Router>
  );
}

export default App;
