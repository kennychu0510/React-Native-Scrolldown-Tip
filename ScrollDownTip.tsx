import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

const DURATION = 1500;

const ScrollDownTip = () => {
  const yOffset = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.loop(
        Animated.timing(opacity, {
          toValue: 0,
          duration: DURATION,
          useNativeDriver: true,
          easing: Easing.bezier(.19,.32,.35,.72)
        }),
        {
          iterations: -1,
        }
      ),
      Animated.loop(
        Animated.timing(yOffset, {
          toValue: 40,
          duration: DURATION,
          useNativeDriver: true,
          easing: Easing.bezier(.19,.32,.35,.72)
        }),
        {
          iterations: -1,
        }
      ),
    ]).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY: yOffset }], opacity: opacity }}>
        <AntDesign name='arrowdown' size={24} color='black' />
      </Animated.View>
    </View>
  );
};

export default ScrollDownTip;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});
