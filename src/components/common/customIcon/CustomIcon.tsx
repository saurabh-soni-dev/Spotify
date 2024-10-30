import React, {FC, memo} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CustomIconProps {
  color?: string;
  size?: number;
  name: string;
  iconFamily: 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons';
}
const CustomIcon: FC<CustomIconProps> = ({
  color = 'white',
  size,
  name,
  iconFamily,
}) => {
  return (
    <>
      {iconFamily === 'Ionicons' && (
        <Ionicons name={name} size={size} color={color} />
      )}
      {iconFamily === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons name={name} size={size} color={color} />
      )}
      {iconFamily === 'MaterialIcons' && (
        <MaterialIcons name={name} size={size} color={color} />
      )}
    </>
  );
};

export default memo(CustomIcon);
