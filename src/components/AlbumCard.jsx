import React from "react";

function AlbumCard({ album, openModal }) {
  return (
    <div className="album-card">
      <img src={album.img} alt={album.title} className="album-img" />
      <h3 className="album-title">{album.title} ({album.year})</h3>
      <button className="album-btn" onClick={() => openModal(album)}>
        Feel it now
      </button>
    </div>
  );
}

export default AlbumCard;
