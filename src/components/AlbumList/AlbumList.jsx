import React, { useState, useEffect, useRef } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import "./AlbumList.css";

function AlbumList({ albums, playlist, setPlaylist, addToPlaylist }) {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".album-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const openModal = (album) => setSelectedAlbum(album);
  const closeModal = () => setSelectedAlbum(null);

  const handleAddSong = (song) => {
    addToPlaylist(song); // chiama la funzione da App.jsx
  };

  return (
    <>
      <section id="listen">
        <div className="album-list" ref={containerRef}>
          {albums.map((album, index) => (
            <AlbumCard key={index} album={album} openModal={openModal} />
          ))}
        </div>
      </section>

      {selectedAlbum && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h2>{selectedAlbum.title} ({selectedAlbum.year})</h2>
            <ul className="songs-modal-list">
              {selectedAlbum.songs.map((song, i) => (
                <li key={i}>
                  <button
                    className={`song-btn ${playlist.includes(song) ? "added" : ""}`}
                    onClick={() => handleAddSong(song)}
                  >
                    {song}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default AlbumList;
