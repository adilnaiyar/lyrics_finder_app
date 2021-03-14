import React, { useContext } from 'react';

import { Context } from '../../../context/context.component';
import Spinner from '../../layout/Spinner/Spinner.component';
import TrackList from './TrackList/TrackList.component';

const Tracks = () => {
    const [ state ] = useContext(Context);
    const { track_list, heading } = state;

    if(track_list === undefined || track_list.length === 0){
        return <Spinner />
    }else{
        return ( 
            <React.Fragment>
                <h3 className="text-center text-white mb-4">{ heading }</h3>
                <div className="row">
                    {track_list.map(item => (
                        <TrackList  key={item.track.track_id} track={item.track}/>
                    ))}
                </div>
            </React.Fragment>
        );
    }              
}
 
export default Tracks;