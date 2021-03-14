import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';

import Spinner from '../../layout/Spinner/Spinner.component';

const Lyrics = props => {
    const [ track, setTrack ] = useState({});
    const [ lyrics, setLyrics] = useState({});
    
    useEffect(() => {
        axios
        .get(
            `/track.lyrics.get?track_id=${props.match.params.id}&apikey=c2dc7dbb79421c7350a226dcb9c843c2`
        )

        .then(res => {
            //console.log(res.data);
            let lyrics = res.data.message.body.lyrics;
            setLyrics({ lyrics })

            return axios
            .get(
                `/track.get?track_id=${props.match.params.id}&apikey=c2dc7dbb79421c7350a226dcb9c843c2`
            )
        })

        .then(res => {
            //console.log(res.data);
            let track = res.data.message.body.track;
            setTrack({ track });
        })

        .catch(err => console.log(err))
    }, [props.match.params.id]);

    if (track === undefined || 
        lyrics === undefined || 
        Object.keys(track).length === 0 ||
        Object.keys(lyrics).length === 0
    ){
        return <Spinner />
    }else{
        return ( 
            <React.Fragment>
                <Link to="/" className="btn btn-dark btn-sm text-dark mb-4 trnasparent"> 
                Go Back 
                </Link>
                <div className="card mb-4 shadow-sm trnasparent">
                    <h5 className="card-header">
                        {track.track.track_name} by{" "}
                        <span className="text-secondary">{track.track.artist_name}</span>
                    </h5>
                    <div className="card-body">
                        <p className="card-text">{lyrics.lyrics.lyrics_body}</p>
                    </div>
                </div>
                <ul className="list-group mt-3 trnasparent">
                    <li className="list-group-item trnasparent">
                        <strong>Album ID</strong>: {track.track.album_id}
                    </li>
                    <li className="list-group-item trnasparent">
                        <strong>Song Genre</strong>:{" "}
                        {track.track.primary_genres.music_genre_list.length === 0
                        ? "NO GENRE AVAILABLE"
                        : track.track.primary_genres.music_genre_list[0].music_genre
                            .music_genre_name}
                    </li>
                    <li className="list-group-item trnasparent">
                        <strong>Explicit Words</strong>:{" "}
                        {track.track.explicit === 0 ? "No" : "Yes"}
                    </li>
                    <li className="list-group-item trnasparent">
                        <strong>Release Date</strong>:{" "}
                        <Moment format="DD/MM/YYYY">
                        {track.track.first_release_date}
                        </Moment>
                    </li>
                </ul>
            </React.Fragment>
         );
    }
}

export default Lyrics;