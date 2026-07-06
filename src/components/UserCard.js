import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserCard({ name }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: '#0000FF',
    borderRadius: 12,
    paddingVertical: 14,
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Guarantees centering inside the FlatList
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});