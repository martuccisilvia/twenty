import Hero from "../../components/Hero/Hero";
import AlbumList from "../../components/AlbumList/AlbumList";

function Home({ filteredAlbums, playlist, setPlaylist, addToPlaylist }) {
  return (
    <>
      <Hero />
      <AlbumList albums={filteredAlbums} playlist={playlist} setPlaylist={setPlaylist} addToPlaylist={addToPlaylist} />
      <section className="playlist-section" id="playlist">
        <h2>Your Playlist</h2>
        {playlist.length === 0 ? (
          <p>No songs added</p>
        ) : (
          <ul>
            {playlist.map((song, i) => (
              <li key={i} className="playlist-item">
                {song}
                <button className="remove-btn" onClick={() => setPlaylist((prev) => prev.filter((s) => s !== song))}>
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default Home;
