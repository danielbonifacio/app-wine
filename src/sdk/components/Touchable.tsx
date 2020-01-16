import React from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';

declare interface TouchableComponent {
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
}

const Touchable: React.FC<TouchableComponent> = ({ children, onPress, disabled }) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
  >
    {children}
  </TouchableOpacity>
);

export default Touchable;
