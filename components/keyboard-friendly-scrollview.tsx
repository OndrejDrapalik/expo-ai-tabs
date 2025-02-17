'use client';

import React from 'react';
import { ScrollView, type ScrollViewProps } from 'react-native';

export function KeyboardFriendlyScrollView(props: ScrollViewProps) {
  return (
    <ScrollView
      {...props}
      contentInsetAdjustmentBehavior="automatic"
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="handled"
    />
  );
}
