import * as Form from '@/components/ui/Form';
import { IconSymbol } from '@/components/ui/IconSymbol';
import * as AC from '@bacons/apple-colors';
import * as AppIcon from 'expo-quick-actions/icon';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// @ts-expect-error
const HERMES_RUNTIME = global.HermesInternal?.getRuntimeProperties?.() ?? {};
const HERMES_VERSION = HERMES_RUNTIME['OSS Release Version'];
const isStaticHermes = HERMES_RUNTIME['Static Hermes'];

export default function DebugRoute() {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 116 + bottom,
        }}
      >
        {/* Main Content */}
        {process.env.EXPO_OS !== 'web' && AppIcon?.isSupported && (
          <Form.Section title="Style">
            <Form.Link href="/settings/icon">App Icon</Form.Link>
          </Form.Section>
        )}

        {HERMES_VERSION && (
          <Form.Section title="Hermes">
            <Form.Text hint={HERMES_VERSION}>Version</Form.Text>
            <Form.Text
              hint={
                isStaticHermes ? (
                  <IconSymbol
                    name="checkmark.circle.fill"
                    color={AC.systemGreen}
                  />
                ) : (
                  <IconSymbol name="slash.circle" color={AC.systemGray} />
                )
              }
            >
              Static Hermes
            </Form.Text>
          </Form.Section>
        )}
      </ScrollView>

      {/* Fixed Bottom Section */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 16,
          paddingBottom: 16 + bottom,
          backgroundColor: AC.systemGroupedBackground,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: AC.separator,
        }}
      >
        <Form.Section>
          <Form.Link href="/_debug" systemImage="ladybug">
            Debug
          </Form.Link>
          <Form.Link href="/_sitemap">/_sitemap</Form.Link>
        </Form.Section>
      </View>
    </SafeAreaView>
  );
}
