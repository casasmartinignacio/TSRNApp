import React from 'react';

import {SafeAreaView, View, Text, StyleSheet} from 'react-native';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <Text style={styles.title}> Bienvenido! </Text>
        <Text style={{color: 'red'}}>Esto es una app de prueba</Text>
        <Text style={styles.mainText}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Aenean commodo ligula eget dolor. Aenean massa. 
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        </Text>
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
  mainText: {
    marginTop: 20,
    paddingLeft: 100,
    paddingRight: 100,
    color: 'white'
  }
})

export default HomeScreen;

