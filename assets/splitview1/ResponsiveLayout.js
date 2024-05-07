import { useEffect, useState } from 'react'
import {View, Button, Text} from 'react-native'
import { useOrientation } from '../../useOrientation'
import { useNavigation } from '@react-navigation/native';

export const ResponsiveLayout = ({children}) => {
    const orientation = useOrientation()
    const navigation = useNavigation()

    const [currentPage, setCurrentPage] = useState('Settings')

    useEffect(() => {
        if(orientation === 'landscape') {
            navigation.navigate(currentPage)
        }
    }, [orientation === 'landscape' ,currentPage, navigation])

    const handleNavigation = (page) => {
        setCurrentPage(page);
        navigation.navigate(page);
      };

    if(orientation === 'landscape') {
        return (
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={{ flex: 1, backgroundColor: '#eee', padding: 10 }}>
                <Button title="Settings" onPress={() => handleNavigation('Settings')} />
                <Button title="Volume" onPress={() => handleNavigation('Volume')} />
                <Button title="Status" onPress={() => handleNavigation('Status')} />
              </View>
              <View style={{ flex: 3 }}>
                {children}
              </View>
            </View>
          );
    }

    return children
}