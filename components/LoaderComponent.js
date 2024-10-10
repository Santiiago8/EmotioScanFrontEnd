import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export const LoaderComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#66EDF8" />
      <Text style={styles.text}>Procesando, por favor espera...</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010231'
  },
  text: {
    color: '#66EDF8',
    marginTop: 10,
    fontSize: 16
  }
});