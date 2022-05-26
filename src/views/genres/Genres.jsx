import React, { useState, useEffect } from "react";
import { CardSong } from "../../components/cards/song/CardSong";
import apiMusic from "../../api";
import './Genres.css'

export function Genres() {
  const [songs, setSongs] = useState([]);
  const [songsGenres, setGenres] = useState([]);

  const fetchSongs = async () => {
    const res = await apiMusic.get(`api/songs`);
    const genres = await apiMusic.get(`api/genres`);
    setSongs(res.data);
    setGenres(genres.data);
  };
  for (let item of songs) {
    for (let j in songsGenres) {
      if (item.genre.includes(songsGenres[j].name)) {
        songsGenres[j].songs.push(item)
      }
    }
  }

  useEffect(() => {
    fetchSongs();
  }, []);
  
  return (
    <div className="Genres">
      {songsGenres.map((item) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <div className="cardsSongs">
            <CardSong songs={item.songs} />
          </div>
        </div>
      ))}
    </div>
  );
}
