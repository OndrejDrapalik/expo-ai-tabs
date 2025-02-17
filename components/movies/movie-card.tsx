'use client';

import * as AC from '@bacons/apple-colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../card';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface MoviesCardProps {
  data?: Movie[];
  title?: string;
}

export function MoviesCard({ data, title }: MoviesCardProps) {
  return (
    <Card title={title}>
      <View style={styles.container}>
        <Text style={styles.text}>Movies will be displayed here</Text>
        {data && (
          <Text style={styles.count}>{data.length} movies available</Text>
        )}
      </View>
    </Card>
  );
}

export function MoviesSkeleton() {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.text}>Loading movies...</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
  },
  text: {
    fontSize: 16,
    color: AC.secondaryLabel,
  },
  count: {
    fontSize: 14,
    color: AC.tertiaryLabel,
    marginTop: 8,
  },
});
