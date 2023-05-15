import {useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import {Error, Loader, SongCard} from '../components'
import {genres} from '../assets/constants'
import { useGetPlaylistQuery } from '../redux/services/spotifyCore'

const Discover = () => {

  const [artistID, setArtistID] = useState("RM")
  console.log(artistID)

  const dispatch = useDispatch()
  const {activeSong, isPlaying} = useSelector((state)=> state.player)
  function Song(songObj, albumName, trackName, albumImage, artistsOnTrack, artistArr,songID, url)
  {
    songObj.albumName = albumName
    songObj.trackName = trackName
    songObj.albumImage = albumImage
    songObj.artistsOnTrack = artistsOnTrack
    songObj.artistArr = artistArr
    songObj.songID = songID
    songObj.url = url
    return songObj
  }


  const songArr = []
  const {data, isFetching, error} = useGetPlaylistQuery(artistID);
 
  if (isFetching) return <Loader title="Loading..."></Loader>
  if (error) return <Error/>
  if (!isFetching && !error)
  {
    data.items.map((element)=>{
      let songObj = {}
      let artistStr = ""
      let artistArr = []
      let flag = 0
      //console.log(element.track)
      element.track.artists.forEach(listOfArtists)
      
      let song = new Song(songObj,element.track.album.name, element.track.name, element.track.album.images[1].url, 
        artistStr, artistArr,element.track.id, element.track.preview_url)
      
      songArr.push(song)
      function listOfArtists(element){
        artistArr.push(element.name)
        if (flag==0)
        {
          artistStr = artistStr+element.name
          flag=1
        }
        else {
          artistStr = artistStr+", "+element.name
        }
       
      
      }
      
    })
  }
return (
<div className='flex flex-col'>
    <div className='w-full flex justify-between items-center
    sm:flex-row flex-col mt-4 mb-10'>
    <h2 className='font-bold text-3xl text-white
     text-left'>Discover</h2>
    <select onChange={(element)=>{console.log(element)
      setArtistID(element.target.value)}} value={artistID}
    className='bg-black text-gray-300 p-3 text-sm 
    rounded-lg outline-none sm:mt-0 mt-5'>
    
   {/*{genres.map((genre)=>{return (<option key={genre.value} value={genre.value} >{genre.title}</option>)})}*/}
   
   {['RM', 'Yuvan', 'GV'].map((artist)=>
   {return (<option key={artist} value={artist} >{artist}</option>)})}
    </select>
    </div> 

    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songArr.map((element, index)=>{
          return <SongCard key = {element.songID} song={element} isPlaying={isPlaying} activeSong={activeSong} data={songArr}
          index={index}></SongCard>
        })}

    </div>
</div>
)

}

export default Discover

