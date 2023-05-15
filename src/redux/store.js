import { configureStore } from '@reduxjs/toolkit';
import { spotifyApi } from './services/spotifyCore';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware)=>{return (getDefaultMiddleware().concat(spotifyApi.middleware))}
});
