import {Alert as Al} from 'react-native';

export const Alert = (label: string, value?: string) => {
  Al.alert(label, value);
};
