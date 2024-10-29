import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  Event,
} from 'react-native-track-player';
import {usePlayerStore} from './usePlayerStore';

const PlaybackService = async () => {
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
  TrackPlayer.addEventListener(Event.RemoteStop, () => {
    TrackPlayer.stop();
    usePlayerStore.getState().clear();
  });
  TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, async e => {
    const currentTrack = usePlayerStore?.getState()?.currentPlayingTrack;
    if (e?.track?.id === undefined || currentTrack?.id === e?.track?.id) {
      return;
    }
    const allTracks = usePlayerStore.getState().allTracks;
    const track = allTracks?.find(t => t?.id === e?.track?.id) as any;
    usePlayerStore?.getState()?.setCurrentTrack(track);
  });

  await TrackPlayer.setupPlayer();
  await TrackPlayer.updateOptions({
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
    android: {
      // This is the default behavior
      appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
    },
  });
};

export default PlaybackService;
