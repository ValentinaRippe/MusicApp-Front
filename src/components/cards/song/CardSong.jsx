import React from 'react'
import { Link } from 'react-router-dom'
import './CardSong.css'

export function CardSong({ songs }) {
    return (
        <>
            {songs.map((item, index) => (
                <Link key={index} className="card" to={`/details/${item._id}`}>
                    <div className="containerImg">
                        <img
                            className="imgMus"
                            src="https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png"
                            alt=""
                        />
                        <img className="img" src={item.image} alt="" />
                    </div>
                    <p className="nameSongs">{item.name}</p>
                    <p>By {item.artistName}</p>
                </Link>
            ))}
        </>
    )
}
