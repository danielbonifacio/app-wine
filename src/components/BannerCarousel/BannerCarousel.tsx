import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Banner from '@components/Banner';
import { Dimensions, StyleSheet } from 'react-native';
import { Pink } from '@sdk/colors';
import { DEFAULT_SPACING } from '@constants';

const sheet = StyleSheet.create({
  container: {
    paddingVertical: 0,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: -5,
    backgroundColor: Pink,
  },
  containerCarousel: {
    paddingBottom: DEFAULT_SPACING,
  },
});

const { width: viewportWidth } = Dimensions.get('screen');

const HomeScreenBannerCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const DotsPagination = () => (
    <Pagination
      dotsLength={4}
      activeDotIndex={activeSlide}
      containerStyle={sheet.container}
      dotStyle={sheet.dots}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
  return (
    <>
      <Carousel
        data={[0,1,2,3]}
        renderItem={() => (
          <Banner />
        )}
        containerCustomStyle={sheet.containerCarousel}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth - 32}
        onSnapToItem={setActiveSlide}
      />
      <DotsPagination />
    </>
  );
};

export default HomeScreenBannerCarousel;
