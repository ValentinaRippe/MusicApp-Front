import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AiFillLeftCircle } from "react-icons/ai";
import { IoMdMusicalNote } from "react-icons/io";
import apiMusic from "../../api";

import "./Details.css";

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [songDetail, setSongDetail] = useState({});
  const [artist, setArtist] = useState([]);

  const fetchSongs = async () => {
    const res = await apiMusic.get(`/api/songs/${id}`);
    const artists = await apiMusic.get(`/api/artists`);
    setSongDetail(res.data);
    setArtist(artists.data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="Details">
      <button className="buttonReturn" onClick={() => navigate(-1)}>
        <AiFillLeftCircle size={"40"} />
      </button>
      <div className="detailSong">
        <div className="containerImgSong">
          <img
            className="imgM"
            src="https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png"
            alt=""
          />
          <img src={songDetail.image} alt="" />
        </div>
        <p className="nameSong">{songDetail.name}</p>
        <p>{songDetail.time}</p>
        <p>
          By {songDetail.artistName} - {songDetail.date}
        </p>
      </div>
      <hr />
      <div className="containerDetails">
        <div>
          {artist.map((item) =>
            item.name === songDetail.artistName ? (
              <div key={item._id} className="cardArtis">
                <div className="imgArtist">
                  <h2>{item.name}</h2>
                  <img src={item.image} alt="" />
                </div>
                <p>
                  <strong>Artist</strong> / {item.description} / {item.age}{" "}
                  years old
                </p>
                <p>Language - {item.language}</p>
              </div>
            ) : null
          )}
        </div>
        <hr />
        <div className="genre">
          <div className="nameGenre">
            <h2>Genre </h2> <strong>{songDetail.genre} <IoMdMusicalNote size={30} /></strong>
          </div>
          <Link to={"/genres"}>
            {" "}
            <p>see more...</p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
