import { StatusBar } from 'expo-status-bar';
import { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Settings from './Settings';
// import Volume from './Volume';
import {Settings} from './assets/splitview1/pages/Settings'
import {Volume} from './assets/splitview1/pages/Volume'
import {Status} from './assets/splitview1/pages/Status'
import NavigationButtons from './assets/splitview1/NavigationButtons'
import Wifi from './Wifi';
import Usb from './Usb';
import { useOrientation } from './useOrientation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ResponsiveLayout  from './assets/splitview1/ResponsiveLayout'
import {ResponsiveLayout} from './assets/splitview1/ResponsiveLayout';
// import { useNavigation } from '@react-navigation/native';
import { ResponsiveNavigation } from './assets/splitview1/ResponsiveNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
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

  // const navigation = useNavigation();
  

  return (
    <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name='Wifi' component={Wifi} />
      <Tabs.Screen name='ResponsiveNavigation' component={ResponsiveNavigation} />
    </Tabs.Navigator>
    </NavigationContainer>
    // <ResponsiveNavigation />
    // <NavigationContainer ref={navigationRef}>
    //   <ResponsiveLayout>
    //     <Stack.Navigator>
    //       <Stack.Screen name="NavigationButtons" component={NavigationButtons} options={{ headerShown: false }} />
    //       <Stack.Screen name="Settings" component={Settings} options={{ headerShown: orientation !== 'landscape' }} />
    //       <Stack.Screen name="Volume" component={Volume} options={{ headerShown: orientation !== 'landscape' }} />
    //       <Stack.Screen name="Status" component={Status} options={{ headerShown: orientation !== 'landscape' }} />
    //     </Stack.Navigator>
    //   </ResponsiveLayout>
    // </NavigationContainer>
  )
  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// const navigationRef = useRef();
  // const [isPortrait, setIsPortrait] = useState(true);


  // useEffect(() => {
  //   if (orientation === 'portrait' && navigationRef.current) {
  //     // Assuming 'Settings' is your main screen
  //     navigationRef.current.navigate('Settings');
  //   }
  // }, [orientation]);

  // useEffect(() => {
  //   setIsPortrait(orientation === 'portrait');
  // }, [orientation]);

  // return (
  //   <NavigationContainer ref={navigationRef}>
  //     {orientation === 'portrait' ? (
  //       // Portrait mode navigation
  //       <>
  //       {/* <Settings /> */}
  //       <Stack.Navigator>
  //         <Stack.Screen 
  //           name="Settings" 
  //           component={Settings}
  //           options={{
  //             headerLeft: () => null,
  //             // Optionally make the decision dynamic based on orientation
  //             headerShown: orientation === 'portrait',
  //           }}
  //         />
  //         <Stack.Screen name="Volume" component={Volume} 
  //         />
  //         <Stack.Screen name="Usb" component={Usb} 
  //         />
  //         <Stack.Screen name="Wifi" component={Wifi} 

  //         />
  //       </Stack.Navigator>
  //       </>
  //     ) : (
  //       // Landscape mode layout
  //       <View style={{ flexDirection: 'row', flex: 1 }}>
  //         <View style={{ flex: 1 }}>
  //           <Settings />
  //         </View>
  //         <View style={{ flex: 2 }}>
  //           <Stack.Navigator>
  //             <Stack.Screen name="Volume" component={Volume} 
  //             options={{
  //               headerLeft: () => null,
  //               // Optionally make the decision dynamic based on orientation
  //               headerShown: orientation !== 'portrait',
  //             }}
  //             />
  //             <Stack.Screen name="Usb" component={Usb} 
  //               options={{
  //                 headerLeft: () => null,
  //                 // Optionally make the decision dynamic based on orientation
  //                 headerShown: orientation !== 'portrait',
  //               }}
  //             />
  //             <Stack.Screen name="Wifi" component={Wifi} 
  //               options={{
  //                 headerLeft: () => null,
  //                 // Optionally make the decision dynamic based on orientation
  //                 headerShown: orientation !== 'portrait',
  //               }}
  //             />
  //           </Stack.Navigator>
  //         </View>
  //       </View>
  //     )}
  //   </NavigationContainer>
  // );
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );