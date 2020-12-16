import React from 'react'
import { SafeAreaView, View, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { getBanners } from '../../services'
import styles from './styles'

interface HomeProps { 

}

interface HomeState { 
    carousel: string[]
    grid: string[]
}

class HomeScreen extends React.Component<HomeProps, HomeState>{ 
    
    constructor(props: HomeProps) { 
        super(props)

        this.state = {
            carousel: [],
            grid: []
        }
        this.onBannerFetchFailure.bind(this)
        this.onBannerFetchSuccess.bind(this)
    }

    componentDidMount() { 
        getBanners(this.onBannerFetchSuccess, this.onBannerFetchFailure)
    }

    onBannerFetchSuccess = (response: any) => { 
        
        let banners: string[] = response.data
        console.log(banners.length)
        this.setState({
            carousel: banners.slice(0, 6),
            grid: banners.slice(6, banners.length)
        })
    }

    onBannerFetchFailure = (error: any) => { 
        console.log(error)
    }

    render() {
        return (
            <SafeAreaView style={ styles.safeArea }>
                <View style={ styles.conatiner }>
                    <View style={ styles.carousel }>
                        <FlatList
                            horizontal
                            data={this.state.carousel}  
                            contentContainerStyle={ styles.carouselContainer }
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={ false }
                            renderItem={({ item, index } ) => {
                                return (
                                    <Image source={{ uri: item }} style={ styles.carouselItem }/>
                                )
                            }}
                            keyExtractor={(item, index) => item + index }
                            />
                    </View>
                    <FlatList
                        numColumns={2}
                        data={this.state.grid}
                        contentContainerStyle={ styles.gridContainer }
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index } ) => {
                            return (
                                <Image source={{ uri: item }} style={styles.gridItem} resizeMode='cover' />
                            )
                        }}
                        keyExtractor={(item, index) => item + index }
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default HomeScreen