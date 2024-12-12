import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useCounterStore } from '../zustand/store';

const Two = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Increment" onPress={increment} color="#4CAF50" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Decrement" onPress={decrement} color="#F44336" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    marginHorizontal: 10,
    width: 120,
  },
});

export default Two;