import {trackData} from '@utility/dummyData';
import {mmkvStorage} from './storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import {convertTrack} from '@utility/functions/constant';
import {ImageSourcePropType} from 'react-native';

interface ArtistProps {
  name?: string;
  bio?: string;
  cover_uri?: string;
}
export interface Track {
  id: number;
  track_uri?: any;
  video_uri?: string;
  title: string;
  lyricist: string;
  artist: ArtistProps;
  artwork_uri?: any;
  category: string;
}

interface PlayerStore {
  currentPlayingTrack: Track | null;
  allTracks: Track[];
  isSuffling: boolean;
  isRepeating: boolean;
  clear: () => void;
  setCurrentTrack: (track: Track) => Promise<void>;
  setCurrentPlayingTrack: (track: Track) => Promise<void>;
  play: () => Promise<void>;
  pause: () => Promise<void>;
  next: () => Promise<void>;
  previous: () => Promise<void>;
  toggleSuffle: () => Promise<void>;
  toggleRepeat: () => Promise<void>;
}

export const usePlayerStore = create<PlayerStore>()(
  persist(
    (set, get) => ({
      currentPlayingTrack: null,
      allTracks: trackData,
      isSuffling: false,
      isRepeating: false,
      clear: () => {
        set({currentPlayingTrack: null});
      },
      setCurrentTrack: async (track: Track) => {
        set({
          currentPlayingTrack: track,
        });
      },
      setCurrentPlayingTrack: async (track: Track) => {
        const {allTracks} = get();
        await TrackPlayer.reset();

        set({currentPlayingTrack: track});
        const currentTrackConverted = convertTrack(track);
        const otherTracks = allTracks
          ?.filter(t => t?.id !== track?.id)
          ?.map(t => convertTrack(t));
        await TrackPlayer.add([currentTrackConverted, ...otherTracks]);
        await TrackPlayer.play();
      },
      play: async () => {
        const {currentPlayingTrack, allTracks} = get();
        const activeTrack = await TrackPlayer.getActiveTrack();

        if (activeTrack) {
          await TrackPlayer.play();
        } else {
          await TrackPlayer.reset();
          const currentTrackConverted = convertTrack(currentPlayingTrack);
          const otherTracks = allTracks
            ?.filter(t => t?.id !== currentPlayingTrack?.id)
            ?.map(t => convertTrack(t));
          await TrackPlayer.add([currentTrackConverted, ...otherTracks]);
          await TrackPlayer.play();
        }
      },
      pause: async () => {
        await TrackPlayer.pause();
      },
      next: async () => {
        const {currentPlayingTrack, allTracks, isRepeating} = get();
        await TrackPlayer.reset();
        if (isRepeating) {
          await TrackPlayer.add([convertTrack(currentPlayingTrack)]);
          await TrackPlayer.play();
        } else {
          const currectIndex = allTracks?.findIndex(
            t => t?.id === currentPlayingTrack?.id,
          );
          let nextIndex = (currectIndex + 1) % allTracks?.length;
          if (allTracks?.length === 1) {
            nextIndex = currectIndex;
          }
          const nextTrack = allTracks[nextIndex];
          if (nextTrack) {
            set({currentPlayingTrack: nextTrack});
            const otherTracks = allTracks
              ?.filter(t => t?.id !== currentPlayingTrack?.id)
              ?.map(t => convertTrack(t));
            await TrackPlayer.add([convertTrack(nextTrack), ...otherTracks]);
            await TrackPlayer.play();
          }
        }
      },
      previous: async () => {
        const {currentPlayingTrack, allTracks, isRepeating} = get();
        await TrackPlayer.reset();
        if (isRepeating) {
          await TrackPlayer.add([convertTrack(currentPlayingTrack)]);
          await TrackPlayer.play();
        } else {
          const currectIndex = allTracks?.findIndex(
            t => t?.id === currentPlayingTrack?.id,
          );
          let prevIndex =
            (currectIndex - 1 + allTracks?.length) % allTracks?.length;
          const prevTrack = allTracks[prevIndex];
          if (prevTrack) {
            set({currentPlayingTrack: prevTrack});
            const otherTracks = allTracks
              ?.filter(t => t?.id !== currentPlayingTrack?.id)
              ?.map(t => convertTrack(t));
            await TrackPlayer.add([convertTrack(prevTrack), ...otherTracks]);
            await TrackPlayer.play();
          }
        }
      },
      toggleRepeat: async () => {
        const {currentPlayingTrack} = get();
        await TrackPlayer.reset();
        await TrackPlayer.add([convertTrack(currentPlayingTrack)]);
        await TrackPlayer.setRepeatMode(RepeatMode.Track);
        await TrackPlayer.play();
        set({
          isRepeating: true,
        });
        set({
          isSuffling: false,
        });
      },
      toggleSuffle: async () => {
        const {currentPlayingTrack, allTracks} = get();
        await TrackPlayer.reset();
        const otherTracks = allTracks
          ?.filter(t => t?.id !== currentPlayingTrack?.id)
          ?.map(t => convertTrack(t));
        await TrackPlayer.add([
          convertTrack(currentPlayingTrack),
          ...otherTracks,
        ]);
        await TrackPlayer.setRepeatMode(RepeatMode.Off);
        await TrackPlayer.play();
        set({
          isRepeating: false,
        });
        set({
          isSuffling: true,
        });
      },
    }),
    {
      name: 'player-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
