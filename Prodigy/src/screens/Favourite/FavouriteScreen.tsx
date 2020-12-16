import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import styles from './styles'

const FavouriteScreen: React.FC = () => { 

    return (
        <SafeAreaView style={styles.safeArea }>
            <View style={ styles.conatiner }>
                <Text>This is Favourite Screen.</Text>
            </View>
        </SafeAreaView>
    )
}

export default FavouriteScreen