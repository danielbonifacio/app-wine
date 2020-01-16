import isNumber from './isNumber';
import moderateScale from './moderateScale';

export default (value: any) =>
  !isNumber(value) ? value || 0 : moderateScale(value) || 0;
