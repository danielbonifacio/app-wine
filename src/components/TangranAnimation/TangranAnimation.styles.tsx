import React from 'react';
import styled from 'styled-components/native';
import { StyledView } from '@sdk/components';
import { Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

export const Wrapper: React.FC = ({ children }) => (
  <StyledView
    height={height}
    width={width}
    position={'absolute'}
    zIndex={0}
  >
    {children}
  </StyledView>
);

export const Lottie = styled(LottieView)`
  width: 100%;
  height: 100%;
`;
