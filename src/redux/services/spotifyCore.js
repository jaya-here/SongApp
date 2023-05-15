import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const artistIDS = {
    RM: '37i9dQZF1DXa3GFRsPDpwq',
    Yuvan: '37i9dQZF1DZ06evO3TcHDq',
    GV: '37i9dQZF1DZ06evO3uUCuI'
}



export const spotifyApi = createApi ({
        reducerPath :'spotifyApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://spotify23.p.rapidapi.com/',
            prepareHeaders: (headers)=>{
                headers.set('X-RapidAPI-Key','a0b6d8cb9bmshde09de885b599e0p1899f3jsn1375238fb5df')
                headers.set('X-RapidAPI-Host','spotify23.p.rapidapi.com')

                return headers
            }
        }),
        endpoints:(builder)=>({
            getPlaylist: builder.query({query:(artistname)=>{
                let artistid = artistIDS[artistname]
                return (`playlist_tracks/?id=${artistid}`)
            }})
         
        })
    }
 )

 export const {
    useGetPlaylistQuery} = spotifyApi
 