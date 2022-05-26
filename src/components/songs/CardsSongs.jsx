import React from "react";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { FaRegSadCry } from 'react-icons/fa'
import { CardSong } from "../cards/song/CardSong";
import "./CardsSongs.css";

export function CardsSongs({ songs, currentPages, setCurrentPages }) {

  const songsPages = songs.slice(currentPages, currentPages + 10);

  const nextPages = () => {
    if (songs.length > currentPages + 10) {
      setCurrentPages(currentPages + 10);
    }
  };

  const prevPages = () => {
    if (currentPages > 0) {
      setCurrentPages(currentPages - 10);
    }
  };
  return (
    <>
      {songs.length !== 0 ? (
        <div>
          {currentPages > 0 ? (
            <button className="buttonPage" onClick={prevPages}>
              <AiFillLeftCircle />
            </button>
          ) : null}
          {songs.length > currentPages + 10 ? (
            <button className="buttonPage" onClick={nextPages}>
              <AiFillRightCircle />
            </button>
          ) : null}
          <div className="Cards">
            <CardSong songs={songsPages}/>
          </div>
          {currentPages > 0 ? (
            <button className="buttonPage" onClick={prevPages}>
              <AiFillLeftCircle />
            </button>
          ) : null}
          {songs.length > currentPages + 10 ? (
            <button className="buttonPage" onClick={nextPages}>
              <AiFillRightCircle />
            </button>
          ) : null}
        </div>
      ) : (
        <div className="notFound">
          <h2>Your search <br /> was not found</h2>
          <FaRegSadCry size={'40'} />
        </div>
      )}
    </>
  );
}
