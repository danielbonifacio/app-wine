import React from 'react';
// import * as HW from './HelloWorld.styles';
import { StyledView, Text, HotSite, Touchable } from '@sdk/components';
import { Pink, White } from '@sdk/colors';
import { shadow } from '@sdk/utils';
import { Dimensions } from 'react-native';
import { DEFAULT_SPACING } from '@constants';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

const {width} = Dimensions.get('window');
const halfScreenWidth = (width - (DEFAULT_SPACING * 4)) / 2;

const pages = [
  {
    id: '1',
    title: 'Headings',
    description: 'Estilos de cabeçalhos',
    screen: 'Headings',
  },
  {
    id: '2',
    title: 'Lottie',
    description: 'Animações dahora',
    screen: 'Animations',
  },
];

const HelloWorld: React.FC<NavigationInjectedProps> = ({ navigation }) => (
  <StyledView>
    <HotSite
      pages={pages}
      keyExtractor={item => item.id}
      separator={() => <StyledView width={DEFAULT_SPACING} />}
      renderPage={({ item }) => (
        <Touchable onPress={() => navigation.navigate(item.screen)}>
          <StyledView
            bgColor={Pink}
            p={DEFAULT_SPACING}
            width={halfScreenWidth}
            borderRadius={5}
            {...shadow(5)}
          >
            <Text
              color={White}
              weight={'Bold'}
              size={18}
              mb={5}
            >
              {item.title}
            </Text>
            <Text
              color={White}
              size={13}
            >
              {item.description}
            </Text>
          </StyledView>
        </Touchable>
      )}
    />
  </StyledView>
);

export default withNavigation(HelloWorld);
