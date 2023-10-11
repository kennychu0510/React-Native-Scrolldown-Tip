import { useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

const useBottomReached = () => {
  const [bottomReached, setBottomReached] = useState(false);
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent.layoutMeasurement.height + e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height) {
      setBottomReached(true);
    } else {
      setBottomReached(false);
    }
  };
  return {
    handleScroll,
    bottomReached,
  };
};

export default useBottomReached;
