import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 667;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;

const moderateScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;

export default moderateScale;
