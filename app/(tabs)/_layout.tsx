import { IconSymbol } from '@/components/ui/IconSymbol';
import TouchableBounce from '@/components/ui/TouchableBounce';
import '@/global.css';
import * as AC from '@bacons/apple-colors';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Expo AI',
          tabBarIcon: ({ color }) => <Text>🗨️</Text>,
          headerLeft: () => (
            <Link href="/settings" asChild>
              <TouchableBounce sensory>
                <View
                  style={[
                    {
                      flex: 1,
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      alignItems: 'center',
                      display: 'flex',
                    },
                  ]}
                >
                  <IconSymbol name="gear" color={AC.label} />
                </View>
              </TouchableBounce>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <Text>👤</Text>,
        }}
      />
    </Tabs>
  );
}
