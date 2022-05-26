import React, { useEffect, useState } from "react";
import { CardsSongs } from "../../components/songs/CardsSongs";
import { Search } from "../../components/search/Search";
import logo from "../../assets/logoMusic.svg";
import apiMusic from "../../api";
import "./Home.css";

export function Home() {
    const [songs, setSongs] = useState([]);
    const [songsFilter, setSongsFilter] = useState([]);
    const [currentPages, setCurrentPages] = useState(0)

    const fetchSongs = async () => {
        const res = await apiMusic.get(`api/songs`);
        setSongs(res.data);
        setSongsFilter(res.data);
    };

    const filterSong = (searchValue) => {
        const searchResults = songs.filter((item) => {

            return `${item.name} ${item.artistName}`
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(
                    searchValue.toLowerCase()
                )

        });
        setSongsFilter(searchResults);
        setCurrentPages(0)
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div className="Home">
            <div className="containerHero">
                <pre className="textHero">
                    High fidelite <br /> for the music
                </pre>
                <img
                    className="imgMusic"
                    src="https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png"
                    alt=""
                />
                <div className="search">
                    <Search filterSong={filterSong} />
                </div>
                <div className="wave">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="containerOne">
                <CardsSongs
                 songs={songs?songsFilter:songs} 
                 currentPages={currentPages}
                 setCurrentPages={setCurrentPages}
                 />
            </div>
        </div>
    );
}
