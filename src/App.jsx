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
    try {
      const saved = localStorage.getItem("playlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showBanner, setShowBanner] = useState(false);
  const [bannerText, setBannerText] = useState("");

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  const addToPlaylist = (song) => {
    setPlaylist(prev => {
      if (!prev.includes(song)) {
        setBannerText(`${song} aggiunta alla playlist!`);
        setShowBanner(true);
        setTimeout(() => setShowBanner(false), 2000);
        return [...prev, song];
      }
      return prev;
    });
  };

  return (
    <Router>
      <Navbar />
      {showBanner && <div className="banner">{bannerText}</div>}

      <Routes>
        <Route
          path="/"
          element={

            <>
              <Hero />
              <AlbumList
                albums={albums}
                playlist={playlist}
                setPlaylist={setPlaylist}
                addToPlaylist={addToPlaylist}
              />
              <section className="playlist-section" id="playlist">
                <h2>La tua Playlist</h2>
                {playlist.length === 0 ? (
                  <p>Nessuna canzone aggiunta</p>
                ) : (
                  <ul>
                    {playlist.map((song, i) => (
                      <li key={i} className="playlist-item">
                        {song}
                        <button
                          className="remove-btn"
                          onClick={() =>
                            setPlaylist(prev => prev.filter(s => s !== song))
                          }
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <Footer />

            </>
          }
        />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>

  );
}

export default App;
