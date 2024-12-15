import {useEffect, useMemo, useState} from 'react';
import {Dimensions, Platform} from 'react-native';

const useResponsiveDesign = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const wp = useMemo(
    () => (percentage: number) => (dimensions.width * percentage) / 100,
    [dimensions],
  );

  const hp = useMemo(
    () => (percentage: number) => (dimensions.height * percentage) / 100,
    [dimensions],
  );

  const fs = useMemo(
    () => (size: number) => {
      const adjustedSize = dimensions.width < 375 ? size * 0.8 : size;
      return Platform.OS === 'ios' ? adjustedSize : adjustedSize * 1;
    },
    [dimensions],
  );

  const is = useMemo(
    () => (size: number) => wp(size), // Icon size
    [dimensions],
  );

  const m = useMemo(
    () => (percentage: number) => wp(percentage), // Margin
    [dimensions],
  );

  const p = useMemo(
    () => (percentage: number) => wp(percentage), // Padding
    [dimensions],
  );

  useEffect(() => {
    const handleResize = () => {
      setDimensions(Dimensions.get('window'));
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      subscription?.remove();
    };
  }, []);

  return {
    wp,
    hp,
    fs, // Font Size
    is, // Icon Size
    m, // Margin
    p, // Padding
  };
};

export default useResponsiveDesign;
