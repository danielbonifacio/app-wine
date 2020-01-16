import React from 'react';
import Navbar from '@components/Navbar';
import { SafeAreaView } from 'react-native';
import { ScrollView, Container } from '@sdk/components';
import { DEFAULT_SPACING } from '@constants';
import { Heading1, Heading2, Heading3, Heading4 } from '@sdk/headings';

const HeadingsScreen: React.FC = () => (
  <>
    <Navbar
      title={'Headings'}
    />
    <SafeAreaView>
      <ScrollView fluid>
        <Container mt={DEFAULT_SPACING}
          gap={20}>
          <Heading1>
            {'Heading 1'}
          </Heading1>
          <Heading2>
            {'Heading 2'}
          </Heading2>
          <Heading3>
            {'Heading 3'}
          </Heading3>
          <Heading4>
            {'Heading 4'}
          </Heading4>
        </Container>
      </ScrollView>
    </SafeAreaView>
  </>
);

export default HeadingsScreen;
