import { StyleSheet, Text, View } from 'react-native';

export default function MoreTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>More</Text>
      <Text style={styles.description}>
        Profile and additional options will go here
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});
