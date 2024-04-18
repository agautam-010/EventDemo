import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const FloatingButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{'\u267C'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 50,
  },
});

export default FloatingButton;
