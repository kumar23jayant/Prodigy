import { Dimensions, StyleSheet } from 'react-native'

const gridItemWidth =  (Dimensions.get('screen').width - 60) / 2

export default StyleSheet.create({
    safeArea: {
        flex: 1
    },
    conatiner: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20
    },
    carousel: {
        height: 170,
        marginVertical: 10
    },
    carouselContainer: {
        paddingHorizontal: 10
    },
    carouselItem: {
        width: 350,
        height: 150,
        borderRadius: 10,
        margin: 10
    },
    gridContainer: {
        paddingHorizontal: 10
    },
    gridItem: {
        width: gridItemWidth,
        height: 150,
        borderRadius: 10,
        margin: 10
    }
})