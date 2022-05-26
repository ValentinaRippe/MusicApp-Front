import React, {useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.css";

export function Search( props ) {
    const {filterSong} = props
    const [searchValue, setSearchValue] = useState("");

    const onSearchValueChange = (event) => {
        event.preventDefault();
        filterSong(searchValue);
        setSearchValue("");
    };
    
    return (
        <div className="Search">
            <form onSubmit={onSearchValueChange} className="formSearch">
                <input
                    className="inputSearch"
                    type="text"
                    placeholder="Search song or artist..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="buttonSearch" type="submit" value="Search">
                    <AiOutlineSearch size={"30"} />
                </button>
            </form>
        </div>
    );
}
