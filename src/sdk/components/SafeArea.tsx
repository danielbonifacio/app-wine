import React from 'react';
import styled from 'styled-components/native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {moderateScale} from '@sdk/utils';

interface IAvoidingViewProps {
  avoidTop?: boolean | number;
  addTop?: number;
  avoidBottom?: boolean;
  addBottom?: number;
}

const AvoidingView = styled.View`
  padding-top: ${({avoidTop, addTop}: IAvoidingViewProps) =>
    (avoidTop ? getStatusBarHeight(true) : 0) +
    moderateScale((addTop && addTop) || 0)};

  padding-bottom: ${({avoidBottom, addBottom}: IAvoidingViewProps) =>
    (avoidBottom ? getBottomSpace() : 0) +
    moderateScale((addBottom && addBottom) || 0)};
`;

export default function SafeArea({
  children,
  avoidTop = false,
  avoidBottom = false,
  addTop = 0,
  addBottom = 0,
  ...props
}: IAvoidingViewProps & any) {
  return (
    <AvoidingView
      avoidTop={avoidTop}
      avoidBottom={avoidBottom}
      addTop={addTop}
      addBottom={addBottom}
      {...props}>
      {children}
    </AvoidingView>
  );
}
