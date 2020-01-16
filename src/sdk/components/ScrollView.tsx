import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView as OriginalScrollView } from 'react-native';

declare interface IScrollView {
  fluid?: boolean
}

const styles = StyleSheet.create({
  fillVertical: {
    minHeight: '100%',
  },
});

const ScrollView: React.FC<IScrollView> = ({children, fluid}) => (
  <OriginalScrollView
    style={fluid && styles.fillVertical}
  >
    {children}
  </OriginalScrollView>
);

export default ScrollView;
