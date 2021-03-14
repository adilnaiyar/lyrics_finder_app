import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../../context/context.component';

const Search = () => {
   const [ state, setState ] = useContext(Context);
   const [ userInput, setUserInput ] = useState("");
   const [ trackTitle, setTrackTitle ] = useState("");

   useEffect(() => {
        axios
        .get(
            `/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=c2dc7dbb79421c7350a226dcb9c843c2`)

        .then(res => {
            let track_list = res.data.message.body.track_list;
            setState({ track_list: track_list, heading: "Search Results" });
        })
        .catch(err => console.log(err))
   }, [trackTitle]);

   const findTrack = e => {
       e.preventDefault();
       setTrackTitle(userInput);
   }

    const onChange= e => {
        setUserInput(e.target.value);
    }
    
    return(
        <div className="search mb-4">
            <h1 className="text-center">
                <i className="fas fa-music"></i> Search For A Song
            </h1>
            <p className="load text-center"> Get the lyrics for any song </p>
            <form onSubmit={findTrack}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Song title..."
                        name="userInput"
                        value={userInput}
                        onChange={onChange}
                        required
                    />
                </div>
                <button  className="search-button" type="submit">
                <h5>Get Lyrics</h5>
                </button>
            </form>
        </div>
    )

}
 
export default Search;