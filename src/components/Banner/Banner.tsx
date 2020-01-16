import React from 'react';
import * as B from './Banner.styles';
import {BannerImage} from '@images';
import { TouchableProps } from 'react-native-svg';

const Banner: React.FC<TouchableProps> = ({ onPress }) => (
  <B.Wrapper onPress={onPress}>
    <B.InnerImage source={BannerImage} />
  </B.Wrapper>
);

export default Banner;
