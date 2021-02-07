import React from 'react';

import { Consumer } from '../../../context/context.component';
import Spinner from '../../layout/Spinner/Spinner.component';
import TrackList from './TrackList/TrackList.component';

const Tracks = () => {
    return ( 
        <Consumer >
            {value => {
                const { track_list, heading } = value;
                if(track_list === undefined || track_list.length === 0){
                    return <Spinner />
                }else{
                    //console.log(track_list);
                    return(
                        <React.Fragment>
                            <h3 className="text-center mb-4">{ heading }</h3>
                            <div className="row">
                                {track_list.map(item => (
                                    <TrackList  key={item.track.track_id} track={item.track}/>
                                ))}
                            </div>
                        </React.Fragment>
                    )
                }
            }}
        </Consumer>
     );
}
 
export default Tracks;