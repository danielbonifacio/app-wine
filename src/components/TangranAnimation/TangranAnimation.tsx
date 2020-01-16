import React from 'react';
import * as TA from './TangranAnimation.styles';
import { splashNew } from '@animations';

const TangranAnimation = () => (
  <TA.Wrapper>
    <TA.Lottie
      source={splashNew}
      autoPlay
      loop={false}
      autoSize={false}
    />
  </TA.Wrapper>
);

export default TangranAnimation;
