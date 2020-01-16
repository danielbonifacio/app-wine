import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, ViewStyle } from 'react-native';
import { DEFAULT_SPACING } from '@constants';

declare interface HotSiteProps<T> {
  separator?: React.ComponentType
  key?: string | number
  pages: T[]
  renderPage: ListRenderItem<T>
  keyExtractor: (item: T, index: number) => string
  contentContainerStyle?: ViewStyle
}

function HotSite<T> (
  {
    pages,
    renderPage,
    separator,
    keyExtractor,
    contentContainerStyle,
  }: HotSiteProps<T>
) {
  return (
    <FlatList<T>
      horizontal
      data={pages}
      renderItem={renderPage}
      ItemSeparatorComponent={separator}
      keyExtractor={keyExtractor}
      contentContainerStyle={{
        ...sheet.container,
        ...contentContainerStyle,
      }}
    />
  );
}

const sheet = StyleSheet.create({
  container: {
    padding: DEFAULT_SPACING,
  },
});

export default HotSite;
