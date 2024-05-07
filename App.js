import { useRef, useEffect } from 'react';
import Wifi from './Wifi';
import { useOrientation } from './useOrientation';
import { NavigationContainer } from '@react-navigation/native';
import { ResponsiveNavigation } from './assets/splitview1/ResponsiveNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator()
export default function App() {

  const orientation = useOrientation();
  
  const navigationRef = useRef();
    useEffect(() => {
    if (orientation === 'portrait' && navigationRef.current) {
      // Assuming 'Settings' is your main screen
      navigationRef.current.navigate('Wifi');
    }
  }, [orientation, navigationRef]);

  return (
    <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name='Wifi' component={Wifi} />
      <Tabs.Screen name='ResponsiveNavigation' component={ResponsiveNavigation} />
    </Tabs.Navigator>
    </NavigationContainer>
  )
  
}