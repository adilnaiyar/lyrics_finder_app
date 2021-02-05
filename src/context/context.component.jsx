import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list: [],
        heading: ""
    }
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=c2dc7dbb79421c7350a226dcb9c843c2`)
        .then(res => {
            //console.log(res.data);
            this.setState({
                track_list: res.data.message.body.track_list,
                heading: "Top 10 Tracks"
            });
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;