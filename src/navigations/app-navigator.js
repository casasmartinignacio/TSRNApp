import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/homepage';
import ContactScreen from '../screens/contact';
import FeatureScreen from '../screens/feature';
import ImprovementScreen from '../screens/improvement';
import NoteScreen from '../screens/note';
import PhotoScreen from '../screens/photo';
import RoomScreen from '../screens/room';

import StickyFooter from '../components/StickyFooter';
import {
  View, 
  StyleSheet
} from 'react-native';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Feature" component={FeatureScreen} />
        <Stack.Screen name="Improvement" component={ImprovementScreen} />
        <Stack.Screen name="Note" component={NoteScreen} />
        <Stack.Screen name="Photo" component={PhotoScreen} />
        <Stack.Screen name="Room" component={RoomScreen} />
      </Stack.Navigator>
      <View>
        <StickyFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollViewStyle: {
    borderWidth: 2,
    borderColor: 'blue'
  }
})

export default AppNavigator;