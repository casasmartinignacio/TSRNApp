import React from 'react';

import {SafeAreaView, View, Text, StyleSheet} from 'react-native';


const NoteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <Text style={styles.title}> NOTE </Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  centeredContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1b',
    margin: 50,
    padding: 60,
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 40,
    color: 'blue'
  },
})

export default NoteScreen;
