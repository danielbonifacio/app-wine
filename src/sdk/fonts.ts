import * as Colors from './colors';
import moderateScale from './utils/moderateScale';

export const Types = {
  Thin: {
    fontFamily: 'Lato-Thin',
  },
  Light: {
    fontFamily: 'Lato-Light',
  },
  Regular: {
    fontFamily: 'Lato-Regular',
  },
  Bold: {
    fontFamily: 'Lato-Bold',
  },
  Black: {
    fontFamily: 'Lato-Black',
  },
};

const Sizes = {
  Micro: moderateScale(8),
  Caption: moderateScale(12),
  Body: moderateScale(14),
  Subheading: moderateScale(16),
  TabsDisabled: moderateScale(18),
  Title: moderateScale(20),
  Headline: moderateScale(24),
  TabsSelected: moderateScale(26),
  Headline2: moderateScale(28),
  Display: moderateScale(34),
  Display2: moderateScale(45),
  Display3: moderateScale(56),
  Display4: moderateScale(112),
  Button: moderateScale(14),
  ButtonText: moderateScale(12),
};

export const Fonts = {
  Micro: {
    fontSize: Sizes.Micro,
    letterSpacing: 0,
    lineHeight: moderateScale(16),
    ...Types.Regular,
  },
  Caption: {
    fontSize: Sizes.Caption,
    letterSpacing: moderateScale(-0.2),
    ...Types.Regular,
  },
  ProductCaption: {
    fontSize: Sizes.Caption,
    lineHeight: moderateScale(17),
    letterSpacing: moderateScale(-0.45),
    color: Colors.Grey,
    ...Types.Regular,
  },
  Body: {
    fontSize: Sizes.Body,
    letterSpacing: moderateScale(-0.4),
    ...Types.Regular,
  },
  Subheading: {
    fontSize: Sizes.Subheading,
    letterSpacing: moderateScale(-0.6),
    ...Types.Regular,
  },
  TabsDisabled: {
    fontSize: Sizes.TabsDisabled,
    letterSpacing: moderateScale(-0.68),
    ...Types.Regular,
  },
  TabsSelected: {
    fontSize: Sizes.TabsSelected,
    letterSpacing: moderateScale(-0.98),
    ...Types.Regular,
  },
  Title: {
    fontSize: Sizes.Title,
    letterSpacing: moderateScale(-0.8),
    ...Types.Regular,
  },
  Headline: {
    fontSize: Sizes.Headline,
    letterSpacing: moderateScale(-1),
    ...Types.Regular,
  },
  Headline2: {
    fontSize: Sizes.Headline2,
    letterSpacing: moderateScale(-1.2),
    ...Types.Regular,
  },
  Display: {
    fontSize: Sizes.Display,
    letterSpacing: moderateScale(-1.5),
    lineHeight: moderateScale(40),
    ...Types.Regular,
  },
  Display2: {
    fontSize: Sizes.Display2,
    letterSpacing: moderateScale(-1.8),
    ...Types.Regular,
  },
  Display3: {
    fontSize: Sizes.Display3,
    letterSpacing: moderateScale(-2),
    ...Types.Regular,
  },
  Display4: {
    fontSize: Sizes.Display4,
    letterSpacing: moderateScale(-5),
    ...Types.Light,
  },
  Button: {
    fontSize: Sizes.Button,
    letterSpacing: moderateScale(1),
    ...Types.Bold,
  },
  ButtonText: {
    fontSize: Sizes.Button,
    letterSpacing: moderateScale(1),
    ...Types.Bold,
  },
  Sizes,
  Types,
};
