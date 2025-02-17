'use client';

import * as AC from '@bacons/apple-colors';
import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { IconSymbol } from './ui/IconSymbol';

export function AnimatedLogo() {
  const [animation] = React.useState(() => new Animated.Value(0));

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logo,
          {
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.1],
                }),
              },
            ],
          },
        ]}
      >
        <IconSymbol name="wand.and.stars" size={32} color={AC.systemBlue} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
