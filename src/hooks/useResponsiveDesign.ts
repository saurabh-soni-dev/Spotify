import {useEffect, useMemo, useState} from 'react';
import {Dimensions, Platform} from 'react-native';

const useResponsiveDesign = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const wp = useMemo(
    () => (percentage: number) => {
      // Adjust for platform-specific design considerations
      const baseWidth = dimensions.width;
      return (baseWidth * percentage) / 100;
    },
    [dimensions],
  );

  const hp = useMemo(
    () => (percentage: number) => {
      // Adjust for platform-specific design considerations
      const baseHeight = dimensions.height;
      return (baseHeight * percentage) / 100;
    },
    [dimensions],
  );

  const fontSize = useMemo(
    () => (size: number) => {
      // Adjust font sizes based on device width and platform
      const adjustedSize = dimensions.width < 375 ? size * 0.8 : size;
      return Platform.OS === 'ios' ? adjustedSize : adjustedSize * 1; // Example adjustment for iOS
    },
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

  return {wp, hp, fontSize};
};

export default useResponsiveDesign;

// import { useEffect, useMemo, useState } from 'react';
// import { Dimensions, Platform } from 'react-native';

// const useResponsiveDesign = () => {
//   const [dimensions, setDimensions] = useState(Dimensions.get('window'));

//   const wp = useMemo(
//     () => (percentage: number) => (dimensions.width * percentage) / 100,
//     [dimensions],
//   );

//   const hp = useMemo(
//     () => (percentage: number) => (dimensions.height * percentage) / 100,
//     [dimensions],
//   );

//   const fontSize = useMemo(
//     () => (size: number) => {
//       // Dynamically determine the threshold based on the device width
//       const threshold = dimensions.width * 0.8; // For example, 80% of the width
//       const adjustedSize = dimensions.width < threshold ? size * 0.8 : size;

//       // Example adjustment for iOS
//       return Platform.OS === 'ios' ? adjustedSize : adjustedSize * 1;
//     },
//     [dimensions],
//   );

//   useEffect(() => {
//     const handleResize = () => {
//       setDimensions(Dimensions.get('window'));
//     };

//     const subscription = Dimensions.addEventListener('change', handleResize);

//     return () => {
//       subscription?.remove();
//     };
//   }, []);

//   return { wp, hp, fontSize };
// };

// export default useResponsiveDesign;
