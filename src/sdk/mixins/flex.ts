import {css} from 'styled-components/native';
import {FlexStyle} from 'react-native';
import {getCssValue} from '@sdk/utils';

export interface FlexMixin {
  flex: number;
  flexBasis: FlexStyle['flexBasis'];
  flexDirection: FlexStyle['flexDirection'];
  flexGrow?: number;
  flexShrink?: number;
  flexWrap: FlexStyle['flexWrap'];
}

export const flexMixin = css<Partial<FlexMixin>>`
  ${({flex}) => flex && `flex: ${flex}`};
  ${({flexBasis}) => flexBasis && `flex-basis: ${getCssValue(flexBasis)}`};
  ${({flexDirection}) =>
    flexDirection && `flex-direction: ${getCssValue(flexDirection)}`};
  ${({flexGrow}) => flexGrow && `flex-grow: ${flexGrow}`};
  ${({flexShrink}) => flexShrink && `flex-shrink: ${flexShrink}`};
  ${({flexWrap}) => flexWrap && `flex-wrap: ${getCssValue(flexWrap)}`};
`;
