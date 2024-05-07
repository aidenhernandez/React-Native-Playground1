import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useOrientation } from './useOrientation'; // Your orientation hook

const Settings = () => {
  const navigation = useNavigation();
  const orientation = useOrientation();

  const navigateToScreen = (screen) => {
    if (orientation === 'portrait') {
      navigation.navigate(screen);
    } else {
      navigation.navigate(screen);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Setting</Text>
      <Button title="Volume" onPress={() => navigation.navigate('Volume')} />
      <Button title="USB" onPress={() => navigation.navigate('Usb')} />
      <Button title="Wifi" onPress={() => navigation.navigate('Wifi')} />
    </View>
  );
};

export default Settings;
