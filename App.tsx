import { useEffect, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ScrollDownTip from './ScrollDownTip';
import useBottomReached from './useBottomReached';

const content = Array(100).fill('Open up App.tsx to start working on your app!');

export default function App() {
  const { handleScroll, bottomReached } = useBottomReached();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} scrollEventThrottle={16} onScroll={handleScroll} contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text style={{ alignSelf: 'center' }}>START</Text>
        {content.map((item, idx) => (
          <View key={idx}>
            <Text>{idx}</Text>
          </View>
        ))}
        <Text style={{ alignSelf: 'center' }}>END</Text>
      </ScrollView>
      {!bottomReached && <ScrollDownTip />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
