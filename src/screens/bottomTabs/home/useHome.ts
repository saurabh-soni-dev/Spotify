import useResponsiveDesign from '@hooks/useResponsiveDesign';
import {createStyles} from './home.style';
import {usePlayerStore} from '@services/usePlayerStore';

const useHome = () => {
  const {hp} = useResponsiveDesign();
  const styles = createStyles(hp);
  const {allTracks} = usePlayerStore();

  return {styles, allTracks};
};

export default useHome;
