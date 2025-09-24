// App.jsx
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AlbumList from "./components/AlbumList";

// Array completo degli album
const albums = [
  {
    title: "Regional at Best",
    year: 2011,
    img: "/resources/regional-at-the-best.jpg",
    songs: ["Guns for Hands", "Holding On to You", "Ode to Sleep", "Slowtown", "Car Radio", "Forest", "Glowing Eyes", "Kitchen Sink", "Anathema", "Lovely", "Ruby", "Trees", "Be Concerned", "Clear", "House of Gold", "Two"]
  },
  {
    title: "Vessel",
    year: 2013,
    img: "/resources/vessel.jpg",
    songs: ["Ode to Sleep", "Holding on to You", "Migraine", "House of Gold", "Car Radio", "Semi-Automatic", "Screen", "The Run and Go", "Fake You Out", "Guns for Hands", "Trees", "Truce", "Glowing Eyes", "Kitchen Sink", "Lovely", "Forest"]
  },
  {
    title: "Blurryface",
    year: 2015,
    img: "/resources/blurryface.jpg",
    songs: ["Heavydirtysoul", "Stressed Out", "Ride", "Fairly Local", "Tear in My Heart", "Lane Boy", "The Judge", "Doubt", "Polarize", "We Don't Believe What's on TV", "Message Man", "Hometown", "Not Today", "Goner"]
  },
  {
    title: "Trench",
    year: 2018,
    img: "/resources/trench.jpg",
    songs: ["Jumpsuit", "Levitate", "Morph", "My Blood", "Chlorine", "Smithereens", "Neon Gravestones", "Bandito", "Pet Cheetah", "Legend", "Leave the City"]
  },
  {
    title: "Scaled and Icy",
    year: 2021,
    img: "/resources/scaled-and-icy.jpg",
    songs: ["Good Day", "Choker", "Shy Away", "The Outside", "Saturday", "Never Take It", "Mulberry Street", "Formidable", "Bounce Man", "No Chances", "Redecorate"]
  },
  {
    title: "Clancy",
    year: 2024,
    img: "/resources/clancy.jpg",
    songs: ["Overcompensate", "Next Semester", "Backslide", "Midwest Indigo", "Routines in the Night", "Vignette", "The Craving (Jenna’s Version)", "Lavish", "Navigating", "Snap Back", "Oldies Station", "At the Risk of Feeling Dumb", "Paladin Strait"]
  },
  {
    title: "Breach",
    year: 2025,
    img: "/resources/breach.jpg",
    songs: ["City Walls", "RAWFEAR", "Drum Show", "Garbage", "The Contract", "Downstairs", "Robot Voices", "Center Mass", "Cottonwood", "One Way", "Days Lie Dormant", "Tally", "Intentions"]
  }
];

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
            </>
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;
