import {StyleSheet} from 'react-native';
import shadowGenerator from './shadowGenerator';

export default (depth: number) => {
  const resolved = shadowGenerator(depth);

  const sheet = StyleSheet.create({
    shadow: {
      elevation: resolved.elevation,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: resolved.height,
      },
      shadowOpacity: resolved.opacity,
      shadowRadius: resolved.radius,
    },
  });

  return {
    style: {
      ...sheet.shadow,
    },
  };
};
