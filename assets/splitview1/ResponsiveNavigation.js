import {useEffect, useRef} from 'react'
import { Settings } from './pages/Settings'
import { Volume } from './pages/Volume'
import { Status } from './pages/Status'
import NavigationButtons from './NavigationButtons'
import { ResponsiveLayout } from './ResponsiveLayout'
import { useOrientation } from '../../useOrientation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import {NavigationContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export function ResponsiveNavigation() {

    const orientation = useOrientation()
    const navigationRef = useRef()
    const isPortaitOrientation = orientation !== 'landscape'

    useEffect(() => {
        if(orientation === 'portait' && navigationRef.current) {
            // Assume Settings is your main screen
            navigationRef.current.navigate('Settings')
        }
    }, [orientation, navigationRef])

    return (
        
            <ResponsiveLayout>
                <Stack.Navigator>
                    <Stack.Screen name='NavigationButtons' component={NavigationButtons} options={{headerShown: false}} />
                    <Stack.Screen name='Settings' component={Settings} options={{headerShown: isPortaitOrientation}} />
                    <Stack.Screen name='Volume' component={Volume} options={{headerShown: isPortaitOrientation}} />
                    <Stack.Screen name='Status' component={Status} options={{headerShown: isPortaitOrientation}} />
                </Stack.Navigator>
            </ResponsiveLayout>
        
    )
}