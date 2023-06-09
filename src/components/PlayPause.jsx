import React from 'react'
import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa'

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => {


return (
  (isPlaying && activeSong?.trackName  === song.trackName)?
  (<FaPauseCircle
  size={35}
  className="text-gray-300"
  />):
  (<FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick={handlePlay}/>)
);

}

export default PlayPause;
