import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../../context/context.component';

class Search extends Component {
    state = {  
        trackTitle: ''
    }

    findTrack = (dispatch, e) => {
        e.preventDefault();

        axios.get(`/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=c2dc7dbb79421c7350a226dcb9c843c2`)

        .then(res => {
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });
            this.setState({trackTitle: ""});
        })
        .catch(err => console.log(err))
      };

    onChange= e => {
        this.setState({ trackTitle: e.target.value });
    }
    
    render() { 
        return ( 
            <Consumer>
                {value => {
                   const { dispatch } = value;
                    return(
                        <div className="search mb-4">
                            <h1 className="text-center">
                                <i className="fas fa-music"></i> Search For A Song
                            </h1>
                            <p className="load text-center"> Get the lyrics for any song </p>
                            <form onSubmit={this.findTrack.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        
                                        placeholder="Song title..."
                                        name="trackTitle"
                                        value={ this.state.trackTitle}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button  className="search-button" type="submit">
                                <h5>Get Lyrics</h5>
                                </button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
         );
    }
}
 
export default Search;