import {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';

const BASE_WIDTH = 375;
const useResponsive = () => {
  const {width, height, fontScale} = useWindowDimensions();

  // Calculate scale based on the current window width
  const scale = useMemo(() => {
    return (size: number): number => (width / BASE_WIDTH) * size;
  }, [width]);

  // Responsive font size calculation
  const responsiveFontSize = useMemo(() => {
    return (size: number): number => Math.round(scale(size) / fontScale); // Adjust for font scaling
  }, [scale, fontScale]);

  // Responsive width calculation
  const responsiveWidth = useMemo(() => {
    return (percentage: number): number =>
      Math.round((width * percentage) / 100);
  }, [width]);

  // Responsive height calculation
  const responsiveHeight = useMemo(() => {
    return (percentage: number): number =>
      Math.round((height * percentage) / 100);
  }, [height]);

  return {
    scale,
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight,
  };
};

export default useResponsive;
