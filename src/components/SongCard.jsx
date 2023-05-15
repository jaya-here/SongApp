import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../redux/features/playerSlice';



const SongCard = ({song, isPlaying, activeSong,data, index}) => {
  const dispatch = useDispatch()
const handlePauseClick = () => {
  dispatch(playPause(false))

  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, index}))
    dispatch(playPause(true))

  }
  
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
         <PlayPause
         isPlaying={isPlaying}
         activeSong={activeSong} 
         song={song} 
         handlePause={handlePauseClick}
         handlePlay = {handlePlayClick}
         />

    </div>
<img alt="song_img" src={song.albumImage}/>
  
  </div>
  <div className='mt-4 flex flex-col'>
   <p className='font-semibold text-lg text-white truncate'>
    <Link to={`/songs/${song?.key}`}>
    {song.trackName}
    
    </Link>
  </p> 

  </div>
  <div className='mt-4 flex flex-col'>
  <p className='text-sm truncate text-gray-300 mt-1'>  
    <Link to={song.artistsArr ? `/artist/${song?.artistsArr[0]?.adamid}`:'/top-artists'}>
    {song.artistsOnTrack}
    
    </Link>
  </p> 

  </div>

  </div>
  )
    };

export default SongCard;
