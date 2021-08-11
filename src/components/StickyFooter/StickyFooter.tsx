import React from 'react'
import { useOrientation } from '../../customHooks/useOrientation';
import { useNavigation } from '@react-navigation/native';
import { themeValues } from '../../theme/index';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Text,  
  View, 
  StyleSheet,
  Pressable,
} from 'react-native';

interface StickyFooterPressProps {
  orientation: string,
  fontSize: object,
  routeName: string,
  iconName: string,
  text: string,
}

const StickyFooterPressable = ({orientation, fontSize, routeName, iconName, text}: StickyFooterPressProps) => {
  const navigation = useNavigation();

  return (
    <Pressable  onPress={() => navigation.navigate(routeName)} style={({ pressed }) => [{ backgroundColor: pressed ? themeValues.brandColors.darkBlueHoover : themeValues.brandColors.darkBlue }, styles.footerButton ]} >
      <Ionicons name={iconName} size={orientation === 'LANDSCAPE'? 25 : 20} color="white" />
      <Text style={[styles.buttonText, fontSize]} numberOfLines={1}> {text} </Text>
    </Pressable  >
  )
}

const StickyFooter = () => {
  const orientation = useOrientation();
  var FONT_BACK_LABEL = 14;

  if (orientation === 'LANDSCAPE') {
    FONT_BACK_LABEL = 20;
  }

  const fontSize = {
    fontSize: FONT_BACK_LABEL
  };

  const fontSizeSave = {
    fontSize: FONT_BACK_LABEL+2,
  }

  const saveButtonSize = {
    width: orientation === 'LANDSCAPE'? 150 : 100,
    height: orientation === 'LANDSCAPE'? 50 : 35,
  }

  const handleSaveAlert = () => {

  }

  return (
    <View style={styles.footer}>

      <StickyFooterPressable
        orientation={orientation}
        fontSize={fontSize}
        routeName='Room'
        iconName='tablet-portrait-outline'
        text='Room / Space'
      />

      <StickyFooterPressable
        orientation={orientation}
        fontSize={fontSize}
        routeName='Improvement'
        iconName='construct-outline'
        text='Improvement'
      />

      <StickyFooterPressable
        orientation={orientation}
        fontSize={fontSize}
        routeName='Feature'
        iconName='add-outline'
        text='Feature'
      />

      <StickyFooterPressable
        orientation={orientation}
        fontSize={fontSize}
        routeName='Photo'
        iconName='camera-outline'
        text='Photo'
      />

      <StickyFooterPressable
        orientation={orientation}
        fontSize={fontSize}
        routeName='Note'
        iconName='document-text-outline'
        text='Note'
      />

      <Pressable onPress={handleSaveAlert} style={({ pressed }) => [{ backgroundColor: pressed ? themeValues.brandColors.greenHoover : themeValues.brandColors.green }, styles.saveButton, saveButtonSize ]} >
        <Text style={[styles.saveButtonText, fontSizeSave]} numberOfLines={1}> Save </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: themeValues.brandColors.darkBlue,
    flexDirection:'row',
    justifyContent: 'space-between',
    height:100,
    alignItems:'center',
  },
  bottomButtons: {
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
  },
  footerText: {
    color:'white',
    fontWeight: '600',
    alignItems:'center',
    fontSize:18,
  },
  buttonText: {
    color: 'white',
    alignItems:'center',
  },
  footerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    padding: 12,
    borderRadius: 5,
  },
  saveButton: {
    marginLeft: 60,
    marginRight: 50,
    borderRadius: 5,
    alignContent: 'flex-end',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: -1,
  }
})



export default StickyFooter;