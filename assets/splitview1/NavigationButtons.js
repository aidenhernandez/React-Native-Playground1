import {View, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function NavigationButtons () {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
            <Button title="Go to Volume" onPress={() => navigation.navigate('Volume')} />
            <Button title="Go to Status" onPress={() => navigation.navigate('Status')} />
        </View>
    )
}