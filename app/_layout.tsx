import Stack from '@/components/ui/Stack';
import React from 'react';

import ThemeProvider from '@/components/ui/ThemeProvider';
import '@/global.css';

import * as Form from '@/components/ui/Form';
import { IconSymbol } from '@/components/ui/IconSymbol';
import * as AC from '@bacons/apple-colors';

import '@/global.css';

export const unstable_settings = {
  initialRouteName: 'index',
};

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="index" options={{}} />
        <Stack.Screen
          name="_debug"
          options={{
            headerTransparent: false,

            headerLargeStyle: {
              backgroundColor: AC.systemGroupedBackground,
            },
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="legal/privacy"
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            title: 'Settings',
            // headerLargeStyle: {
            //   backgroundColor: undefined,
            // },
            headerTransparent: true,
            presentation: 'modal',
            headerRight: () => (
              <Form.Link headerRight href="/" dismissTo>
                <IconSymbol
                  name="arrow.down.circle.fill"
                  color={AC.systemGray}
                  size={28}
                />
              </Form.Link>
            ),
          }}
        />
        <Stack.Screen
          name="movie"
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="settings/icon"
          sheet
          options={{
            // headerLargeStyle: {
            //   backgroundColor: AC.systemGroupedBackground,
            // },
            // Quarter sheet with no pulling allowed
            headerTransparent: false,
            sheetGrabberVisible: false,
            sheetAllowedDetents: [0.25],
            headerRight: () => (
              <Form.Link headerRight href="/settings" dismissTo>
                <IconSymbol
                  name="xmark.circle.fill"
                  color={AC.systemGray}
                  size={28}
                />
              </Form.Link>
            ),
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
