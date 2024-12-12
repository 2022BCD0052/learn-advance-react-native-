import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/slice/counderSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => dispatch(increment())}
          accessibilityLabel="Increase the counter value"
        />
        <Button
          title="Decrement"
          onPress={() => dispatch(decrement())}
          accessibilityLabel="Decrease the counter value"
        />
        <Button
          title="Reset"
          onPress={() => dispatch(reset())}
          accessibilityLabel="Reset the counter value"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  counterText: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-around',
    height: 150,
  },
});

export default Counter;
