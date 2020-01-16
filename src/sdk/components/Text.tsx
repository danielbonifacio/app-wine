import styled from 'styled-components/native';
import {moderateScale} from '@sdk/utils';
import {Types} from '@sdk/fonts';
import {marginMixin, MarginMixin} from '@sdk/mixins/margin';
import {paddingMixin, PaddingMixin} from '@sdk/mixins/padding';

export type TextProps = Partial<
  {
    size?: number;
    color?: string;
    letterSpacing?: number;
    lineHeight?: number;
    align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    weight?: 'Thin' | 'Black' | 'Bold' | 'Light' | 'Regular';
  } & MarginMixin &
    PaddingMixin
>;

const Text = styled.Text<TextProps>`
  ${marginMixin}
  ${paddingMixin}
  font-size: ${({size}) => moderateScale(size || 14)};
  color: ${({color}) => color || 'black'};
  letter-spacing: ${({letterSpacing}) => moderateScale(letterSpacing || 0)};

  ${({lineHeight}) =>
    lineHeight && `line-height: ${moderateScale(lineHeight || 0)}`};
  ${({align}) => align && `text-align: ${align}`};

  font-family: ${({weight}) => {
    const fontWeight = weight ? Types[weight] : undefined;
    return fontWeight ? fontWeight.fontFamily : Types.Regular.fontFamily;
  }};
`;

export default Text;
