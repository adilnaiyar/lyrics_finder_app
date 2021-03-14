import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Context = React.createContext();

// const reducer = (state, action) => {
//     switch(action.type){
//         case 'SEARCH_TRACKS':
//         return{
//             ...state,
//             track_list: action.payload,
//             heading: 'Search Results'
//         };
//         default:
//             return state;
//     }
// }

export function ContextController({ children }) {
    let initialState = {
        track_list: [],
        heading: "",
        //dispatch: action => this.setState(state => reducer(state, action))
    };

    const [ state, setState ] = useState(initialState);
    
    useEffect(() => {
        axios.get(`/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=c2dc7dbb79421c7350a226dcb9c843c2`
        )
        .then(res => {
            //console.log(res.data);
            setState({
                track_list: res.data.message.body.track_list,
                heading: "Top 10 Tracks",
            });

        })
        .catch(err => console.log(err))
    }, []);

        return(
            <Context.Provider value = { [state, setState] } >
                {children}
            </Context.Provider>
        );
}
