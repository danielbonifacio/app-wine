import React, { useState } from 'react';
import { StyledView } from '@sdk/components';
import Navbar from '@components/Navbar';
import TangranAnimation from '@components/TangranAnimation';
import Lottie from 'lottie-react-native';
import { success, present } from '@animations';

const AnimationsScreen: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPresent, setShowPresent] = useState(false);

  setTimeout(() => {
    setShowSuccess(true);
    setShowPresent(true);
  }, 1500);

  return (
    <>
      <Navbar title={'Profile'} />
      <StyledView>
        <TangranAnimation />
        <StyledView
          width={'100%'}
          height={'100%'}
        >
          {
            showSuccess &&
            <Lottie
              style={{ width: '100%', position: 'absolute', top: 0 }}
              source={success}
              autoPlay
              autoSize
              loop={false}
            />
          }
          {
            showPresent &&
            <Lottie
              style={{ width: '100%', position: 'absolute', left: 0, bottom: 20 }}
              source={present}
              autoPlay
              autoSize
              loop={false}
            />
          }
        </StyledView>
      </StyledView>
    </>
  );
};

export default AnimationsScreen;
