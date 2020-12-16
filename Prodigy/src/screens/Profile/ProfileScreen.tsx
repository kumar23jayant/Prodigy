import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'

const ProfileScreen: React.FC = () => { 

    return (
        <SafeAreaView style={styles.safeArea }>
            <View style={ styles.conatiner }>
                <Text>This is Profile Screen.</Text>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen